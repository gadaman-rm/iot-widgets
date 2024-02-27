import { BASE_CHILDREN_ATTRIBUTES, BaseChildren } from '../../_helper/BaseChildren'
import html from './Sample.html?raw'
import style from './Sample.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sample`
const ATTRIBUTES = ['tab', 'anchor'] as const
const CHILDREN_ATTRIBUTES = ['name'] as const
export class Sample extends BaseChildren {
    static get observedAttributes() { return [...BASE_CHILDREN_ATTRIBUTES, ...ATTRIBUTES] }
    static get observedChildrenAttributes() { return [...CHILDREN_ATTRIBUTES] }
    rootRef: HTMLDivElement
    nameRef: HTMLSlotElement
    descriptionRef: HTMLSlotElement
    constructor() {
        super(template, TAG_NAME)
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.nameRef = this.shadowRoot!.querySelector('#name')!
        this.descriptionRef = this.shadowRoot!.querySelector('#description')!
    }

    onChildernAttrChange(target: HTMLElement, attributeName: string, oldValue: string, newValue: string): void {
        if (attributeName === 'name') {
            if (oldValue === 'name') this.nameRef.assign()
            if (oldValue === 'description') this.descriptionRef.assign()

            if (newValue === 'name') this.nameRef.assign(target)
            if (newValue === 'description') this.descriptionRef.assign(target)
        }
    }

    onChildernChange() {
        const name = this.children.namedItem('name')
        if (name) this.nameRef.assign(name)
        else this.nameRef.assign()

        const description = this.children.namedItem('description')
        if (description) this.descriptionRef.assign(description)
        else this.descriptionRef.assign()
    }
}

customElements.define(TAG_NAME, Sample, { extends: 'div' })

/********** usage ********
<div id="sample" is="g-sample">
    <div name="name">zero</div>
    <div name="description">zero is cool</div>
</div>
**/
