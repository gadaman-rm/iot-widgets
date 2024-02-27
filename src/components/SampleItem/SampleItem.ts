import htmlPanel from './SampleItemPanel.html?raw'
import stylePanel from './SampleItemPanel.scss?inline'
import htmlMenu from './SampleItemMenu.html?raw'
import styleMenu from './SampleItemMenu.scss?inline'

const templatePanel = document.createElement('template')
templatePanel.innerHTML = `<style>${stylePanel}</style>${htmlPanel}`

const templateMenu = document.createElement('template')
templateMenu.innerHTML = `<style>${styleMenu}</style>${htmlMenu}`

// type Recursive<Type, Check, TrueCon, FalseCon = undefined> = Type extends Check ? TrueCon : FalseCon

const TAG_NAME = `g-sample-item`
export class SampleItem extends HTMLDivElement {
    type: 'menu' | 'panel'
    menuRef?: HTMLDivElement
    panelRef?: HTMLDivElement
    slotRef?: HTMLSlotElement
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.type = this.attributes.getNamedItem('type')?.value as any
        if(this.type === 'menu') {
            this.shadowRoot!.appendChild(templateMenu.content.cloneNode(true))
            this.menuRef = this.shadowRoot!.querySelector('#menu')!
            this.slotRef = this.shadowRoot!.querySelector('#slot')!
        }
        if(this.type === 'panel') {
            this.shadowRoot!.appendChild(templatePanel.content.cloneNode(true))
            this.panelRef = this.shadowRoot!.querySelector('#panel')!
            this.slotRef = this.shadowRoot!.querySelector('#slot')!
        }
        this.setAttribute('is', TAG_NAME)
    }
}

customElements.define(TAG_NAME, SampleItem, { extends: 'div' })