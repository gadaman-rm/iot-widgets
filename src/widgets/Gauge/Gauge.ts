import { BASE_SVG_ATTRIBUTES, BaseSvg } from "../../_helper"
import htmlText from "./Gauge.html?raw"

const template = document.createElement("template")
template.innerHTML = `${htmlText}`

export interface GaugeFrameLoadedEvent {
  loaded: Boolean
}

const TAG_NAME = `g-gauge`
const ATTRIBUTES = ["value"] as const
export class Gauge extends BaseSvg {
  static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
  rootRef: SVGElement
  loadEvent: CustomEvent<GaugeFrameLoadedEvent>
  constructor() {
    super({ template, width: 212.42, height: 158.119 })
    this.setAttribute("is", TAG_NAME)
    this.setAttribute("ratio", "0.744")
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.loadEvent = new CustomEvent<GaugeFrameLoadedEvent>("widget-loaded", {
      detail: { loaded: false },
    })
  }

  mount() {
    this.loadEvent.detail.loaded = true
    this.dispatchEvent(this.loadEvent)
  }
  unmount() {}
  attributeUpdate(
    attributeName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attributeName) {
      case "value":
        this.valueUpdate(oldValue, newValue)
        break
    }
  }

  valueUpdate(oldValue: string, newValue: string) {}

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
  "widget-loaded": { detail: GaugeFrameLoadedEvent }
}

customElements.define(TAG_NAME, Gauge, { extends: "div" })
