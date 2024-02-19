import html from './Tab.html?raw'
import style from './Tab.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export const TAB_ATTRIBUTES = ['id', 'width', 'height', 'aria-selected'] as const
export class Tab extends HTMLDivElement {
    static get observedAttributes() {
        return TAB_ATTRIBUTES
    }
    rootRef: HTMLDivElement
    slotRef: HTMLSlotElement
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', "g-tab")
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.slotRef = this.shadowRoot!.querySelector('#slot')!
        // this.style.setProperty("--tab-color", "green")
        // this.addEventListener('click', (e) => {
        //     // let rect = (e.target as HTMLElement).getBoundingClientRect()
        // })
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }

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

    public get selected() { return this.getAttribute('aria-selected')! === 'true' }
    public set selected(selected: boolean) { this.setAttribute('aria-selected', selected ? "true" : 'false') }

    attributeChangedCallback(attrName: typeof TAB_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attrName) {
            case 'id': this.idUpdate(oldValue, newValue)
                break
            case 'aria-selected': this.selectedUpdate(oldValue === 'true', newValue === 'true')
                break
            case 'width': this.widthUpdate(oldValue, newValue)
                break
            case 'height': this.heightUpdate(oldValue, newValue)
                break
        }
    }

    idUpdate(oldId: string, newId: string) { }
    widthUpdate(oldWidth: string, newWidth: string) {
        this.rootRef.style.width = newWidth
    }
    heightUpdate(oldHeight: string, newHeight: string) { 
        this.rootRef.style.height = newHeight
    }
    selectedUpdate(oldSelected: boolean, newSelected: boolean) { 
        if(newSelected) {
            this.rootRef.classList.add('tab--selected')
        } else {
            this.rootRef.classList.remove('tab--selected')

        }
    }
}

customElements.define('g-tab', Tab, { extends: 'div' })
