import { DragListener } from '../../event/DragListener'
import { vhToPX, vwToPX } from '../../math/units'
import html from './Drawer.html?raw'
import style from './Drawer.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export const BASE_SVG_ATTRIBUTES = ['id', 'open', 'anchor', 'min', 'max', 'size', 'offset'] as const
export class Drawer extends HTMLDivElement {
    static get observedAttributes() {
        return BASE_SVG_ATTRIBUTES
    }

    #onClose?: () => void
    rootRef: HTMLDivElement
    resizerRef: HTMLDivElement
    dragListener!: DragListener
    constructor(anchor: 'left' | 'top' | 'right' | 'bottom' = 'left', initSize = 200, minSize?: number, maxSize?: number) {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', "g-drawer")
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.resizerRef = this.shadowRoot!.querySelector('#resizer')!

        this.anchor = anchor
        this.size = initSize
        this.min = (minSize === undefined) && (this.anchor === 'left' || this.anchor === 'right') ? vwToPX(10) : vhToPX(10)
        this.max = (maxSize === undefined) && (this.anchor === 'left' || this.anchor === 'right') ? vwToPX(50) : vhToPX(50)
        this.initHandler()
        this.rootRef.classList.add('drawer--animation')
        this.open = true
        // this.style.setProperty("--drawer-color", "green")
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }

    public get open() { return this.getAttribute('open')! === 'true' }
    public set open(open: boolean) { this.setAttribute('open', open ? 'true' : 'false') }

    public get anchor() { return this.getAttribute('anchor')! as any }
    public set anchor(anchor: 'left' | 'top' | 'right' | 'bottom') { this.setAttribute('anchor', anchor) }

    public get min() { return +this.getAttribute('min')! }
    public set min(min: number) { this.setAttribute('min', min.toString()) }

    public get max() { return +this.getAttribute('max')! }
    public set max(max: number) { this.setAttribute('max', max.toString()) }

    public get size() { return +this.getAttribute('size')! }
    public set size(size: number) { this.setAttribute('size', size.toString()) }

    public get onClose(): string { return this.getAttribute('onclose')! }
    public set onClose(fn: () => void) { this.#onClose = fn }

    attributeChangedCallback(attrName: typeof BASE_SVG_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attrName) {
            case 'id': this.idUpdate(oldValue, newValue)
                break
            case 'open': this.openUpdate(oldValue === 'true', newValue === 'true')
                break
            case 'size': this.sizeUpdate(+oldValue, +newValue)
                break
            case 'min': this.minUpdate(+oldValue, +newValue)
                break
            case 'max': this.maxUpdate(+oldValue, +newValue)
                break
            case 'anchor': this.anchorUpdate(oldValue, newValue)
                break
        }
    }

    validateAndSetSize = (size: number) => {
        if (size > this.min && size < this.max) return true
        else return false
    }

    #dir(className: string) {
        const match = this.rootRef.className.match(/drawer--dir-\w+/)
        if (match) this.rootRef.classList.replace(match[0], className)
        else this.rootRef.classList.add(className)
    }

    initHandler() {
        this.dragListener = new DragListener(this.resizerRef)

        if (this.onClose && typeof window[this.onClose as any] === 'function')
            this.#onClose = window[this.onClose as any] as any

        this.dragListener.onDragStart = () => { this.rootRef.classList.remove('drawer--animation') }
        this.dragListener.onDragMove = (e) => {
            switch (this.anchor) {
                case 'right': {
                    const screenWidth = (window.innerWidth || document.body.offsetWidth)
                    const mouseResize = screenWidth - (e.clientX - document.body.offsetLeft)
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
                case 'left': {
                    const mouseResize = e.clientX
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
                case 'top': {
                    const mouseResize = e.clientY
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
                case 'bottom': {
                    const screenHeight = (window.innerHeight || document.body.offsetHeight)
                    const mouseResize = screenHeight - (e.clientY - document.body.offsetTop)
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
            }
        }
        this.dragListener.onDragEnd = () => { this.rootRef.classList.add('drawer--animation') }
    }

    idUpdate(oldId: string, newId: string) { }
    openUpdate(oldOpen: boolean, newOpen: boolean) {
        if (newOpen) this.rootRef.classList.add('drawer--open')
        else this.rootRef.classList.remove('drawer--open')
        if (!newOpen && this.#onClose) setTimeout(() => this.#onClose!(), 292)
    }
    sizeUpdate(oldsize: number, newSize: number) {
        if (this.anchor === 'left' || this.anchor === 'right') {
            this.rootRef.style.height = `100%`
            this.rootRef.style.width = `${newSize}px`
        }
        if (this.anchor === 'top' || this.anchor === 'bottom') {
            this.rootRef.style.width = `100%`
            this.rootRef.style.height = `${newSize}px`
        }

        if (oldsize && newSize && !this.validateAndSetSize(newSize)) this.size = oldsize
    }
    minUpdate(oldMin: number, newMin: number) { }
    maxUpdate(oldMax: number, newMax: number) { }
    anchorUpdate(oldAnchor: string, newAnchor: string) {
        switch (newAnchor) {
            case "left":
                this.#dir('drawer--dir-left')
                break
            case "right":
                this.#dir('drawer--dir-right')
                break
            case "top":
                this.#dir('drawer--dir-top')
                break
            case "bottom":
                this.#dir('drawer--dir-bottom')
                break
        }
        this.size = this.size
    }
}

customElements.define('g-drawer', Drawer, { extends: 'div' })
