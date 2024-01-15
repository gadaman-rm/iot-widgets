import { BASE_SVG_ATTRIBUTES } from "../../_helper"
import { EditBoxRenderListener } from "./EditBoxRenderListener";

const ATTRIBUTES = ['zero'] as const
export class EditBox extends EditBoxRenderListener {
    static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
    constructor() {
        super()
    }
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], _oldValue: string, _newValue: string) {
        switch (attributeName) {
            case 'zero':
                break
        }
    }
}

customElements.define('my-editbox', EditBox, { extends: 'div' })
