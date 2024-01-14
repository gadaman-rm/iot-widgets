import { BASE_SVG_ATTRIBUTES, BaseSvg } from '../BaseSvg/BaseSvg'
import html from './Slider.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

const ATTRIBUTES = ['zero'] as const
export class Slider extends BaseSvg {
    static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
    constructor() {
        super(template, 653, 66.68661572947046)
    }
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], _oldValue: string, _newValue: string) {
        switch (attributeName) {
            case 'zero':
                break
        }
    }
}

customElements.define('my-slider', Slider, { extends: 'div' })