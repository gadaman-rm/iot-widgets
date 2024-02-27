import { BASE_CHILDREN_ATTRIBUTES, BaseChildren } from '../../_helper/BaseChildren'
import html from './SampleList.html?raw'
import style from './SampleList.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

const TAG_NAME = `g-sample-list`
const ATTRIBUTES = ['tab', 'anchor'] as const
const CHILDREN_ATTRIBUTES = ['name'] as const
export class SampleList extends BaseChildren {
    static get observedAttributes() { return [...BASE_CHILDREN_ATTRIBUTES, ...ATTRIBUTES] }
    static get observedChildrenAttributes() { return [...CHILDREN_ATTRIBUTES] }
    rootRef: HTMLDivElement
    slotRef: HTMLSlotElement
    constructor() {
        super(template, TAG_NAME)
        this.rootRef = this.shadowRoot!.querySelector('#root')!
        this.slotRef = this.shadowRoot!.querySelector('#slot')!
    }

    // onChildernAttrChange(target: HTMLElement, attributeName: string, oldValue: string, newValue: string): void {
    //     // if (attributeName === 'name') {
    //     //     if (oldValue === 'name') this.nameRef.assign()
    //     //     if (oldValue === 'description') this.descriptionRef.assign()

    //     //     if (newValue === 'name') this.nameRef.assign(target)
    //     //     if (newValue === 'description') this.descriptionRef.assign(target)
    //     // }
    // }

    onChildernChange() {
        this.slotRef.assign(...this.children)
        // for (const item of this.children) {
            
            // const role = item.getAttribute('name')
            // if(role) {
            //     if(!children.hasOwnProperty(role)) { 
            //         const div = document.createElement('slot')
            //         div.setAttribute('name', role)
            //         div.setAttribute('aria-selected', 'false')
            //         children[role] = div
            //     }

            //     (children[role] as HTMLSlotElement).assign(item)
            //     this.rootRef.append(children[role])
                
            // }
        // }
        
        // const name = this.children.namedItem('name')
        // if (name) this.nameRef.assign(name)
        // else this.nameRef.assign()

        // const description = this.children.namedItem('description')
        // if (description) this.descriptionRef.assign(description)
        // else this.descriptionRef.assign()
    }
}

customElements.define(TAG_NAME, SampleList, { extends: 'div' })

/********** usage ********
<div id="sample-list" is="g-sample-list">
    <div name="video">
        <div name="menu">video</div>
        <div name="panel">video detail</div>
    </div>

    <div name="photo">
        <div name="menu">photo</div>
        <div name="panel">photo detail</div>
    </div>
</div>
**/
