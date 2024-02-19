import '../Tab/Tab'
import '../Tabs/Tabs'
import { SidebarItem } from '../components'
import html from './Sidebar.html?raw'
import style from './Sidebar.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sidebar`
const ATTRIBUTES = ['id', 'open', 'anchor', 'min', 'max', 'size', 'offset'] as const
export class Sidebar extends HTMLDivElement {
    rootRef: HTMLDivElement
    childrenRef: HTMLSlotElement
    static get observedAttributes() {
        return ATTRIBUTES
    }
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', TAG_NAME)
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.childrenRef = this.shadowRoot!.querySelector('#children')!
        this.handler()
    }

    handler() {
        this.shadowRoot!.addEventListener("slotchange", (e) => {
            (this.childrenRef.assignedElements() as SidebarItem[]).map((item) => {
                if(item.getAttribute("is") !== "g-sidebar-item") throw new Error('slot type should be SidebarItem')
                console.log(item);
                
                
            })
        })
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }

    attributeChangedCallback(attrName: typeof ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attrName) {
            case 'id': this.idUpdate(oldValue, newValue)
                break
        }
    }

    idUpdate(oldId: string, newId: string) { }

}

customElements.define(TAG_NAME, Sidebar, { extends: 'div' })
