import { boolToStr, htmlRoot, strToBool } from "../../_helper"
import htmlText from "./MenuJson.html?raw"
import cssText from "./MenuJson.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface MenuJsonLoadedEvent {
  loaded: Boolean
}

export interface Item {
  type: "item"
  id: string
  text: string
  icon: string
  hint: string
  disable?: boolean
}

export interface SubItem {
  type: "sub-item"
  text: string
  icon: string
  menuJsonItems: MenuJsonItem[]
}

export interface Divider {
  type: "divider"
}

export type MenuJsonItem = Item | SubItem | Divider

export interface MenuJsonSelectEvent {
  id?: string
}

const TAG_MenuJson = `g-menu-json`
const ATTRIBUTES = ["id", "x", "y", "open"] as const
export class MenuJson extends HTMLDivElement {
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }
  static get observedAttributes() {
    return ATTRIBUTES
  }
  rootRef: HTMLDivElement
  menuRef: HTMLUListElement
  loadEvent: CustomEvent<MenuJsonLoadedEvent>
  selectEvent: CustomEvent<MenuJsonSelectEvent>

  #items: MenuJsonItem[] = []
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_MenuJson)
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.menuRef = this.shadowRoot!.querySelector(".menu")!
    this.init()

    this.loadEvent = new CustomEvent<MenuJsonLoadedEvent>("component-loaded", {
      detail: { loaded: false },
    })
    this.selectEvent = new CustomEvent<MenuJsonSelectEvent>("menu-select", {
      detail: {},
    })

    this.menuRef.addEventListener(
      "click",
      (e) => {
        const selectedItem = e
          .composedPath()
          .find(
            (item) => (item as HTMLElement).tagName?.toLowerCase() === "li",
          ) as HTMLLIElement | undefined

        if (selectedItem) {
          const isSubMenu = selectedItem.classList.contains("item-sub")
          if (
            !isSubMenu &&
            !strToBool(selectedItem.dataset.disable) &&
            !strToBool(selectedItem.dataset.nested)
          ) {
            this.selectEvent.detail.id = selectedItem.dataset.group
            this.dispatchEvent(this.selectEvent)
            this.open = false
          }
        }
      },
      false,
    )

    document.addEventListener("click", (e) => {
      if (
        this.open &&
        !e
          .composedPath()
          .find(
            (item) =>
              (item as HTMLElement).tagName?.toLowerCase() === "li" &&
              (item as HTMLElement).classList.contains("item-sub"),
          )
      )
        this.open = false
    })

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.code === "Escape") this.open = false
    })
  }

  init() {
    this.initAttr()
    this.initCssState()
  }

  initAttr() {
    this.initAttribute("x", "0")
    this.initAttribute("y", "0")
  }

  initCssState() {
    this.style.setProperty("--state-window-width", window.innerWidth.toString())
    this.style.setProperty(
      "--state-window-height",
      window.innerHeight.toString(),
    )
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

  public get items() {
    return this.#items
  }
  public set items(item: MenuJsonItem[]) {
    this.#items = item
    setTimeout(() => this.rander(), 0)
  }

  rander() {
    this.menuRef.replaceChildren()

    this.menuMaker(this.#items).forEach((item) => {
      this.menuRef.append(htmlRoot`${item}`)
    })
  }

  menuMaker(menuJsonItems: MenuJsonItem[]): string[] {
    return menuJsonItems.map((item) => {
      switch (item.type) {
        case "item": {
          return `<li class="item" data-disable="${item.disable ? "true" : "false"}" data-group="${item.id}">
  ${item.disable ? "" : "<md-ripple></md-ripple>"}
  <span class="icon">${item.icon}</span>
  <span class="text">${item.text}</span>
  <span class="hint">${item.hint}</span>
</li>`
        }

        case "divider": {
          return `<hr />`
        }

        case "sub-item": {
          return `<li class="item item-sub" data-disable="false">
  <span class="icon">${item.icon}</span>
  <span class="text">${item.text}</span>
  <span class="hint">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
      <path
        d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
      />
    </svg>
  </span>
  <ul class="menu">
   ${this.menuMaker(item.menuJsonItems).join("")}
  </ul>
</li>`
        }
      }
    })
  }

  handleWindowResize = () => {
    this.style.setProperty("--state-window-width", window.innerWidth.toString())
    this.style.setProperty(
      "--state-window-height",
      window.innerHeight.toString(),
    )
  }

  connectedCallback() {
    this.loadEvent.detail.loaded = true
    this.dispatchEvent(this.loadEvent)
    window.addEventListener("resize", this.handleWindowResize)

    window.addEventListener("contextmenu", (e) => {
      e.preventDefault()
      const x = e.x
      const y = e.y
      const winWidth = window.innerWidth
      const winHeight = window.innerHeight
      const cmWidth = this.rootRef.offsetWidth
      const cmHeight = this.rootRef.offsetHeight

      this.shadowRoot!.querySelectorAll<HTMLUListElement>(
        ".content > .menu > .item-sub > .menu",
      ).forEach((item) => {
        const subMenu = item?.querySelector<HTMLUListElement>(
          ".item-sub .menu .item-sub .menu",
        )

        if (item) {
          const menuWidth = item.offsetWidth
          const menuHeight = item.offsetHeight

          x + cmWidth + menuWidth > winWidth
            ? (item.style.insetInlineStart =
                "calc(0px - var(--menu-sub-width))")
            : (item.style.insetInlineStart = "var(--menu-width)")

          if (y + cmHeight + menuHeight > winHeight) {
            item.style.insetBlockStart = "auto"
            item.style.insetBlockEnd = "0px"
          } else {
            item.style.insetBlockStart = "0px"
            item.style.insetBlockEnd = "auto"
          }
        }

        if (item && subMenu) {
          const menuWidth = item.offsetWidth
          const menuHeight = item.offsetHeight
          const subWidth = subMenu.offsetWidth
          const subHeight = subMenu.offsetHeight

          x + cmWidth + menuWidth + subWidth > winWidth
            ? (subMenu.style.insetInlineStart =
                "calc(0px - var(--menu-sub-width))")
            : (subMenu.style.insetInlineStart = "var(--menu-sub-width)")

          if (y + cmHeight + menuHeight + subHeight > winHeight) {
            subMenu.style.insetBlockStart = "auto"
            subMenu.style.insetBlockEnd = "0px"
          } else {
            subMenu.style.insetBlockStart = "0px"
            subMenu.style.insetBlockEnd = "auto"
          }
        }
      })

      this.x = x + cmWidth + 5 > winWidth ? Math.abs(cmWidth - x) : x
      this.y = y + cmHeight + 5 > winHeight ? Math.abs(cmHeight - y) : y

      this.open = true
    })
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this.handleWindowResize)
  }
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

  idUpdate(oldId: string, newId: string) {
    console.log(oldId, newId)
  }

  xUpdate(oldX: number, newX: number) {
    this.rootRef.style.insetInlineStart = `${newX}px`
  }
  yUpdate(oldY: number, newY: number) {
    this.rootRef.style.insetBlockStart = `${newY}px`
  }

  openUpdate(_oldOpen: boolean, newOpen: boolean) {
    if (newOpen) {
      this.rootRef.style.visibility = "visible"
    } else {
      this.rootRef.style.display = "none"
      this.rootRef.style.visibility = "hidden"
      setTimeout(() => (this.rootRef.style.display = "block"), 20)
    }
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
  "component-loaded": { detail: MenuJsonLoadedEvent }
  "menu-select": { detail: MenuJsonSelectEvent }
}

customElements.define(TAG_MenuJson, MenuJson, { extends: "div" })
