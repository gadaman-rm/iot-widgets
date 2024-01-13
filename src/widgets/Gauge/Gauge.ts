import html from './Gauge.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

export class Gauge extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('my-gauge', Gauge)