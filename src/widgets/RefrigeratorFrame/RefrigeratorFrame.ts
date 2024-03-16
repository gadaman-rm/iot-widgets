import { BASE_SVG_ATTRIBUTES, BaseSvg } from '../../_helper'
import htmlText from './RefrigeratorFrame.html?raw'
import cssText from './RefrigeratorFrame.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface RefrigeratorFrameLoadedEvent { loaded: Boolean }

const TAG_NAME = `g-refrigerator-frame`
const ATTRIBUTES = ['value'] as const
export class RefrigeratorFrame extends BaseSvg {
    static get observedAttributes() { return [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES] }
    loadEvent: CustomEvent<RefrigeratorFrameLoadedEvent>
    constructor() {
        super({ template, width: 199.88, height: 94.34 })
        this.setAttribute('is', TAG_NAME)
        this.setAttribute('ratio', '0.472')
        this.loadEvent = new CustomEvent<RefrigeratorFrameLoadedEvent>("widget-loaded", { detail: { loaded: false } })
    }

    mount() {
        this.loadEvent.detail.loaded = true
        this.dispatchEvent(this.loadEvent)
    }
    unmount() { }
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attributeName) {
            case 'value':
                this.valueUpdate(oldValue, newValue)
                break
        }
    }

    valueUpdate(oldValue: string, newValue: string) { }

    // @ts-ignore: Unreachable code error
    addEventListener<K extends keyof CustomElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    // @ts-ignore: Unreachable code error
    removeEventListener<K extends keyof CustomElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void
}

interface CustomElementEventMap extends HTMLElementEventMap {
    "widget-loaded": { detail: RefrigeratorFrameLoadedEvent }
}

customElements.define(TAG_NAME, RefrigeratorFrame, { extends: 'div' })
