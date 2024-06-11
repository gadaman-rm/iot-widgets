import { getCssVar } from "../../_helper"
import htmlText from "./Window.html?raw"
import cssText from "./Window.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface WidgetLoadedEvent {
  loaded: Boolean
}

const TAG_NAME = `g-window`
const ATTRIBUTES = ["id"] as const
export class Window extends HTMLDivElement {
  static get observedAttributes() {
    return ATTRIBUTES
  }
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }
  rootRef: HTMLDivElement
  widgetLoadEvent: CustomEvent<WidgetLoadedEvent>
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_NAME)
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.widgetLoadEvent = new CustomEvent<WidgetLoadedEvent>("widget-loaded", {
      detail: { loaded: false },
    })
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }

  connectedCallback() {
    console.log(getCssVar("--window-width", this))
    setTimeout(() => {
      this.widgetLoadEvent.detail.loaded = true
      this.dispatchEvent(this.widgetLoadEvent)
    }, 0)
  }
  disconnectedCallback() {}
  attributeChangedCallback(
    attrName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attrName) {
      case "id":
        this.idUpdate(oldValue, newValue)
        break
    }
  }

  idUpdate(oldId: string, newId: string) {
    console.log("id:", oldId, newId)
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
  "widget-loaded": { detail: WidgetLoadedEvent }
}

customElements.define(TAG_NAME, Window, { extends: "div" })
