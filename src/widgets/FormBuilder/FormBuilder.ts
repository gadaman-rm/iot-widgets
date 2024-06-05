import { decode, encode } from "js-base64"
import {
  BASE_SVG_ATTRIBUTES,
  BaseSvg,
  boolToStr,
  htmlRoot,
  strToBool,
} from "../../_helper"
import htmlText from "./FormBuilder.html?raw"
import cssText from "./FormBuilder.scss?inline"

export interface FormBuilderTextFeild {
  id: string
  type: "textfeild"
  label?: string
  tag?: "md-filled-text-field" | "md-outlined-text-field"
  htmlType?:
    | "text"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "textarea"
    | "range"
    | "date"
    | "datetime-local"
    | "time"
    | "week"
  value?: string
  prefixText?: string
  suffixText?: string
  step?: number
  required?: boolean
  supportingText?: string
  error?: boolean
  errorText?: string
  pattern?: string
}

export interface FormBuilderSelect {
  id: string
  type: "select"
  label?: string
  tag?: "md-filled-select" | "md-outlined-select"
  required?: boolean
  options: { vlaue: string; display: string; selected?: boolean }[]
}

export interface FormBuilderCheckbox {
  id: string
  type: "checkbox"
  label?: string
  options: { vlaue: string; br?: boolean }[]
}

export interface FormBuilderRadiobox {
  id: string
  type: "radiobox"
  label?: string
}

export type FormBuilderItem =
  | FormBuilderTextFeild
  | FormBuilderSelect
  | FormBuilderCheckbox
  | FormBuilderRadiobox

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface FormBuilderLoadedEvent {
  loaded: Boolean
}

const TAG_FormBuilder = `g-form-builder`
const ATTRIBUTES = ["hide", "items"] as const
export class FormBuilder extends BaseSvg {
  static get observedAttributes() {
    return [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
  }
  loadEvent: CustomEvent<FormBuilderLoadedEvent>
  bodyRef: SVGRectElement
  formsRef: HTMLDivElement

  constructor() {
    super({ template, width: 200, height: 200 })
    this.setAttribute("is", TAG_FormBuilder)
    this.bodyRef = this.shadowRoot!.querySelector("#body")!
    this.loadEvent = new CustomEvent<FormBuilderLoadedEvent>("widget-loaded", {
      detail: { loaded: false },
    })
    this.formsRef = this.shadowRoot!.querySelector("#forms")!
  }

  public get hide() {
    return strToBool(this.getAttribute("hide"))
  }
  public set hide(hide: boolean) {
    this.setAttribute("hide", boolToStr(hide))
  }

  public get items() {
    return eval(decode(this.getAttribute("items") ?? "[]"))
  }
  public set items(item: FormBuilderItem[]) {
    this.setAttribute("items", encode(JSON.stringify(item ?? [])))
  }

  formMaker(menuJsonItems: FormBuilderItem[]) {
    return menuJsonItems.map((item) => {
      switch (item.type) {
        case "textfeild": {
          item.htmlType ??= "text"
          item.tag ??= "md-filled-text-field"
          item.value ??= ""
          item.label ??= "label"
          return `<${item.tag} id="${item.id}" class="item" value="${item.value}"
                    ${item.prefixText ? `prefix-text="${item.prefixText}"` : ""}  
                    ${item.prefixText ? `suffix-text="${item.suffixText}"` : ""}  
                    ${item.step ? `step="${item.step}"` : ""}  
                    ${item.pattern ? `pattern="${item.pattern}"` : ""}  
                    ${item.required ? "required" : ""}  
                    ${item.error ? "error" : ""}  
                    ${item.supportingText ? `supporting-text="${item.supportingText}"` : ""}  
                    ${item.errorText ? `error-text="${item.errorText}": ""` : ""}  
                    label="${item.label}"
                    type="${item.htmlType}">
                  </${item.tag}>`
        }
        case "select": {
          item.tag ??= "md-filled-select"
          item.label ??= "label"
          item.options ??= []
          return `<${item.tag} id="${item.id}" class="item" label="${item.label}" 
                    ${item.required ? "required" : ""}>
                  ${item.options
                    .map((option) => {
                      return `<md-select-option value="${option.vlaue}" ${option.selected ? "selected" : ""}><div slot="headline">${option.display}</div></md-select-option>`
                    })
                    .join("")}
                  </${item.tag}>`
        }
        case "checkbox": {
          item.label ??= "label"
          item.options ??= []
          return `<div class="item">
${item.options
  .map((option) => {
    option.br ??= true
    return `<label class="checkbox-item"><md-checkbox></md-checkbox>${option.vlaue}</label>${option.br ? "<br/>" : ""}`
  })
  .join("")}
</div>`
        }
      }
    })
  }

  mount() {
    setTimeout(() => {
      this.loadEvent.detail.loaded = true
      this.dispatchEvent(this.loadEvent)
    }, 0)
  }
  unmount() {}
  attributeUpdate(
    attributeName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attributeName) {
      case "hide":
        this.hideUpdate(strToBool(oldValue), strToBool(newValue))
        break
      case "items": {
        this.itemsUpdate(oldValue, newValue)
      }
    }
  }

  hideUpdate(_oldHide: boolean, newHide: boolean) {
    if (!newHide) this.bodyRef.style.display = "block"
    else this.bodyRef.style.display = "none"
  }

  itemsUpdate(oldValue: string, newValue: string) {
    this.formsRef.replaceChildren()

    this.formMaker(this.items).forEach((item) => {
      if (item) this.formsRef.append(htmlRoot`${item}`)
    })
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
  "widget-loaded": { detail: FormBuilderLoadedEvent }
}

customElements.define(TAG_FormBuilder, FormBuilder, { extends: "div" })
