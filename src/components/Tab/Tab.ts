import '@material/web/ripple/ripple'
import { BASE_CHILDREN_ATTRIBUTES, BaseChildren } from '../../_helper/BaseChildren'
import html from './Tab.html?raw'
import style from './Tab.scss?inline'
import { DOM_READY_TIME } from '../../config'


export interface NTabOnSelectEvent extends MouseEvent {
    param: {
        role: string
    }
}

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-tab`
const ATTRIBUTES = ['tab', 'size'] as const
const CHILDREN_ATTRIBUTES = ['aria-selected'] as const
export class Tab extends BaseChildren {
    item?: HTMLDivElement[]
    rootRef: HTMLDivElement
    #onChange?: (e: NTabOnSelectEvent) => void
    static get observedAttributes() { return [...BASE_CHILDREN_ATTRIBUTES, ...ATTRIBUTES] }
    static get observedChildrenAttributes() { return [...CHILDREN_ATTRIBUTES] }
    constructor() { 
        super(template, TAG_NAME)
        this.rootRef = this.shadowRoot!.querySelector('#root')!
    }

    public get tab() { return +this.getAttribute('tab')! }
    public set tab(tab: number | undefined) { 
        // if(tab !== undefined) this.setAttribute('tab', tab.toString()) 
        // else this.deSelectAll()
    }

    public set onChange(fn: (e: NTabOnSelectEvent) => void) { this.#onChange = fn }

    onChildernChange(): void {
        this.render()
        this.handler()
    }

    handler = () => { setTimeout(() => { this.handleChange() }, DOM_READY_TIME) }

    render() {
        this.rootRef.replaceChildren()

        for (let item of this.children) {
            const role = item.getAttribute('name')
            const selected = item.getAttribute('aria-selected') === 'true'
            const menu = item.innerHTML

            if(role && menu) {
                const div = document.createElement('div')
                div.setAttribute('name', role)
                div.setAttribute('aria-selected', selected ? 'true' : 'false')
                div.innerHTML = `<md-ripple></md-ripple>${menu}`
                div.classList.add('item')
                this.rootRef.appendChild(div)
            }
        }
    }

    handleChange() { for (const item of this.rootRef.children) { (item as HTMLDivElement).addEventListener('click', this.handleSelect as any) } }

    handleSelect = (e: NTabOnSelectEvent) => {
        const role = (e.target as HTMLDivElement).getAttribute('name')
        if(role) {
            e.param = { role }
            this.select(role)
            if (this.#onChange) this.#onChange(e)
        }
    }

    select(role: string) {
        for (const item of this.children) {
            if(item.getAttribute('name') === role) item.setAttribute('aria-selected', 'true')
            else item.setAttribute('aria-selected', 'false')
        }
    }

    onChildernAttrChange(target: HTMLElement, attributeName: string, oldValue: string, newValue: string): void {
        const name = target.getAttribute('name')
        if(name) {
            const item  = this.rootRef.children.namedItem(name)
            if(item) item.setAttribute(attributeName, newValue)
        }
    }
}

customElements.define(TAG_NAME, Tab, { extends: 'div' })
