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
import { Modal, ModalOpenEvent } from "../../components/components"

export interface FormBuilderMeta {
  type: "meta"
  title: string
  shape?: string
  modalWidth?: string
  modalHeight?: string
  footer?: FormBuilderItem[]
}

export interface FormBuilderButton {
  type: "button"
  id: string
  label?: string
  marginInline?: string
  marginBlock?: string
  tag?:
    | "md-outlined-button"
    | "md-filled-button"
    | "md-filled-tonal-button"
    | "md-elevated-button"
}

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
  options: { id: string; vlaue: string; checked?: boolean }[]
}

export interface FormBuilderRadiobox {
  id: string
  type: "radiobox"
  label?: string
  options: {
    group: string
    id: string
    vlaue: string
    checked?: boolean
  }[]
}

export interface FormBuilderTabs {
  id: string
  type: "tabs"
  label?: string
  panelHeight?: string
  options: {
    id: string
    vlaue: string
    key: string
    selected?: boolean
    panel?: FormBuilderItem[]
  }[]
}

export type FormBuilderItem =
  | FormBuilderMeta
  | FormBuilderTextFeild
  | FormBuilderSelect
  | FormBuilderCheckbox
  | FormBuilderRadiobox
  | FormBuilderTabs
  | FormBuilderButton

const template = document.createElement("template")
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface FormBuilderLoadedEvent {
  loaded: Boolean
}

export interface FormBuilderOpenEvent {
  open: boolean
}

export interface FormBuilderContentChangeEvent {
  modalContent: (
    | string
    | (Omit<FormBuilderMeta, "footer"> & {
        footer: string
      })
  )[]
}

const TAG_FormBuilder = `g-form-builder`
const ATTRIBUTES = ["items", "open"] as const
export class FormBuilder extends BaseSvg {
  static get observedAttributes() {
    return [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
  }
  loadEvent: CustomEvent<FormBuilderLoadedEvent>
  openChangeEvent: CustomEvent<FormBuilderOpenEvent>
  contentChangeEvent: CustomEvent<FormBuilderContentChangeEvent>
  bodyRef: SVGRectElement
  shapeRef: SVGForeignObjectElement
  #modalRef?: Modal

  constructor() {
    super({ template, width: 200, height: 200 })
    this.setAttribute("is", TAG_FormBuilder)
    this.bodyRef = this.shadowRoot!.querySelector("#body")!
    this.shapeRef = this.shadowRoot!.querySelector("#shape")!
    this.loadEvent = new CustomEvent<FormBuilderLoadedEvent>("widget-loaded", {
      detail: { loaded: false },
    })
    this.contentChangeEvent = new CustomEvent<FormBuilderContentChangeEvent>(
      "content-change",
      {
        detail: { modalContent: [] },
      },
    )
    this.openChangeEvent = new CustomEvent<FormBuilderOpenEvent>(
      "open-change",
      {
        detail: { open: false },
      },
    )
  }

  public set modalRef(modalRef: Modal) {
    this.#modalRef = modalRef
    if (this.#modalRef) {
      this.addEventListener("open-change", this.handleFormOpen)
      this.#modalRef.addEventListener("open-change", this.handleModalRefOpen)
    }

    if (this.items) this.renderModalRef()
  }

  handleFormOpen = (e: { detail: FormBuilderOpenEvent }) => {
    if (this.#modalRef) this.#modalRef.open = e.detail.open
  }

  handleModalRefOpen = (e: { detail: ModalOpenEvent }) => {
    if (this.#modalRef) this.#modalRef.open = e.detail.open
  }

  public get open() {
    return strToBool(this.getAttribute("open"))
  }
  public set open(open: boolean) {
    this.setAttribute("open", boolToStr(open))
  }

  public get items() {
    return eval(decode(this.getAttribute("items") ?? "[]"))
  }
  public set items(item: FormBuilderItem[]) {
    this.setAttribute("items", encode(JSON.stringify(item ?? [])))
  }

  formComponentMaker(menuJsonItems: FormBuilderItem[]): (
    | string
    | (Omit<FormBuilderMeta, "footer"> & {
        footer: string
      })
  )[] {
    return menuJsonItems.map((item) => {
      switch (item.type) {
        case "meta": {
          item.modalWidth ??= "85dvw"
          item.modalHeight ??= "85dvh"
          item.shape ??= ""
          const { footer, ...rest } = item
          this.shapeRef.innerHTML = rest.shape!
          return {
            ...rest,
            footer: this.formComponentMaker(footer ?? []).join(""),
          }
        }
        case "textfeild": {
          item.htmlType ??= "text"
          item.tag ??= "md-filled-text-field"
          item.value ??= ""
          item.label ??= "label"
          return `<${item.tag} id="${item.id}" class="formBuilderItem" value="${item.value}"
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
          return `<${item.tag} id="${item.id}" class="formBuilderItem" label="${item.label}" 
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
          return `<div class="formBuilderItem">
<p class="formBuilderCheckboxLabel" >${item.label}</p>
<div class="formBuilderCheckboxItems" >${item.options
            .map((option) => {
              return `<div class="formBuilderCheckboxItem" ><md-checkbox id="${option.id}" ${option.checked ? "checked" : ""}></md-checkbox>
            <label for="${option.id}">${option.vlaue}</label></div>`
            })
            .join("")}</div></div>`
        }
        case "radiobox": {
          item.label ??= "label"
          item.options ??= []
          return `<div class="formBuilderItem">
<p class="formBuilderRadioBoxLabel">${item.label}</p>
<div class="formBuilderRadioBoxItems">${item.options
            .map((option) => {
              return `<div class="formBuilderRadioBoxItem"><md-radio id="${option.id}" name="${option.group}" value="${option.vlaue}" ${option.checked ? "checked" : ""}></md-radio>
            <label for="${option.id}">${option.vlaue}</label></div>`
            })
            .join("")}</div></div>`
        }
        case "tabs": {
          item.panelHeight ??= "300px"
          return `
<div is="g-muitab">
${item.options
  .map((option) => {
    option.panel ??= []
    return `<md-secondary-tab id="${option.id}" ${option.selected ? "selected" : ""} aria-label="${option.key}" slot="tab">${option.vlaue}</md-secondary-tab>
<div class="formBuilderTabPanel" style="height: ${item.panelHeight}" aria-label="${option.key}" slot="panel">${this.formComponentMaker(option.panel).join("")}</div>`
  })
  .join("")}
      </div>`
        }

        case "button": {
          item.label ??= "label"
          item.tag ??= "md-filled-tonal-button"
          return `<${item.tag} style="margin-block: ${item.marginBlock}; margin-inline: ${item.marginInline};">${item.label}</${item.tag}>`
        }
      }
    })
  }

  mount() {
    setTimeout(() => {
      this.initAttribute(
        "items",
        "W3sidHlwZSI6Im1ldGEiLCJ0aXRsZSI6IlRlc3QiLCJzaGFwZSI6Ijxzdmcgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTZweFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImJsdWVcIlxuICAgICAgICBkPVwiTTAgMXYxNGgxNnYtMTRoLTE2ek0xNSAxNGgtMTR2LTEwaDE0djEwek0xNSAzaC0xdi0xaDF2MXpcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz4iLCJmb290ZXIiOlt7InR5cGUiOiJidXR0b24iLCJpZCI6IjkzM2Y1OGYwLTZkZTUtNGVjMS05MDNiLTg4MDAxZjcyNzgwNiIsImxhYmVsIjoiT2sifSx7InR5cGUiOiJidXR0b24iLCJpZCI6ImI3ZjlmMzdiLThlNDUtNDY4ZC1hYzljLWZlODQwZTgwNTJkOSIsImxhYmVsIjoiQ2FuY2VsIiwibWFyZ2luSW5saW5lIjoiMTBweCJ9XX0seyJ0eXBlIjoidGFicyIsImlkIjoiODE0NjVlYWEtNGUzYS00YWZhLWE5ODEtNmQ1NzVlODhjZDkzIiwicGFuZWxIZWlnaHQiOiI0MDBweCIsIm9wdGlvbnMiOlt7ImlkIjoiZWZkZDgwOTQtMTExNC00ZmFiLWI2OWItNzYxMWYyNjFhODQwIiwidmxhdWUiOiJQZXJzb25hbCBJbmZvIiwia2V5IjoicGVyc29uYWwtaW5mbyIsInBhbmVsIjpbeyJ0eXBlIjoidGV4dGZlaWxkIiwibGFiZWwiOiJOYW1lIiwiaWQiOiI0OWE3YWQzNC1jYWE3LTQzZDgtYjU2NC0wZTNkMTA5NWJjMGEiLCJ2YWx1ZSI6Inplcm8ifSx7InR5cGUiOiJ0ZXh0ZmVpbGQiLCJsYWJlbCI6ImFnZSIsImh0bWxUeXBlIjoibnVtYmVyIiwic3RlcCI6MiwiaWQiOiI3MTA0MDhjNS0wNmRhLTQ4ZWEtYjZkZC01ODA3YzlhYmM3MDUiLCJ2YWx1ZSI6IjMwIn0seyJ0eXBlIjoicmFkaW9ib3giLCJpZCI6ImY3YWZhYTFlLTk4MmItNGVkMS1hZTcxLTU0YTI0YWE1NjM0MiIsImxhYmVsIjoiR2VuZGVyIiwib3B0aW9ucyI6W3siaWQiOiI0OWY5ZWUxNS0wMTZiLTQwODAtYWViNy02YzZiYmI2ZGRiMTIiLCJncm91cCI6ImdlbmRlciIsInZsYXVlIjoibWFsZSJ9LHsiaWQiOiI5YWY2MzE4Ny02YmU3LTQ5YWEtOThjMy1kYmQzZTRkODI0YjIiLCJncm91cCI6ImdlbmRlciIsInZsYXVlIjoiZmVtYWxlIn1dfV19LHsiaWQiOiIxYThlNDEwMS1jMWYwLTQyZTEtODkyYS04MzRmMWUwN2FkNzAiLCJ2bGF1ZSI6IkZhdm91cml0ZWlzIiwic2VsZWN0ZWQiOnRydWUsImtleSI6ImZhdm91cml0ZWlzIiwicGFuZWwiOlt7InR5cGUiOiJzZWxlY3QiLCJpZCI6IjQ0ZjkwZjdmLTgwYjktNDFjMi1iOTk4LWM5NzhmNmYzZGJkMCIsImxhYmVsIjoiWW91ciBmYXZvdXJpdGUgZnJ1aXQ/IiwicmVxdWlyZWQiOnRydWUsIm9wdGlvbnMiOlt7ImRpc3BsYXkiOiJhcHBsZSIsInZsYXVlIjoiYXBwbGUiLCJzZWxlY3RlZCI6dHJ1ZX0seyJkaXNwbGF5IjoicGluZWFwcGxlIiwidmxhdWUiOiJwaW5lYXBwbGUifV19LHsidHlwZSI6ImNoZWNrYm94IiwibGFiZWwiOiJIb2JiZWlzIiwiaWQiOiI3MWE4NzNkMS1mZmI5LTQzMGYtYjYyYS0yNmI3N2EwNzk1ZWUiLCJvcHRpb25zIjpbeyJpZCI6IjJlZjdhYjkyLWRmZmItNGEyOS1hMjdhLTU1YWZiNTRhYzE0NSIsInZsYXVlIjoiU2xlZXBpbmciLCJjaGVja2VkIjp0cnVlfSx7ImlkIjoiNjY4Y2ZmOWItNDU4Ni00ZDI4LTg1ZjctMDRlYTIzNWI2NjY1IiwidmxhdWUiOiJWaWRlbyBHYW1lIn0seyJpZCI6IjljZTA5YWJjLTcyZTAtNGJhOS05MTQ4LTM0ZjE1MDk2MTA2MCIsInZsYXVlIjoiRm9vc2JhbGwifSx7ImlkIjoiNzNlMzg1ZWQtMDgxYS00YWQ2LThhNmItMWNkOWFiMWM0OGE5IiwidmxhdWUiOiJBbmltZSJ9XX1dfSx7ImlkIjoiZWVkNTdhOTctNmRlMi00NGNmLTgxZjYtMDkzYTM0NmNlOWM0IiwidmxhdWUiOiJUZXN0IFNjcm9sbCIsImtleSI6InRlc3Qtc2Nyb2xsIiwicGFuZWwiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiVGVzdCIsImlkIjoiNmI1ODcyMmUtNTYwNy00NjI5LWE3MTEtNzYzMTk2NzU4MzY3Iiwib3B0aW9ucyI6W3siaWQiOiI3ZDQ2Yjk4Ni05NjFlLTQ3NWEtYjg5Mi03NDUwMTM3NGY0OTkiLCJ2bGF1ZSI6ImNoZWNrZWQiLCJjaGVja2VkIjp0cnVlfSx7ImlkIjoiNTAyYzFmMWEtOTliYi00NDhlLThlYmEtZTg2NzllMjZlMTU5IiwidmxhdWUiOiJub3QgY2hlY2tlZCIsImNoZWNrZWQiOmZhbHNlfSx7ImlkIjoiYmQ2NmNkZWItMGQ0YS00ZGViLTk3YjctZTc0MDc0NjU2NjE4IiwidmxhdWUiOiJjaGVja2VkIiwiY2hlY2tlZCI6dHJ1ZX0seyJpZCI6IjgwZDBjNDFmLTg4MmQtNGUyZS1hZDIwLTBlZWY0NzRkZTRiZCIsInZsYXVlIjoibm90IGNoZWNrZWQiLCJjaGVja2VkIjpmYWxzZX0seyJpZCI6IjBkMGEwMTYyLTA5MDAtNDU0My04OGI1LTkxYWUyOTA5YzdkYyIsInZsYXVlIjoiY2hlY2tlZCIsImNoZWNrZWQiOnRydWV9LHsiaWQiOiIyZDQxMzg1ZC1jNGZlLTQ5YWQtYWM0NS02YjdjMGY1ZTQzNmEiLCJ2bGF1ZSI6Im5vdCBjaGVja2VkIiwiY2hlY2tlZCI6ZmFsc2V9LHsiaWQiOiJhZjQxZDc1Zi1hYjE2LTQ0ZGItODQxOC1mZDY1MWQ3ZGQ4MGUiLCJ2bGF1ZSI6ImNoZWNrZWQiLCJjaGVja2VkIjp0cnVlfSx7ImlkIjoiY2Y0YjE3NmItNDg2OS00OTljLTgzZDMtOTJmNDZkZmY4OTdjIiwidmxhdWUiOiJub3QgY2hlY2tlZCIsImNoZWNrZWQiOmZhbHNlfSx7ImlkIjoiYTdmZTM5N2ItZTAxNy00NmNkLWExNGEtMjU2NWQ5ZjI4ZjM5IiwidmxhdWUiOiJjaGVja2VkIiwiY2hlY2tlZCI6dHJ1ZX0seyJpZCI6ImRlMWE0OTBmLWNkMjgtNDJiNy05OTM2LTA0Yzc4NzFiNDgyNCIsInZsYXVlIjoibm90IGNoZWNrZWQiLCJjaGVja2VkIjpmYWxzZX0seyJpZCI6IjMwY2FlZTQ3LWIzNzctNDY3Yy05MTUyLWZkNGQzMmNkYzFlZCIsInZsYXVlIjoiY2hlY2tlZCIsImNoZWNrZWQiOnRydWV9LHsiaWQiOiIwYmNmZWVhYy05Y2FmLTRiODktYmQ4Yy04ZjYxZmZhZGI2NmEiLCJ2bGF1ZSI6Im5vdCBjaGVja2VkIiwiY2hlY2tlZCI6ZmFsc2V9LHsiaWQiOiJhNTE4OWQ3NS00ZGNlLTRmOTktYjM5NC05YzZmNTA3NTYwODYiLCJ2bGF1ZSI6ImNoZWNrZWQiLCJjaGVja2VkIjp0cnVlfSx7ImlkIjoiYTZlYTM5OWQtMzU0Ni00M2NiLWI5OWQtYTJlNzhiZjZjYjQzIiwidmxhdWUiOiJub3QgY2hlY2tlZCIsImNoZWNrZWQiOmZhbHNlfSx7ImlkIjoiZTk2MmFiZDktNDQ0Mi00NzRmLWIwZjgtYTkyMGFlMTVjNWM4IiwidmxhdWUiOiJjaGVja2VkIiwiY2hlY2tlZCI6dHJ1ZX0seyJpZCI6ImRjMjg3YmQ4LTAwMDgtNDJiOC05NzlkLTk1M2Y2ZTU1YTZmMyIsInZsYXVlIjoibm90IGNoZWNrZWQiLCJjaGVja2VkIjpmYWxzZX0seyJpZCI6ImYzZTI3NzI2LWZjYTAtNGM5Ni1iNzU3LTAzMDdkMzA4ZDY2MyIsInZsYXVlIjoiY2hlY2tlZCIsImNoZWNrZWQiOnRydWV9LHsiaWQiOiJlYTUyMGZlNS0wMmZmLTQwMTgtODJhYS1jODY1ZjRmYTRmODUiLCJ2bGF1ZSI6Im5vdCBjaGVja2VkIiwiY2hlY2tlZCI6ZmFsc2V9LHsiaWQiOiIyZWQzNmI4OC1mMGU3LTQ5MGMtYTdiMC1mMTNmOTBmMzAwYzciLCJ2bGF1ZSI6ImNoZWNrZWQiLCJjaGVja2VkIjp0cnVlfSx7ImlkIjoiNjZhYWIzM2QtNjUyNS00ZGY1LTk5M2UtZjg5YzdlMjEzMzk1IiwidmxhdWUiOiJub3QgY2hlY2tlZCIsImNoZWNrZWQiOmZhbHNlfSx7ImlkIjoiNjk4OWFhNjMtZTlhYS00NmM0LTkzNGMtYzczOWFmZTdjMDZiIiwidmxhdWUiOiJjaGVja2VkIiwiY2hlY2tlZCI6dHJ1ZX0seyJpZCI6IjU2MDJlY2Y3LTYyZTQtNDMwMS04NzhhLTdmY2RmZTI2NmQ5MiIsInZsYXVlIjoibm90IGNoZWNrZWQiLCJjaGVja2VkIjpmYWxzZX0seyJpZCI6ImVkMTg0ODQ4LTkwZTYtNGQ4NS05ODJlLTk4ZjVlYWNkYmVkZCIsInZsYXVlIjoiY2hlY2tlZCIsImNoZWNrZWQiOnRydWV9LHsiaWQiOiI1MGNiYWUxNS1iMGJlLTRjOWYtOWZlZS02OGFjYTY4ODVlOTciLCJ2bGF1ZSI6Im5vdCBjaGVja2VkIiwiY2hlY2tlZCI6ZmFsc2V9LHsiaWQiOiJhNDkxNTdmYS0yZTRhLTQ5NmItOTQzYy05Y2FmMDNiMDQ5OGQiLCJ2bGF1ZSI6ImNoZWNrZWQiLCJjaGVja2VkIjp0cnVlfSx7ImlkIjoiNzRjMzQ2MzktZTY2MC00Y2I2LTk3ZDEtZGZmZGM0MDg2MTZlIiwidmxhdWUiOiJub3QgY2hlY2tlZCIsImNoZWNrZWQiOmZhbHNlfSx7ImlkIjoiYTBlMzg3ZGEtOTE3MC00MjhkLTg5MTYtYzI5NWViZTllYmM3IiwidmxhdWUiOiJjaGVja2VkIiwiY2hlY2tlZCI6dHJ1ZX0seyJpZCI6ImIxOTAzMDViLTE4YzEtNGJhNy04Y2Y4LTYxNmZhNGUxYTc4MCIsInZsYXVlIjoibm90IGNoZWNrZWQiLCJjaGVja2VkIjpmYWxzZX0seyJpZCI6ImYyMjY1MGNmLWU0YWEtNDBjNC1iYjU3LTg3NDUzY2I4NDFiOCIsInZsYXVlIjoiY2hlY2tlZCIsImNoZWNrZWQiOnRydWV9LHsiaWQiOiJkNTk5OTNlOC00YzY3LTRhNTEtOGYwNC0yMDJjYzhkODViYTIiLCJ2bGF1ZSI6Im5vdCBjaGVja2VkIiwiY2hlY2tlZCI6ZmFsc2V9LHsiaWQiOiI4MDM4Yzg5MS0zYWUxLTRkMjctOTk2Zi1kZDZmY2Y2ZGM5YmMiLCJ2bGF1ZSI6ImNoZWNrZWQiLCJjaGVja2VkIjp0cnVlfSx7ImlkIjoiYzU4ZjgxY2MtNzdmYi00M2Y5LTljNjItNmRmNTM5MWQ1OTBlIiwidmxhdWUiOiJub3QgY2hlY2tlZCIsImNoZWNrZWQiOmZhbHNlfV19XX1dfV0=",
      )
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
      case "items": {
        this.itemsUpdate(oldValue, newValue)
        break
      }
      case "open":
        this.openUpdate(strToBool(oldValue), strToBool(newValue))
        break
    }
  }

  itemsUpdate(oldValue: string, newValue: string) {
    setTimeout(() => {
      this.renderModalRef()
      this.contentChangeEvent.detail.modalContent = this.formComponentMaker(
        this.items,
      )
      this.dispatchEvent(this.contentChangeEvent)
    }, 0)
  }

  renderModalRef() {
    if (this.#modalRef) {
      const mainModalHeader = htmlRoot`<span id="mainModalHeader" slot="header"></span>`
      const mainModalForms = htmlRoot`<div id="mainModalHeadeForms" slot="body"></div>`
      const mainModalFooter = htmlRoot`<div id="mainModalHeaderFooter" slot="footer"></div>`

      this.#modalRef.replaceChildren()
      this.#modalRef.appendChild(mainModalHeader)
      this.#modalRef.appendChild(mainModalForms)
      this.#modalRef.appendChild(mainModalFooter)

      this.formComponentMaker(this.items).forEach((item) => {
        if (this.#modalRef) {
          if (typeof item === "object") {
            this.#modalRef.style.setProperty(
              "--modal-dialog-width",
              item.modalWidth!,
            )
            this.#modalRef.style.setProperty(
              "--modal-dialog-height",
              item.modalHeight!,
            )

            mainModalHeader.innerHTML = item.title
            mainModalFooter.innerHTML = item.footer
          } else {
            mainModalForms.appendChild(htmlRoot`${item}`)
          }
        }
      })
    }
  }

  openUpdate(oldOpen: boolean, newOpen: boolean) {
    if (oldOpen !== newOpen)
      setTimeout(() => {
        this.openChangeEvent.detail.open = newOpen
        this.dispatchEvent(this.openChangeEvent)
      }, 0)
  }

  widthChange(oldWidth: number, newWidth: number): void {
    this.shapeRef.setAttribute("width", newWidth.toString())
  }

  heightChange(oldHeight: number, newHeight: number): void {
    this.shapeRef.setAttribute("height", newHeight.toString())
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
  "content-change": { detail: FormBuilderContentChangeEvent }
  "open-change": { detail: FormBuilderOpenEvent }
}

customElements.define(TAG_FormBuilder, FormBuilder, { extends: "div" })
