import html from './Slider.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

export class Slider extends HTMLElement {
    static observedAttributes = ["zero"]
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
        console.log('mount')
    }
    disconnectedCallback() {
        console.log('unmount')
    }
    attributeChangedCallback(attributeName: string, oldValue: string, newValue: string) {
        console.log(attributeName, oldValue, newValue)
    }
}

customElements.define('my-slider', Slider)