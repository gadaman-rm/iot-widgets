import { BASE_SVG_ATTRIBUTES, BaseSvg } from '../../_helper'
import { randomId } from '../../math/helper'
import html from './Gauge.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

const ATTRIBUTES = ['zero'] as const
export class Gauge extends BaseSvg {
    static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
    constructor(id = randomId(), width = 212.420, height = 158.119, x = 0, y = 0, rotate = 0, origin?: string, scaleX = 1, scaleY = 1) {
        super(template, id, width, height, x, y, rotate, origin, scaleX, scaleY)
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
