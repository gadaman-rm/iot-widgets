import { boolToStr, htmlRoot, strToBool } from "../../_helper"
import htmlText from "./Menu.html?raw"
import cssText from "./Menu.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface MenuLoadedEvent {
  loaded: Boolean
}

export interface MenuSelectEvent {
  group?: string
}

interface MetaDataset {
  group: string
  disable: boolean
  nested: boolean
}

const TAG_Menu = `g-menu`
const ATTRIBUTES = ["id", "x", "y", "open"] as const
export class Menu extends HTMLDivElement {
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }

  static get observedAttributes() {
    return ATTRIBUTES
  }
  rootRef: HTMLDivElement
  menuRef: HTMLUListElement
  loadEvent: CustomEvent<MenuLoadedEvent>
  selectEvent: CustomEvent<MenuSelectEvent>

  constructor() {
    super()
    this.attachShadow({ mode: "open", slotAssignment: "manual" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_Menu)
    this.initAttr()
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.menuRef = this.shadowRoot!.querySelector(".menu")!

    this.menuRef.addEventListener(
      "click",
      (e) => {
        const selectedItem = e
          .composedPath()
          .find(
            (item) => (item as HTMLElement).tagName?.toLowerCase() === "li",
          ) as HTMLLIElement | undefined

        if (selectedItem) {
          if (
            !strToBool(selectedItem.dataset.disable) &&
            !strToBool(selectedItem.dataset.nested)
          ) {
            this.selectEvent.detail.group = selectedItem.dataset.group
            this.dispatchEvent(this.selectEvent)
          }
        }
      },
      false,
    )
    this.loadEvent = new CustomEvent<MenuLoadedEvent>("menu-loaded", {
      detail: { loaded: false },
    })

    this.selectEvent = new CustomEvent<MenuSelectEvent>("menu-select", {
      detail: {},
    })

    // this.mdMenu = new MDCMenu(this.rootRef)
    // this.mdMenu.setAbsolutePosition(100, 200)
    // this.mdMenu.open = true
  }

  initAttr() {
    this.initAttribute("x", "0")
    this.initAttribute("y", "0")
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }

  public get x() {
    return +this.getAttribute("x")!
  }
  public set x(x: number) {
    this.setAttribute("x", x.toString())
  }

  public get y() {
    return +this.getAttribute("y")!
  }
  public set y(y: number) {
    this.setAttribute("y", y.toString())
  }

  public get open() {
    return strToBool(this.getAttribute("open"))
  }
  public set open(open: boolean) {
    this.setAttribute("open", boolToStr(open))
  }

  connectedCallback() {
    let metaData: Partial<MetaDataset> = {
      disable: false,
      nested: false,
    }
    for (const child of this.children) {
      if (["span", "svg"].includes(child.tagName.toLowerCase())) {
        const role = (child as HTMLElement)?.dataset?.role

        switch (role) {
          case "meta": {
            const dataset = (child as HTMLElement).dataset
            metaData.nested = strToBool(dataset.nested)
            metaData.disable = strToBool(dataset.disable)
            metaData.group = dataset?.group

            this.menuRef.appendChild(
              htmlRoot`
<li class="item" 
data-disable="${boolToStr(metaData.disable)}" 
data-nested="${boolToStr(metaData.nested)}" 
data-group="${metaData.group}">

${
  metaData.nested
    ? ""
    : `${metaData.disable ? "" : "<md-ripple></md-ripple>"}
  <span class="icon"><slot name="${metaData.group}-icon"></slot></span>
  <span class="text"><slot name="${metaData.group}-text"></slot></span>
  <span class="hint"><slot name="${metaData.group}-hint"></slot></span>`
}
</li>
`,
            )

            break
          }

          case "icon": {
            this.shadowRoot!.querySelector<HTMLSlotElement>(
              `slot[name="${(child as HTMLElement).dataset.group}-icon"]`,
            )?.assign(child)

            break
          }

          case "text": {
            this.shadowRoot!.querySelector<HTMLSlotElement>(
              `slot[name="${(child as HTMLElement).dataset.group}-text"]`,
            )?.assign(child)

            break
          }

          case "hint": {
            this.shadowRoot!.querySelector<HTMLSlotElement>(
              `slot[name="${(child as HTMLElement).dataset.group}-hint"]`,
            )?.assign(child)

            break
          }
        }
      }

      if (child.tagName === "HR")
        this.menuRef.appendChild(document.createElement("hr"))
    }

    setTimeout(() => {
      this.loadEvent.detail.loaded = true
      this.dispatchEvent(this.loadEvent)
    }, 0)
  }
  Callback() {}
  attributeChangedCallback(
    attrName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attrName) {
      case "id":
        this.idUpdate(oldValue, newValue)
        break
      case "x":
        this.xUpdate(+oldValue, +newValue)
        break
      case "y":
        this.yUpdate(+oldValue, +newValue)
        break
      case "open":
        this.openUpdate(strToBool(oldValue), strToBool(newValue))
        break
    }
  }

  idUpdate(_oldId: string, _newId: string) {}

  xUpdate(oldX: number, newX: number) {
    this.rootRef.style.insetInlineStart = `${newX}px`
  }
  yUpdate(oldY: number, newY: number) {
    this.rootRef.style.insetBlockStart = `${newY}px`
  }

  openUpdate(_oldOpen: boolean, newOpen: boolean) {
    if (newOpen) this.rootRef.style.display = "block"
    else this.rootRef.style.display = "none"
  }

  // @ts-ignore: Unreachable code error
  addEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
  // @ts-ignore: Unreachable code error
  removeEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void
}

interface CustomElementEventMap extends HTMLElementEventMap {
  "menu-loaded": { detail: MenuLoadedEvent }
  "menu-select": { detail: MenuSelectEvent }
}

customElements.define(TAG_Menu, Menu, { extends: "div" })
