import '../Tab/Tab'
import '../Tabs/Tabs'
import html from './SidebarItem.html?raw'
import style from './SidebarItem.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sidebar-item`
const ATTRIBUTES = ['id', 'open', 'anchor', 'min', 'max', 'size', 'offset'] as const
export class SidebarItem extends HTMLDivElement {
    rootRef: HTMLDivElement
    menuRef: HTMLSlotElement
    panelRef: HTMLSlotElement
    static get observedAttributes() {
        return ATTRIBUTES
    }
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', TAG_NAME)
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.menuRef = this.shadowRoot!.querySelector('#menu')!
        this.panelRef = this.shadowRoot!.querySelector('#panel')!
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }

    public get menu() { 
        const elem = this.menuRef.assignedElements()
        return elem.length > 0 ? elem[0] : null 
    }

    // public get panel() { 
    //     const elem = this.panelRef.assignedElements()
    //     return elem.length > 0 ? elem[0] : null 
    // }

    attributeChangedCallback(attrName: typeof ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attrName) {
            case 'id': this.idUpdate(oldValue, newValue)
                break
        }
    }

    idUpdate(oldId: string, newId: string) { }

}

customElements.define(TAG_NAME, SidebarItem, { extends: 'div' })
