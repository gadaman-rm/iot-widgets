import htmlText from './Loader.html?raw'
import cssText from './Loader.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${cssText}</style>${htmlText}`

const TAG_NAME = `g-loader`
const ATTRIBUTES = [] as const
export class Loader extends HTMLDivElement {
    static get observedAttributes() { return [...ATTRIBUTES] }
    rootRef: HTMLDivElement
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', TAG_NAME)
        this.rootRef = this.shadowRoot!.querySelector('#root')!
    }
}

customElements.define(TAG_NAME, Loader, { extends: 'div' })
