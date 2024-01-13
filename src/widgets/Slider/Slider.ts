import html from './Slider.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

export class Slider extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('my-slider', Slider)