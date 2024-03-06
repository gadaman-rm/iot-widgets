import { EditBox, IWidgets } from '..'
import { Transform } from '../../math/matrix'
import { Point } from '../../math/point'
import html from './SvgContainer.html?raw'
import style from './SvgContainer.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export interface WidgetChangeEvent {
    detail: {
        widgets: IWidgets[]
    }
}

export interface SelectChangeEvent {
    detail: {
        selects: { widget: IWidgets, editBox: EditBox }[]
    }
}

export interface RemoveEditBoxEvent {
    remove: { editBox: EditBox }
}

export const SVG_CONTAINER_ATTRIBUTES = ['panx', 'pany', 'zoom'] as const
export class SvgContainer extends HTMLDivElement {
    root: SVGSVGElement
    main: SVGGElement
    transform: Transform
    editBoxforWidgets: { widget: IWidgets, editBox: EditBox }[]
    widgets: IWidgets[]
    static get observedAttributes() { return SVG_CONTAINER_ATTRIBUTES }
    widgetChangeEvent: CustomEvent<WidgetChangeEvent['detail']>
    selectChangeEvent: CustomEvent<SelectChangeEvent['detail']>
    editBoxRemoveEvent: CustomEvent<RemoveEditBoxEvent>
    constructor(widgets: IWidgets[] = [], pan: Point = { x: 0, y: 0 }, zoom: number = 1) {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.root = this.shadowRoot!.querySelector('#root')!
        this.main = this.shadowRoot!.querySelector('#main')!
        this.setAttribute('is', "g-svg-container")
        this.transform = new Transform(this.main, pan.x, pan.y, zoom, zoom)
        this.zoom = zoom
        this.pan = pan
        this.editBoxforWidgets = []
        widgets.forEach(widget => this.addWidget(widget))
        this.widgets = widgets
        this.appendChild(document.createElement('main'))
        this.widgetChangeEvent = new CustomEvent<WidgetChangeEvent['detail']>("widget-change", { detail: { widgets } })
        this.selectChangeEvent = new CustomEvent<SelectChangeEvent['detail']>("select-change", { detail: { selects: [] } })
        this.editBoxRemoveEvent = new CustomEvent<RemoveEditBoxEvent>('editbox-remove', { detail: { remove: {} } as any })
    }
    public get zoom() { return +this.getAttribute('zoom')! }
    public set zoom(zoom: number) { this.setAttribute('zoom', zoom.toString()) }
    public get pan() { return { x: +this.getAttribute('panx')!, y: +this.getAttribute('pany')! } }
    public set pan(pan: Point) {
        this.setAttribute('panx', pan.x.toString())!
        this.setAttribute('pany', pan.y.toString())!
    }
    public get matrix() { return this.root.getScreenCTM()! }
    mouseCoordInContainerMatrix = (e: MouseEvent) => {
        return new DOMPoint(e.clientX, e.clientY).matrixTransform(this.matrix)
    }
    mouseCoordInContainer(e: MouseEvent) {
        const pan = this.pan
        const zoom = this.zoom
        return { x: (e.clientX - pan.x) / zoom, y: (e.clientY - pan.y) / zoom }
    }
    zoomUpdate(oldZoom: number, newZoom: number) { this.transform.transform = { scaleX: newZoom, scaleY: newZoom } }
    panXUpdate(oldPanX: number, newPanX: number) { this.transform.transform = { ...this.pan, x: newPanX } }
    panYUpdate(oldPanY: number, newPanY: number) { this.transform.transform = { ...this.pan, y: newPanY } }

    attributeChangedCallback(attributeName: typeof SVG_CONTAINER_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attributeName) {
            case 'panx':
                this.panXUpdate(+oldValue, +newValue)
                break
            case 'pany':
                this.panYUpdate(+oldValue, +newValue)
                break
            case 'zoom':
                this.zoomUpdate(+oldValue, +newValue)
                break
        }
    }

    addWidget(widget: IWidgets) {
        this.firstChild!.appendChild(widget)
        this.widgets.push(widget)
        this.widgetChangeEvent.detail.widgets = [...this.widgets]
        this.dispatchEvent(this.widgetChangeEvent)
    }
    removeWidget(widget: IWidgets | undefined = undefined) {
        if (widget) this.widgets.forEach((item, index) => {
            if (item.id === widget.id) {
                item.remove()
                this.widgets.splice(index, 1)
            }
        })
        else {
            this.widgets.forEach((item, index) => { item.remove() })
            this.widgets.splice(0, this.widgets.length)
        }
        this.widgetChangeEvent.detail.widgets = [...this.widgets]
        this.dispatchEvent(this.widgetChangeEvent)
    }
    findWidget(widget: IWidgets) { return this.widgets.find(item => item.id == widget.id) }

    addWidgetEditBox(widget: IWidgets, editBox: EditBox) {
        this.firstChild!.appendChild(editBox)
        this.editBoxforWidgets.push({ widget, editBox })
        this.selectChangeEvent.detail.selects = [...this.editBoxforWidgets]
        this.dispatchEvent(this.selectChangeEvent)
    }
    removeWidgetEditBox(editBox: EditBox | undefined = undefined) {
        if (editBox)
            this.widgets.forEach((item, index) => {
                if (item.id === editBox.id) {
                    this.editBoxRemoveEvent.detail.remove.editBox = editBox
                    this.dispatchEvent(this.editBoxRemoveEvent)
                    item.remove()
                    this.editBoxforWidgets.splice(index, 1)
                }
            })
        else {
            this.editBoxforWidgets.forEach((item, index) => { 
                this.editBoxRemoveEvent.detail.remove.editBox = item.editBox
                this.dispatchEvent(this.editBoxRemoveEvent)
                item.editBox.remove() 
            })
            this.editBoxforWidgets.splice(0, this.editBoxforWidgets.length)
        }
    }
    findWidgetEditBox(widget: IWidgets) { return this.editBoxforWidgets.find(item => item.widget.id == widget.id) }

    //********************************* Events *********************************
    //__________________________ add __________________________
    addEventListener(type: 'widget-change', listener: (e: WidgetChangeEvent) => void, options?: boolean | AddEventListenerOptions | undefined): void
    addEventListener(type: 'select-change', listener: (e: SelectChangeEvent) => void, options?: boolean | AddEventListenerOptions | undefined): void
    addEventListener(type: 'editbox-remove', listener: (e: RemoveEditBoxEvent) => void, options?: boolean | AddEventListenerOptions | undefined): void
    // @ts-ignore: Unreachable code error
    addEventListener(type: unknown, listener: unknown, options?: unknown): void

    //__________________________ remove __________________________
    removeEventListener(type: 'widget-change', listener: (e: WidgetChangeEvent) => void, options?: boolean | EventListenerOptions | undefined): void
    removeEventListener(type: 'select-change', listener: (e: SelectChangeEvent) => void, options?: boolean | EventListenerOptions | undefined): void
    removeEventListener(type: 'editbox-remove', listener: (e: {detail: RemoveEditBoxEvent}) => void, options?: boolean | EventListenerOptions | undefined): void
    // @ts-ignore: Unreachable code error
    removeEventListener(type: unknown, listener: unknown, options?: unknown): void
    //********************************* *********************************
}

customElements.define('g-svg-container', SvgContainer, { extends: 'div' })
