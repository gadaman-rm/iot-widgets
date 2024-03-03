import { BASE_SVG_ATTRIBUTES, BaseSvg } from '../../_helper'
import html from './Gauge.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

const ATTRIBUTES = ['zero'] as const
export class Gauge extends BaseSvg {
    static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
    constructor() {
        super({ template, width: 212.420, height: 158.119 })
        this.setAttribute('is', "g-gauge")
        this.setAttribute('ratio', '0.744')
    }
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], _oldValue: string, _newValue: string) {
        switch (attributeName) {
            case 'zero':
                break
        }
    }
}

customElements.define('g-gauge', Gauge, { extends: 'div' })
