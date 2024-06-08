import { Tabs } from "@material/web/tabs/internal/tabs"
import htmlText from "./MuiTab.html?raw"
import cssText from "./MuiTab.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface MuiTabLoadedEvent {
  loaded: Boolean
}

const TAG_MuiTab = `g-muitab`
const ATTRIBUTES = ["id"] as const
export class MuiTab extends HTMLDivElement {
  static get observedAttributes() {
    return ATTRIBUTES
  }
  rootRef: HTMLDivElement
  panelsRef: HTMLDivElement
  tabsRef: Tabs
  loadEvent: CustomEvent<MuiTabLoadedEvent>
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_MuiTab)
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.panelsRef = this.shadowRoot!.querySelector("#panels")!
    this.tabsRef = this.shadowRoot!.querySelector("#tabs")!
    this.loadEvent = new CustomEvent<MuiTabLoadedEvent>("component-loaded", {
      detail: { loaded: false },
    })
    this.tabsRef.onchange = () => {
      this.renderPanel()
    }
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }

  renderPanel() {
    const activeTab = this.tabsRef.activeTab?.ariaLabel!
    const slots = (
      this.panelsRef.firstElementChild as HTMLSlotElement
    ).assignedElements() as HTMLDivElement[]

    slots.map((item) => {
      if (item.ariaLabel === activeTab) {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  }

  connectedCallback() {
    setTimeout(() => {
      this.renderPanel()
      this.loadEvent.detail.loaded = true
      this.dispatchEvent(this.loadEvent)
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
    console.log(oldId, newId)
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
  "component-loaded": { detail: MuiTabLoadedEvent }
}

customElements.define(TAG_MuiTab, MuiTab, { extends: "div" })
