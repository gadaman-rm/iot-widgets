export const BASE_CHILDREN_ATTRIBUTES = ["id"] as const
export type Childern = Node
export class BaseChildren extends HTMLDivElement {
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }
  observer?: MutationObserver
  static observedChildrenAttributes: string[] = []
  constructor(template: HTMLTemplateElement, TAG_NAME: string) {
    super()
    this.attachShadow({ mode: "open", slotAssignment: "manual" })
    this.shadowRoot!.appendChild(template.content.cloneNode(true))
    this.setAttribute("is", TAG_NAME)

    this.observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          this.#emitOnChildernChange()
        } else if (
          mutation.type === "attributes" &&
          mutation.target instanceof HTMLElement &&
          mutation.attributeName &&
          mutation.oldValue
        ) {
          const newValue = (mutation.target as HTMLElement).getAttribute(
            mutation.attributeName,
          )!
          if (mutation.oldValue !== newValue)
            this.#emitOnChildernAttrChange(
              mutation.target,
              mutation.attributeName,
              mutation.oldValue,
              newValue,
            )
        }
      }
    })

    this.observer?.observe(this, {
      childList: true,
      subtree: true,
      attributeOldValue: true,
      attributeFilter: (this.constructor as any).observedChildrenAttributes,
    })
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }

  childByName<T = HTMLElement>(name: string) {
    return this.children.namedItem(name) as T | null
  }

  #emitOnChildernChange() {
    this.onChildernChange(this.children)
  }
  #emitOnChildernAttrChange(
    target: HTMLElement,
    attributeName: string,
    oldValue: string,
    newValue: string,
  ) {
    this.onChildernAttrChange(target, attributeName, oldValue, newValue)
  }

  attributeChangedCallback(
    attrName: (typeof BASE_CHILDREN_ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attrName) {
      case "id":
        this.idUpdate(oldValue, newValue)
        break
      default:
        this.attributeUpdate(attrName, oldValue, newValue)
    }
  }

  connectedCallback() {
    this.#emitOnChildernChange()
    this.mount()
  }
  disconnectedCallback() {
    this.observer?.disconnect()
    this.unmount()
  }

  attributeUpdate(attributeName: any, oldValue: string, newValue: string) {}
  mount() {}
  unmount() {}

  onChildernChange(elements: HTMLCollection) {}
  onChildernAttrChange(
    target: HTMLElement,
    attributeName: string,
    oldValue: string,
    newValue: string,
  ) {}
  idUpdate(oldId: string, newId: string) {}
}
