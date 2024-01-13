import html from './MyComponent.html?raw'
import style from './MyComponent.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export class MyComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('my-component', MyComponent)