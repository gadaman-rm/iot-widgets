import { BASE_SVG_ATTRIBUTES, BaseSvg } from '../../_helper'
import { randomId } from '../../math/helper'
import html from './Slider.html?raw'

const template = document.createElement('template')
template.innerHTML = `${html}`

const ATTRIBUTES = ['zero'] as const
export class Slider extends BaseSvg {
    static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
    constructor(width = 653, height = 66.68661572947046, x = 0, y = 0, rotate = 0, origin?: string, scaleX = 1, scaleY = 1) {
        super(template, randomId(), width, height, x, y, rotate, origin, scaleX, scaleY)
    }
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], _oldValue: string, _newValue: string) {
        switch (attributeName) {
            case 'zero':
                break
        }
    }
}

customElements.define('my-slider', Slider, { extends: 'div' })