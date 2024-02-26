import '@material/web/ripple/ripple'
import { BASE_CHILDREN_ATTRIBUTES, BaseChildren } from '../../_helper/BaseChildren'
import html from './Tab.html?raw'
import style from './Tab.scss?inline'

export interface NTabOnSelectEvent extends MouseEvent {
    param: {
        role: string
    }
}

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-tab`
const ATTRIBUTES = ['tab', 'size', 'item-size', 'anchor'] as const
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

    mount() {
        this.init()
    }

    init() {
        // if(!this.attributes.getNamedItem('anchor')) this.anchor="left"
    }

    public get tab() { return this.getAttribute('tab')! }
    public set tab(tab: string) { this.setAttribute('tab', tab) }

    public get size() { return +this.getAttribute('size')! }
    public set size(size: number) { this.setAttribute('size', size.toString()) }

    public get itemSize() { return +this.getAttribute('item-size')! }
    public set itemSize(itemSize: number) { this.setAttribute('item-size', itemSize.toString()) }

    public get anchor() { return this.getAttribute('anchor')! as any }
    public set anchor(anchor: 'left' | 'top' | 'right' | 'bottom') { this.setAttribute('anchor', anchor) }

    public set onChange(fn: (e: NTabOnSelectEvent) => void) { this.#onChange = fn }

    onChildernChange(): void {
        this.render()
        this.handler()
    }

    handler = () => { this.handleChange() }

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
            this.tab = role
            if (this.#onChange) this.#onChange(e)
        }
    }

    select(role: string | null | undefined) {
        for (const item of this.children) {
            if (item.getAttribute('name') === role) item.setAttribute('aria-selected', 'true')
            else item.setAttribute('aria-selected', 'false')
        }
    }

    close() { this.removeAttribute('tab') }

    onChildernAttrChange(target: HTMLElement, attributeName: string, oldValue: string, newValue: string): void {
        const name = target.getAttribute('name')
        if(name) {
            const item  = this.rootRef.children.namedItem(name)
            if(item) item.setAttribute(attributeName, newValue)
        }
    }

    #dir(className: string) {
        const match = this.rootRef.className.match(/tab--dir-\w+/)
        if (match) this.rootRef.classList.replace(match[0], className)
        else this.rootRef.classList.add(className)
    }

    attributeUpdate(attributeName: typeof ATTRIBUTES[number], oldValue: string, newValue: string): void {
        switch (attributeName) {
            case 'tab': this.tabUpdate(oldValue, newValue)
            break
            case 'size': this.sizeUpdate(+oldValue, +newValue)
                break
            case 'item-size': this.itemSizeUpdate(+oldValue, +newValue)
                break
            case 'anchor': this.anchorUpdate(oldValue, newValue)
                break
        }
    }

    tabUpdate(oldTab: string, newTab: string) { this.select(newTab) }
    sizeUpdate(oldSize: number, newSize: number) { this.style.setProperty("--tab-size", `${newSize}px`) }
    itemSizeUpdate(oldItemSize: number, newItemSize: number) { this.style.setProperty("--tab-item-size", `${newItemSize}px`) }
    anchorUpdate(oldAnchor: string, newAnchor: string) {
        switch (newAnchor) {
            case "left":
                this.#dir('tab--dir-left')
                break
            case "right":
                this.#dir('tab--dir-right')
                break
            case "top":
                this.#dir('tab--dir-top')
                break
            case "bottom":
                this.#dir('tab--dir-bottom')
                break
        }
    }
}

customElements.define(TAG_NAME, Tab, { extends: 'div' })
