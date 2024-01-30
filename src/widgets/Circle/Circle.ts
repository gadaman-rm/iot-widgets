const template = document.createElement('template')
template.innerHTML = `
<style>
svg {
    position: absolute;
}
</style>
<svg xmlns="http://www.w3.org/2000/svg" overflow="visible" >
    <circle cx="0" cy="0" r="50" fill="green"></circle>
</svg>
`

export class Circle extends HTMLDivElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.setAttribute('is', "my-circle")
    }
}

customElements.define('my-circle', Circle, { extends: 'div' })