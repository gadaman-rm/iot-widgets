// import '@material/web/ripple/ripple'
import {
  BASE_CHILDREN_ATTRIBUTES,
  BaseChildren,
} from "../../_helper/BaseChildren"
import htmlText from "./Tabs.html?raw"
import cssText from "./Tabs.scss?inline"
import { boolToStr, htmlRoot, strToBool } from "../../_helper"

export interface TabOnSelectEvent extends MouseEvent {
  param: {
    role: string
  }
}

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

const TAG_NAME = `g-tabs`
const ATTRIBUTES = ["ripple", "tab", "size", "item-size", "anchor"] as const
const CHILDREN_ATTRIBUTES = ["aria-selected"] as const
export class Tabs extends BaseChildren {
  item?: HTMLDivElement[]
  rootRef: HTMLDivElement
  slotRefs: Map<string, HTMLSlotElement> = new Map()
  #onChange?: (e: TabOnSelectEvent) => void
  static get observedAttributes() {
    return [...BASE_CHILDREN_ATTRIBUTES, ...ATTRIBUTES]
  }
  static get observedChildrenAttributes() {
    return [...CHILDREN_ATTRIBUTES]
  }
  constructor() {
    super(template, TAG_NAME)
    this.rootRef = this.shadowRoot!.querySelector("#root")!
  }

  public get ripple() {
    return strToBool(this.getAttribute("ripple"))
  }
  public set ripple(ripple: boolean) {
    this.setAttribute("ripple", boolToStr(ripple))
  }

  public get tab() {
    return this.getAttribute("tab")!
  }
  public set tab(tab: string) {
    this.setAttribute("tab", tab)
  }

  public get size() {
    return +this.getAttribute("size")!
  }
  public set size(size: number) {
    this.setAttribute("size", size.toString())
  }

  public get itemSize() {
    return +this.getAttribute("item-size")!
  }
  public set itemSize(itemSize: number) {
    this.setAttribute("item-size", itemSize.toString())
  }

  public get anchor() {
    return this.getAttribute("anchor")! as any
  }
  public set anchor(anchor: "left" | "top" | "right" | "bottom") {
    this.setAttribute("anchor", anchor)
  }

  public set onChange(fn: (e: TabOnSelectEvent) => void) {
    this.#onChange = fn
  }

  onChildernChange() {
    this.slotRefs = new Map()
    this.rootRef.replaceChildren()
    for (let item of this.children) {
      const role = item.getAttribute("name")
      if (item.getAttribute("aria-selected") === null)
        item.setAttribute("aria-selected", "false")
      if (role) {
        this.rootRef.appendChild(
          htmlRoot`<div class="item" key="${role}">${this.ripple ? "<md-ripple></md-ripple>" : ""}<slot id="${role}" name="${role}"></slot></div>`,
        )
        const slotRef = this.shadowRoot!.querySelector<HTMLSlotElement>(
          `#${role}`,
        )!
        slotRef.assign(item)
        item.addEventListener("click", ((e: TabOnSelectEvent) => {
          if (role && this.tab !== role) {
            e.param = { role }
            this.tab = role
            if (this.#onChange) this.#onChange(e)
          }
        }) as any)
        this.slotRefs.set(role, slotRef)
      }
    }
  }

  select(role: string | null | undefined) {
    for (const item of this.children) {
      if (item.getAttribute("name") === role)
        item.setAttribute("aria-selected", "true")
      else item.setAttribute("aria-selected", "false")
    }
  }

  close() {
    this.removeAttribute("tab")
  }

  onChildernAttrChange(
    target: HTMLElement,
    attributeName: string,
    oldValue: string,
    newValue: string,
  ): void {
    const name = target.getAttribute("name")
    if (name) {
      const item = this.rootRef.children.namedItem(name)
      if (item) item.setAttribute(attributeName, newValue)
    }
  }

  #dir(className: string) {
    const match = this.rootRef.className.match(/tab--dir-\w+/)
    if (match) this.rootRef.classList.replace(match[0], className)
    else this.rootRef.classList.add(className)
  }

  attributeUpdate(
    attributeName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ): void {
    switch (attributeName) {
      case "tab":
        this.tabUpdate(oldValue, newValue)
        break
      case "size":
        this.sizeUpdate(+oldValue, +newValue)
        break
      case "item-size":
        this.itemSizeUpdate(+oldValue, +newValue)
        break
      case "anchor":
        this.anchorUpdate(oldValue, newValue)
        break
    }
  }

  tabUpdate(oldTab: string, newTab: string) {
    this.select(newTab)
  }
  sizeUpdate(oldSize: number, newSize: number) {
    this.style.setProperty("--tab-size", `${newSize}px`)
  }
  itemSizeUpdate(oldItemSize: number, newItemSize: number) {
    this.style.setProperty("--tab-item-size", `${newItemSize}px`)
  }
  anchorUpdate(oldAnchor: string, newAnchor: string) {
    switch (newAnchor) {
      case "left":
        this.#dir("tab--dir-left")
        break
      case "right":
        this.#dir("tab--dir-right")
        break
      case "top":
        this.#dir("tab--dir-top")
        break
      case "bottom":
        this.#dir("tab--dir-bottom")
        break
    }
  }
}

customElements.define(TAG_NAME, Tabs, { extends: "div" })
