import { BASE_SVG_ATTRIBUTES, BaseSvg } from '../BaseSvg/BaseSvg'
import html from './Gauge.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

const ATTRIBUTES = ['zero'] as const
export class Gauge extends BaseSvg {
    static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
    constructor() {
        super(template, 212.42054748535156, 158.1199951171875)
    }
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], _oldValue: string, _newValue: string) {
        switch (attributeName) {
            case 'zero':
                break
        }
    }
}

customElements.define('my-gauge', Gauge, { extends: 'div' })