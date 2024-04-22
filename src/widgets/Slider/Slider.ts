import { BASE_SVG_ATTRIBUTES, BaseSvg } from "../../_helper"
import html from "./Slider.html?raw"

const template = document.createElement("template")
template.innerHTML = `${html}`

const ATTRIBUTES = ["zero"] as const
export class Slider extends BaseSvg {
  static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
  constructor() {
    super({ template, width: 212.42, height: 158.119 })
    this.setAttribute("is", "g-slider")
    this.setAttribute("ratio", "0.102")
  }
  attributeUpdate(
    attributeName: (typeof ATTRIBUTES)[number],
    _oldValue: string,
    _newValue: string,
  ) {
    switch (attributeName) {
      case "zero":
        break
    }
  }
}

customElements.define("g-slider", Slider, { extends: "div" })
