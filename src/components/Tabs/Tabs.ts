import { flatSlot } from '../../_helper'
import html from './Tabs.html?raw'
import style from './Tabs.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export interface TabsOnChangeEvent extends MouseEvent {
    param: {
        role: string,
        index: number,
    }
}

export const TABS_ATTRIBUTES = ['id', 'width', 'height', 'orientation', 'tab'] as const
export class Tabs extends HTMLDivElement {
    static get observedAttributes() {
        return TABS_ATTRIBUTES
    }
    rootRef: HTMLDivElement
    slotRef: HTMLSlotElement
    #onChange?: (e: TabsOnChangeEvent) => void
    constructor(tab?: number) {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', "g-tabs")
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.slotRef = this.shadowRoot!.querySelector('#slot')!
        this.tab = tab ? tab : -1
        // this.style.setProperty("--tab-color", "green")
    }

    public set onChange(fn: (e: TabsOnChangeEvent) => void) { this.#onChange = fn }
    public get width() { return this.getAttribute('width')! }
    public set width(width: number | string) {
        if (typeof width === 'number') this.setAttribute('width', `${width}px`)
        else this.setAttribute('width', width)
    }

    public get height() { return this.getAttribute('height')! }
    public set height(height: number | string) {
        if (typeof height === 'number') this.setAttribute('height', `${height}px`)
        else this.setAttribute('height', height)
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }

    public get orientation() { return this.getAttribute('orientation')! as any }
    public set orientation(orientation: 'vertical' | 'horizontal') { this.setAttribute('orientation', orientation) }

    public get tab() { return +this.getAttribute('tab')! }
    public set tab(tab: number | undefined) { 
        if(tab !== undefined) this.setAttribute('tab', tab.toString()) 
        else this.deSelectAll()
    }

    deSelectAll() {
        flatSlot(this.slotRef).map(item => {
            item.setAttribute('aria-selected', 'false')
            return item
        })
    }

    attributeChangedCallback(attrName: typeof TABS_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attrName) {
            case 'id': this.idUpdate(oldValue, newValue)
                break
            case 'orientation': this.orientationUpdate(oldValue as any, newValue as any)
                break
            case 'tab': this.tabUpdate(+oldValue, +newValue)
                break
            case 'width': this.widthUpdate(oldValue, newValue)
                break
            case 'height': this.heightUpdate(oldValue, newValue)
                break
        }
    }
    connectedCallback() {
        this.addEventListener('click', this.handleChange as any)
    }
    disconnectedCallback() {
        this.removeEventListener('click', this.handleChange as any)
    }
    handleChange(e: TabsOnChangeEvent) {
        const list = flatSlot(this.slotRef)
        const index = list.findIndex(i => i === e.target)
        if(index !== -1) {
            this.tab = index
            const role = list[index].role!
            e.param = { index: index, role }
            if (this.#onChange) this.#onChange(e)
        }
    }

    idUpdate(oldId: string, newId: string) { }
    widthUpdate(oldWidth: string, newWidth: string) {
        this.rootRef.style.width = newWidth
    }
    heightUpdate(oldHeight: string, newHeight: string) { 
        this.rootRef.style.height = newHeight
    }

    #orientation(className: string) {
        const match = this.rootRef.className.match(/tabs--dir-\w+/)
        if (match) this.rootRef.classList.replace(match[0], className)
        else this.rootRef.classList.add(className)
    }
    orientationUpdate(oldOrientation: 'vertical' | 'horizontal', newOrientation: 'vertical' | 'horizontal') {
        switch (newOrientation) {
            case "horizontal":
                this.#orientation('tabs--dir-horizontal')
                break
            case "vertical":
                this.#orientation('tabs--dir-vertical')
                break
        }
    }
    tabUpdate(oldTab: number, newTab: number) {
        if (newTab !== undefined) {
            const list = flatSlot(this.slotRef)
            if (newTab >= list.length) throw new Error("Invalid tab index!")

            list.map((item, index) => {
                if(index === newTab) { 
                    item.setAttribute('aria-selected', 'true')
                } else {
                    item.setAttribute('aria-selected', 'false')
                }

                return item 
            })
        }
    }
}

customElements.define('g-tabs', Tabs, { extends: 'div' })
