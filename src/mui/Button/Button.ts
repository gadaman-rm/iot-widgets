import { MuiButton } from "./MuiButton"
const template = document.createElement('template')

template.innerHTML=`
<style id="jss-insertion-point"></style>
<div id="app"></div>
`

export class Button extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        const insertionPoint = this.shadowRoot!.getElementById('jss-insertion-point')!
        const container = this.shadowRoot!.getElementById('app')!
        MuiButton({ container, shadowRoot: this.shadowRoot!, insertionPoint, children: 'zero', variant: 'contained'})
    }
}

customElements.define('mui-button', Button)