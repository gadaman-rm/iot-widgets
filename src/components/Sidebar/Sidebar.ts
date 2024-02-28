import { BASE_CHILDREN_ATTRIBUTES, BaseChildren } from '../../_helper/BaseChildren'
import html from './Sidebar.html?raw'
import style from './Sidebar.scss?inline'
import { Drawer, Tab } from '../components'
import { DOM_READY_TIME } from '../../config'
import { createSlot } from '../../_helper'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sidebar`
const ATTRIBUTES = ['tab', 'anchor'] as const
export class Sidebar extends BaseChildren {
    menuRef: Tab
    menuSlotRefs: Map<string, HTMLSlotElement> = new Map()
    panelRef: Drawer
    panelSlotRef: HTMLSlotElement
    panelSlotRefs: Map<string, HTMLSlotElement> = new Map()
    item?: HTMLDivElement[]
    static get observedAttributes() { return [...BASE_CHILDREN_ATTRIBUTES, ...ATTRIBUTES] }
    constructor() { 
        super(template, TAG_NAME)
        this.menuRef = this.shadowRoot!.querySelector('#menu')!
        this.panelRef = this.shadowRoot!.querySelector('#panel')!   
        this.panelSlotRef = this.shadowRoot!.querySelector('#panel-slot')!
        const anchor = this.attributes.getNamedItem('anchor')?.value
        const tab = this.attributes.getNamedItem('tab')?.value
        if(!anchor) {
            const defultAnchor = "right"
            this.setAttribute('anchor', defultAnchor)
            this.menuRef.setAttribute('anchor', defultAnchor)
            this.panelRef.setAttribute('anchor', defultAnchor)
        } else {
            this.menuRef.setAttribute('anchor', anchor)
            this.panelRef.setAttribute('anchor', anchor)
        }
        if(tab) {
            this.menuRef.setAttribute('tab', tab)
            this.panelRef.setAttribute('open', "true")
        }
    }

    public get tab() { return this.getAttribute('tab')! }
    public set tab(tab: string) { this.setAttribute('tab', tab.toString()) }

    public get anchor() { return this.getAttribute('anchor')! as any }
    public set anchor(anchor: 'left' | 'top' | 'right' | 'bottom') { this.setAttribute('anchor', anchor) }

    onChildernChange() {
        this.menuSlotRefs = new Map()
        this.panelSlotRefs = new Map()
        this.menuRef.replaceChildren()
        this.panelRef.replaceChildren()

        for (let item of this.children) {
            const role = item.getAttribute('name')
            const type = item.getAttribute('data-type')
            if(role && type === 'menu') {
                this.menuRef.appendChild(createSlot(role))
                const slotRef = this.shadowRoot!.querySelector<HTMLSlotElement>(`#${role}`)!
                if(item.getAttribute('aria-selected') === null) item.setAttribute('aria-selected', 'false')
                slotRef.assign(item)
                this.menuSlotRefs.set(role, slotRef)
            }

            if(role && type === 'panel') {
                (item as HTMLElement).style.display = 'none'
                this.panelRef.appendChild(createSlot("p-" + role))
                const slotRef = this.shadowRoot!.querySelector<HTMLSlotElement>(`#p-${role}`)!
                slotRef.assign(item)
                this.panelSlotRefs.set("p-" + role, slotRef)
            }
        }
        setTimeout(() => { this.menuRef.onChange = (e) => { this.tab = e.param.role } }, DOM_READY_TIME)
    }

    attributeUpdate(attributeName: typeof ATTRIBUTES[number], oldValue: string, newValue: string): void {
        switch (attributeName) {
            case 'tab': this.tabUpdate(oldValue, newValue)
            break
            case 'anchor': this.anchorUpdate(oldValue, newValue)
            break
        }
    }

    tabUpdate(oldTab: string, newTab: string) { 
        setTimeout(() => {
            this.menuRef.setAttribute('tab', newTab)
            if(this.select(newTab)) this.panelRef.setAttribute('open', 'true')
            else this.panelRef.setAttribute('open', 'false')
        }, DOM_READY_TIME)
    }

    anchorUpdate(oldAnchor: string, newAnchor: string) {
        if (newAnchor === 'left' ||
            newAnchor === 'right' ||
            newAnchor === 'top' ||
            newAnchor === 'bottom'
        ) {
            this.menuRef.setAttribute('anchor', newAnchor)
            this.panelRef.setAttribute('anchor', newAnchor)
        }
    }

    select(role: string | null | undefined) {
        let selected = null
        for (const item of this.children) {
            const name = item.getAttribute('name')
            const type = item.getAttribute('data-type')
            if (name === role) item.setAttribute('aria-selected', 'true')
            else item.setAttribute('aria-selected', 'false')
            if(name && type === 'panel') {
                if(name === role) {
                    selected = item as HTMLElement
                    selected.style.display = 'flex'
                } else 
                    (item as HTMLElement).style.display = 'none'
            }
        }
        return selected
    }

    close() {
        this.panelRef.open = false
        // this.removeAttribute('tab')
        // this.menuRef.close()
    }
}

customElements.define(TAG_NAME, Sidebar, { extends: 'div' })
