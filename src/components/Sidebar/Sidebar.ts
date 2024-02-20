import { flatSlot } from '../../_helper'
import { DOM_READY_TIME } from '../../config'
import '../Tab/Tab'
import '../Tabs/Tabs'
import { Tabs } from '../Tabs/Tabs'
import { Drawer } from '../components'
import html from './Sidebar.html?raw'
import style from './Sidebar.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sidebar`
const ATTRIBUTES = ['id', 'open', 'anchor', 'min', 'max', 'size', 'offset'] as const
export class Sidebar extends HTMLDivElement {
    rootRef: HTMLDivElement
    tabsRef: Tabs
    drawerRef: Drawer
    tabsChildrenRef: HTMLSlotElement
    drawerChildrenRef: HTMLSlotElement
    static get observedAttributes() {
        return ATTRIBUTES
    }
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', TAG_NAME)
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.tabsRef = this.shadowRoot!.querySelector('#tabs')!
        this.drawerRef = this.shadowRoot!.querySelector('#drawer')!
        this.tabsChildrenRef = this.shadowRoot!.querySelector('#tabs-children')!
        this.drawerChildrenRef = this.shadowRoot!.querySelector('#drawer-children')!
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }

    attributeChangedCallback(attrName: typeof ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attrName) {
            case 'id': this.idUpdate(oldValue, newValue)
                break
        }
    }
    connectedCallback() {
        setTimeout(() => {
            this.tabsRef.onChange = (e) => {
                if(e.param.index !== -1) {
                    const panels = flatSlot(this.drawerChildrenRef) as HTMLElement[]
                    panels.forEach(item => {
                        if(item.getAttribute('data-role') !== e.param.role)
                            item.style.display = 'none'
                        else
                            item.style.display = 'block'
                    })
                    this.drawerRef.open = true

                    setTimeout(() => {this.closeTabs()}, 2000)
                }
            }
        }, DOM_READY_TIME)
    }

    closeTabs() {
        this.tabsRef.tab = -1
        this.drawerRef.open = false
    }

    idUpdate(oldId: string, newId: string) { }
}

customElements.define(TAG_NAME, Sidebar, { extends: 'div' })
