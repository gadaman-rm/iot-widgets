import { getCssVar } from '../../_helper'
import { DOM_READY_TIME } from '../../config'
import { DragListener } from '../../event/DragListener'
import html from './Drawer.html?raw'
import style from './Drawer.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export const DRAWER_ATTRIBUTES = ['id', 'open', 'anchor', 'size', 'offset'] as const
export class Drawer extends HTMLDivElement {
    static get observedAttributes() {
        return DRAWER_ATTRIBUTES
    }

    #onClose?: () => void
    rootRef: HTMLDivElement
    resizerRef: HTMLDivElement
    dragListener!: DragListener<{ animation: boolean }>
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', "g-drawer")
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.resizerRef = this.shadowRoot!.querySelector('#resizer')!
        this.initHandler()
        setTimeout(() => {
            if(getCssVar('--drawer-animation', this) === 'show') this.rootRef.classList.add('drawer--animation')
            else this.rootRef.classList.remove('drawer--animation') 
        }, DOM_READY_TIME);
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }

    public get open() { return this.getAttribute('open')! === 'true' }
    public set open(open: boolean) { this.setAttribute('open', open ? 'true' : 'false') }

    public get anchor() { return this.getAttribute('anchor')! as any }
    public set anchor(anchor: 'left' | 'top' | 'right' | 'bottom') { this.setAttribute('anchor', anchor) }

    public get size() { return +this.getAttribute('size')! }
    public set size(size: number) { this.setAttribute('size', size.toString()) }

    public get offset() { return +this.getAttribute('offset')! }
    public set offset(offset: number) { this.setAttribute('offset', offset.toString()) }

    public get onClose(): string { return this.getAttribute('onclose')! }
    public set onClose(fn: () => void) { this.#onClose = fn }

    attributeChangedCallback(attrName: typeof DRAWER_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attrName) {
            case 'id': this.idUpdate(oldValue, newValue)
                break
            case 'open': this.openUpdate(oldValue === 'true', newValue === 'true')
                break
            case 'size': this.sizeUpdate(+oldValue, +newValue)
                break
            case 'offset': this.offsetUpdate(+oldValue, +newValue)
                break
            case 'anchor': this.anchorUpdate(oldValue, newValue)
                break
        }
    }

    validateAndSetSize = (size: number) => {
        const min = parseFloat(getCssVar('--drawer-min', this))
        const max = parseFloat(getCssVar('--drawer-max', this))
        if (size > min && size < max) return true
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

        this.dragListener.onDragStart = (e) => {
            const animation = getCssVar('--drawer-animation', this) === 'show'
            e.param.initFn({ animation })
            this.rootRef.classList.remove('drawer--animation')
        }
        this.dragListener.onDragMove = (e) => {
            const rootBounds = this.rootRef.getBoundingClientRect()
            switch (this.anchor) {
                case 'right': {
                    const mouseResize = rootBounds.right - e.clientX
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
                case 'left': {
                    const mouseResize = e.clientX - rootBounds.left
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
                case 'top': {
                    const mouseResize = e.clientY - rootBounds.top
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
                case 'bottom': {
                    const mouseResize = rootBounds.bottom - e.clientY
                    if (this.validateAndSetSize(mouseResize)) this.size = mouseResize
                    break
                }
            }
        }
        this.dragListener.onDragEnd = (e) => { 
            if(e.param.init!.animation) this.rootRef.classList.add('drawer--animation')
        }
    }

    idUpdate(oldId: string, newId: string) { }
    openUpdate(oldOpen: boolean, newOpen: boolean) {
        if (newOpen) this.rootRef.classList.add('drawer--open')
        else this.rootRef.classList.remove('drawer--open')
        if (!newOpen && this.#onClose) setTimeout(() => this.#onClose!(), 292)
    }
    offsetUpdate(oldsize: number, newSize: number) {
        this.style.setProperty("--drawer-offset", `${newSize}px`)
    }
    sizeUpdate(oldsize: number, newSize: number) {
        if (this.anchor === 'left' || this.anchor === 'right') {
            this.style.setProperty("--drawer-width", `${newSize}px`)
            this.style.setProperty("--drawer-height", "100%")
        }
        if (this.anchor === 'top' || this.anchor === 'bottom') {
            this.style.setProperty("--drawer-height", `${newSize}px`)
            this.style.setProperty("--drawer-width", "100%")
        }

        if (oldsize && newSize && oldsize !== newSize && !this.validateAndSetSize(newSize)) this.size = oldsize
    }
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
        if(this.size) this.size = this.size
    }
}

customElements.define('g-drawer', Drawer, { extends: 'div' })
