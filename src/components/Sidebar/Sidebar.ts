import { BASE_CHILDREN_ATTRIBUTES, BaseChildren } from '../../_helper/BaseChildren'
import html from './Sidebar.html?raw'
import style from './Sidebar.scss?inline'
import { Drawer, Tab } from '../components'
import { DOM_READY_TIME } from '../../config'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sidebar`
const ATTRIBUTES = ['open'] as const
export class Sidebar extends BaseChildren {
    menuRef: Tab
    panelRef: Drawer
    item?: HTMLDivElement[]
    static get observedAttributes() { return [...BASE_CHILDREN_ATTRIBUTES, ...ATTRIBUTES] }
    constructor() { 
        super(template, TAG_NAME)
        this.menuRef = this.shadowRoot!.querySelector('#menu')!
        this.panelRef = this.shadowRoot!.querySelector('#panel')!      
    }

    onChildernChange(): void {
        this.render()
        this.handler()
    }

    handler = () => { setTimeout(() => { this.handleChange() }, DOM_READY_TIME) }

    render() {
        this.menuRef.replaceChildren()
        this.panelRef.replaceChildren()

        for (let item of this.children) {
            const role = item.getAttribute('name')
            const menu = item.querySelector('[name="menu"]')?.innerHTML
            const panel = item.querySelector('[name="panel"]')?.innerHTML

            if (role && menu && panel) {
                const tab = document.createElement('div')
                tab.setAttribute('name', role)
                tab.setAttribute('aria-selected', 'false')
                tab.innerHTML = menu
                this.menuRef.appendChild(tab)
                // console.log(this.menuRef);
                

                const div = document.createElement('div')
                div.setAttribute('name', role)
                div.innerHTML = panel
                div.style.display = 'none'

                this.panelRef.appendChild(div)
            }
        }
    }

    handleChange() {
        this.menuRef.onChange = (e) => {
            if (e.param.role) {
                    for (const item of this.panelRef.children) {
                        if (item.getAttribute('name') !== e.param.role)
                            (item as HTMLElement).style.display = 'none'
                        else
                            (item as HTMLElement).style.display = 'block'
                    }
                this.panelRef.open = true
            }
            // setTimeout(() => { this.closeTabs() }, 4000)
        }
    }

    closeTabs() {
        this.menuRef.tab = -1
        this.panelRef.open = false
    }
}

customElements.define(TAG_NAME, Sidebar, { extends: 'div' })
