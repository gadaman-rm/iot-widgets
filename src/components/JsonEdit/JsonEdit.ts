import { decode, encode } from "js-base64"
import { boolToStr, strToBool } from "../../_helper"
import htmlText from "./JsonEdit.html?raw"
import cssText from "./JsonEdit.scss?inline"

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface JsonEditLoadedEvent {
  loaded: Boolean
}

export interface JsonEditJsonChangeEvent {
  json: string
}

const TAG_JsonEdit = `g-json-edit`
const ATTRIBUTES = ["id", "readonly", "code", "rows", "cols"] as const
export class JsonEdit extends HTMLDivElement {
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }
  static get observedAttributes() {
    return ATTRIBUTES
  }
  rootRef: HTMLDivElement
  textRef: HTMLTextAreaElement
  loadEvent: CustomEvent<JsonEditLoadedEvent>
  jsonStrChangeEvent: CustomEvent<JsonEditJsonChangeEvent>
  #onChange?: (e: { detail: JsonEditJsonChangeEvent }) => void
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_JsonEdit)
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.textRef = this.shadowRoot!.querySelector("#text")!
    this.loadEvent = new CustomEvent<JsonEditLoadedEvent>("component-loaded", {
      detail: { loaded: false },
    })
    this.jsonStrChangeEvent = new CustomEvent<JsonEditJsonChangeEvent>(
      "json-change",
      {
        detail: { json: this.code },
      },
    )

    this.init()
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }

  public get readonly() {
    return strToBool(this.getAttribute("readonly"))
  }
  public set readonly(readonly: boolean) {
    this.setAttribute("readonly", boolToStr(readonly))
  }
  public get rows() {
    return this.textRef.rows
  }
  public set rows(rows: number) {
    this.textRef.rows = rows
  }

  public get cols() {
    return this.textRef.cols
  }
  public set cols(cols: number) {
    this.textRef.cols = cols
  }

  public get code() {
    return decode(this.getAttribute("code") ?? "")
  }
  public set code(code: string) {
    this.setAttribute("code", encode(code))
    this.jsonStrChangeEvent.detail.json = code
    this.dispatchEvent(this.jsonStrChangeEvent)
    if (this.#onChange) this.#onChange({ detail: { json: code } })
  }

  public set onChange(fn: (e: { detail: JsonEditJsonChangeEvent }) => void) {
    this.#onChange = fn
  }

  init() {
    setTimeout(() => {
      this.initAttribute("cols", "25")
      this.initAttribute("rows", "7")

      this.textRef.addEventListener("input", (e) => {
        this.code = (e.target as any).value
      })
    }, 0)
  }

  connectedCallback() {
    setTimeout(() => {
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
      case "cols":
        this.colsUpdate(+oldValue, +newValue)
        break
      case "rows":
        this.rowsUpdate(+oldValue, +newValue)
        break
      case "code": {
        this.codeUpdate(oldValue, newValue)
        break
      }
      case "readonly":
        this.readonlyUpdate(strToBool(oldValue), strToBool(newValue))
        break
    }
  }

  idUpdate(oldId: string, newId: string) {}

  readonlyUpdate(oldId: boolean, newId: boolean) {
    if (newId) this.textRef.setAttribute("readonly", "true")
    else this.textRef.removeAttribute("readonly")
  }

  codeUpdate(oldCode: string, newCode: string) {
    this.textRef.textContent = this.code
  }

  colsUpdate(oldRow: number, newRow: number) {
    this.textRef.cols = newRow
  }

  rowsUpdate(oldRow: number, newRow: number) {
    this.textRef.rows = newRow
  }

  codeInJson<T = {}>(): T | null {
    try {
      return JSON.parse(this.code)
    } catch (e) {
      return null
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
  "component-loaded": { detail: JsonEditLoadedEvent }
  "json-change": { detail: JsonEditJsonChangeEvent }
}

customElements.define(TAG_JsonEdit, JsonEdit, { extends: "div" })
