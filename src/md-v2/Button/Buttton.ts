import html from "./Button.html?raw"
import style from "./Button.scss?inline"
import { MDCRipple } from "@material/ripple/index"

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-button`
const ATTRIBUTES = [
  "id",
  "open",
  "anchor",
  "min",
  "max",
  "size",
  "offset",
] as const
export class Button extends HTMLDivElement {
  rootRef: HTMLDivElement
  ripple: MDCRipple
  static get observedAttributes() {
    return ATTRIBUTES
  }
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_NAME)
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.ripple = new MDCRipple(this.rootRef)
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
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
    }
  }

  idUpdate(oldId: string, newId: string) {}
}

customElements.define(TAG_NAME, Button, { extends: "div" })
