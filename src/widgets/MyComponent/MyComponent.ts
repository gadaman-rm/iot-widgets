import html from "./MyComponent.html?raw"
import style from "./MyComponent.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>${html}`

export interface CheckEvent {
  detail: {
    name: string
    age: number
  }
}

export class MyComponent extends HTMLDivElement {
  static get observedAttributes() {
    return ["age"]
  }
  #onT1Click?: (e: MouseEvent) => void
  #title1Slot: HTMLSlotElement
  ageRef: HTMLDivElement
  checkEvent: CustomEvent<CheckEvent["detail"]>
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", "my-component")
    this.ageRef = this.shadowRoot!.querySelector("#age")!
    this.#title1Slot =
      this.shadowRoot!.querySelector<HTMLSlotElement>(`[name="title1"]`)!
    this.initHandler()
    this.checkEvent = new CustomEvent<CheckEvent["detail"]>("z-check", {
      detail: { age: 0, name: "" },
    })
    // init age
    this.age = "29"
    this.ageRef.innerHTML = "29" //fix first render problem in text format
  }

  public get age(): string {
    return this.getAttribute("age")!
  }
  public set age(age: string) {
    this.setAttribute("age", age)
  }

  attributeChangedCallback(
    attrName: string,
    oldValue: string,
    newValue: string,
  ) {
    switch (attrName.toLowerCase()) {
      case "age":
        this.ageRef.innerHTML = newValue
        this.checkEvent.detail.age = +newValue
        this.dispatchEvent(this.checkEvent)
        break
    }
  }

  public get onT1Click(): string {
    return this.getAttribute("ont1click")!
  }
  public set onT1Click(fn: (e: MouseEvent) => void) {
    this.#onT1Click = fn
  }
  initHandler() {
    if (this.onT1Click && typeof window[this.onT1Click as any] === "function")
      this.#onT1Click = window[this.onT1Click as any] as any
  }
  handleT1Click = (e: MouseEvent) => {
    if (this.#onT1Click) this.#onT1Click(e)
  }
  connectedCallback() {
    this.#title1Slot.addEventListener("click", this.handleT1Click)
  }
  disconnectedCallback() {
    this.#title1Slot.removeEventListener("click", this.handleT1Click)
  }

  //********************************* Events *********************************
  addEventListener(
    type: "z-check",
    listener: (e: CheckEvent) => void,
    options?: boolean | AddEventListenerOptions | undefined,
  ): void
  // @ts-ignore: Unreachable code error
  addEventListener(type: unknown, listener: unknown, options?: unknown): void

  removeEventListener(
    type: "z-check",
    listener: (e: CheckEvent) => void,
    options?: boolean | EventListenerOptions | undefined,
  ): void
  // @ts-ignore: Unreachable code error
  removeEventListener(type: unknown, listener: unknown, options?: unknown): void
  //********************************* *********************************
}

customElements.define("my-component", MyComponent, { extends: "div" })
