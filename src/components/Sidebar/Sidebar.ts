import { BASE_CHILDREN_ATTRIBUTES, BaseChildren } from '../../_helper/BaseChildren'
import html from './Sidebar.html?raw'
import style from './Sidebar.scss?inline'
import { Drawer, Tab } from '../components'
import { DOM_READY_TIME } from '../../config'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sidebar`
const ATTRIBUTES = ['tab', 'panel-min', 'panel-max', 'anchor'] as const
export class Sidebar extends BaseChildren {
    menuRef: Tab
    panelRef: Drawer
    item?: HTMLDivElement[]
    static get observedAttributes() { return [...BASE_CHILDREN_ATTRIBUTES, ...ATTRIBUTES] }
    constructor() { 
        super(template, TAG_NAME)
        this.menuRef = this.shadowRoot!.querySelector('#menu')!
        this.panelRef = this.shadowRoot!.querySelector('#panel')!   
        
        const anchor = this.attributes.getNamedItem('anchor')?.value
        if(!anchor) {
            const defultAnchor = "top"
            this.setAttribute('anchor', defultAnchor)
            this.menuRef.setAttribute('anchor', defultAnchor)
            this.panelRef.setAttribute('anchor', defultAnchor)
        } else {
            this.menuRef.setAttribute('anchor', anchor)
            this.panelRef.setAttribute('anchor', anchor)
        }

        const tab = this.attributes.getNamedItem('tab')?.value
        if(tab) {
            this.menuRef.setAttribute('tab', tab)
            this.panelRef.setAttribute('open', "true")
        }
    }

    public get tab() { return this.getAttribute('tab')! }
    public set tab(tab: string) { this.setAttribute('tab', tab.toString()) }

    public get tabSize() { return this.getAttribute('tab-size')! }
    public set tabSize(tabSize: string) { this.setAttribute('tab-size', tabSize.toString()) }

    public get tabItemSize() { return this.getAttribute('tab-item-size')! }
    public set tabItemSize(tabItemSize: string) { this.setAttribute('tab-item-size', tabItemSize.toString()) }

    public get panelSize() { return this.getAttribute('panel-size')! }
    public set panelSize(panelSize: string) { this.setAttribute('panel-size', panelSize.toString()) }

    public get panelMin() { return this.getAttribute('panel-min')! }
    public set panelMin(panelMin: string) { this.setAttribute('panel-min', panelMin.toString()) }

    public get panelMax() { return this.getAttribute('panel-max')! }
    public set panelMax(panelMax: string) { this.setAttribute('panel-max', panelMax.toString()) }

    public get anchor() { return this.getAttribute('anchor')! as any }
    public set anchor(anchor: 'left' | 'top' | 'right' | 'bottom') { this.setAttribute('anchor', anchor) }

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

                const div = document.createElement('div')
                div.setAttribute('name', role)
                div.innerHTML = panel
                div.style.display = 'none'

                this.panelRef.appendChild(div)
            }
        }
    }

    attributeUpdate(attributeName: typeof ATTRIBUTES[number], oldValue: string, newValue: string): void {
        switch (attributeName) {
            case 'tab': this.tabUpdate(oldValue, newValue)
            break
            case 'panel-min': this.panelMinUpdate(+oldValue, +newValue)
            break
            case 'panel-max': this.panelMaxUpdate(+oldValue, +newValue)
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

    panelMinUpdate(oldPanelMin: number, newPanelMin: number) { 
        this.panelRef.setAttribute('min', newPanelMin.toString())
    }

    panelMaxUpdate(oldPanelMax: number, newPanelMax: number) { 
        this.panelRef.setAttribute('max', newPanelMax.toString())
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

    handleChange() {
        this.menuRef.onChange = (e) => {
            if (e.param.role) { this.tab = e.param.role }
        }
    }

    select(role: string | null | undefined) {
        let selected = null
        for (const item of this.panelRef.children) {
            if (item.getAttribute('name') === role) {
                selected = item as HTMLElement
                selected.style.display = 'block'
            }
            else (item as HTMLElement).style.display = 'none'
        }

        return selected
    }

    close() {
        this.menuRef.close()
        this.removeAttribute('tab')
        this.panelRef.open = false
    }
}

customElements.define(TAG_NAME, Sidebar, { extends: 'div' })
