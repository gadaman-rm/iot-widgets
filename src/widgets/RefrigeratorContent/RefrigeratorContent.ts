import { BASE_SVG_ATTRIBUTES, BaseSvg } from '../../_helper'
import htmlText from './RefrigeratorContent.html?raw'
import cssText from './RefrigeratorContent.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${cssText}</style>${htmlText}`

export interface RefrigeratorContentLoadedEvent { loaded: Boolean }

const TAG_NAME = `g-refrigerator-content`
const ATTRIBUTES = ['value'] as const
export class RefrigeratorContent extends BaseSvg {
    static get observedAttributes() { return [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES] }
    loadEvent: CustomEvent<RefrigeratorContentLoadedEvent>
    constructor() {
        super({ template, width: 104.67, height: 54.87 })
        this.setAttribute('is', TAG_NAME)
        this.setAttribute('ratio', '0.524')
        this.loadEvent = new CustomEvent<RefrigeratorContentLoadedEvent>("widget-loaded", { detail: { loaded: false } })
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
    "widget-loaded": { detail: RefrigeratorContentLoadedEvent }
}

customElements.define(TAG_NAME, RefrigeratorContent, { extends: 'div' })
