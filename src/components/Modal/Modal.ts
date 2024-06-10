import { boolToStr, strToBool } from "../../_helper"
import htmlText from "./Modal.html?raw"
import cssText from "./Modal.scss?inline"
import { MdIconButton } from "@material/web/iconbutton/icon-button"

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface ModalLoadedEvent {
  loaded: Boolean
}

export interface ModalOpenEvent {
  open: boolean
}

const TAG_NAME = `g-modal`
const ATTRIBUTES = ["id", "open"] as const
export class Modal extends HTMLDivElement {
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }
  static get observedAttributes() {
    return ATTRIBUTES
  }
  rootRef: HTMLDivElement
  dialogRef: HTMLDialogElement
  backdropRef: HTMLDivElement
  closeRef: MdIconButton
  loadEvent: CustomEvent<ModalLoadedEvent>
  openChangeEvent: CustomEvent<ModalOpenEvent>
  #onOpen?: (e: { detail: ModalOpenEvent }) => void
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_NAME)
    this.rootRef = this.shadowRoot!.querySelector("#root")!
    this.dialogRef = this.shadowRoot!.querySelector("#dialog")!
    this.backdropRef = this.shadowRoot!.querySelector("#backdrop")!
    this.closeRef = this.shadowRoot!.querySelector("#close")!
    this.loadEvent = new CustomEvent<ModalLoadedEvent>("component-loaded", {
      detail: { loaded: false },
    })

    this.openChangeEvent = new CustomEvent<ModalOpenEvent>("open-change", {
      detail: { open: false },
    })

    this.initAttribute("open", "false")
    this.closeRef.addEventListener("click", () => {
      this.open = false
    })

    this.backdropRef.addEventListener("click", () => {
      this.open = false
    })
  }

  public set onOpen(fn: (e: { detail: ModalOpenEvent }) => void) {
    this.#onOpen = fn
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }

  public get open() {
    return strToBool(this.getAttribute("open"))
  }

  public set open(open: boolean) {
    this.setAttribute("open", boolToStr(open))
  }

  connectedCallback() {
    this.loadEvent.detail.loaded = true
    this.dispatchEvent(this.loadEvent)
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
      case "open":
        this.openUpdate(strToBool(oldValue), strToBool(newValue))
    }
  }
  idUpdate(oldId: string, newId: string) {}
  openUpdate(oldOpen: boolean, newOpen: boolean) {
    if (newOpen) {
      this.dialogRef.setAttribute("open", "true")
      this.backdropRef.style.display = "block"
    } else {
      this.dialogRef.removeAttribute("open")
      this.backdropRef.style.display = "none"
    }
    if (oldOpen !== newOpen)
      setTimeout(() => {
        this.openChangeEvent.detail.open = newOpen
        this.dispatchEvent(this.openChangeEvent)
        if (this.#onOpen) this.#onOpen({ detail: { open: newOpen } })
      }, 0)
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
  "component-loaded": { detail: ModalLoadedEvent }
  "open-change": { detail: ModalOpenEvent }
}

customElements.define(TAG_NAME, Modal, { extends: "div" })
