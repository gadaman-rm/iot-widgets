import { EditBox, IWidgets } from '..'
import { moveToIndex } from '../../_helper'
import { Transform } from '../../math/matrix'
import { Point } from '../../math/point'
import html from './SvgContainer.html?raw'
import style from './SvgContainer.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export interface WidgetChangeEvent { widgets: IWidgets[] }
export interface EditBoxChangeEvent { editBoxforWidgets: EditBoxforWidgets[] }

export type EditBoxforWidgets = { widget: IWidgets, editBox: EditBox }

export const SVG_CONTAINER_ATTRIBUTES = ['panx', 'pany', 'zoom'] as const
export class SvgContainer extends HTMLDivElement {
    root: SVGSVGElement
    main: SVGGElement
    transform: Transform
    widgets: IWidgets[]
    editBoxforWidgets: EditBoxforWidgets[]
    static get observedAttributes() { return SVG_CONTAINER_ATTRIBUTES }
    widgetChangeEvent: CustomEvent<WidgetChangeEvent>
    editBoxChangeEvent: CustomEvent<EditBoxChangeEvent>
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
        this.widgetChangeEvent = new CustomEvent<WidgetChangeEvent>("widget-change", { detail: { widgets } })
        this.editBoxChangeEvent = new CustomEvent<EditBoxChangeEvent>("editbox-change", { detail: { editBoxforWidgets: [] } })
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
    removeWidget(widget: IWidgets) {
        this.widgets.forEach((item, index) => {
            if (item.id === widget.id) {
                this.widgets.splice(index, 1)
                item.remove()

                this.widgetChangeEvent.detail.widgets = [...this.widgets]
                this.dispatchEvent(this.widgetChangeEvent)
            }
        })
    }
    findWidget(widgetId: string) { return this.widgets.find(item => item.id === widgetId) }

    addEditBox(widget: IWidgets, editBox: EditBox) {
        this.firstChild!.appendChild(editBox)
        this.editBoxforWidgets.push({ editBox, widget })

        this.editBoxChangeEvent.detail.editBoxforWidgets = [...this.editBoxforWidgets]
        this.dispatchEvent(this.editBoxChangeEvent)
    }
    removeEditBox(widget: IWidgets) {
        const removeItemIndex = this.editBoxforWidgets.findIndex(item => item.widget.id === widget.id)
        if (removeItemIndex !== -1) {
            this.editBoxforWidgets[removeItemIndex].editBox.remove()
            this.editBoxforWidgets.splice(removeItemIndex, 1)

            this.editBoxChangeEvent.detail.editBoxforWidgets = [...this.editBoxforWidgets]
            this.dispatchEvent(this.editBoxChangeEvent)
        }
    }
    removeAllEditBox() {
        if (this.editBoxforWidgets.length > 0) {
            this.editBoxforWidgets.forEach(item => item.editBox.remove())
            this.editBoxforWidgets.splice(0, this.editBoxforWidgets.length)

            this.editBoxChangeEvent.detail.editBoxforWidgets = [...this.editBoxforWidgets]
            this.dispatchEvent(this.editBoxChangeEvent)
        }
    }
    findEditBoxByWidgetId(widget: IWidgets) { return this.editBoxforWidgets.find(item => item.widget.id === widget.id) }
    findEditBoxById(editBox: EditBox) { return this.editBoxforWidgets.find(item => item.editBox.id === editBox.id) }

    riseToTop() {
        const selected = this.editBoxforWidgets[0].widget
        if (selected && this.widgets.length > 1) {
            const widgetIndex = this.widgets.findIndex(item => item.id === selected.id)
            moveToIndex(selected, this.widgets.length)
            this.swap(this.widgets.length - 1, widgetIndex)
        }
    }

    rise() {
        const selected = this.editBoxforWidgets[0].widget
        if (selected && this.widgets.length > 1) {
            const widgetIndex = this.widgets.findIndex(item => item.id === selected.id)
            const swapIndex = (widgetIndex + 1) >= this.widgets.length ? (this.widgets.length - 1) : (widgetIndex + 1)
            moveToIndex(selected, swapIndex + 1)
            this.swap(widgetIndex, swapIndex)
        }
    }

    lower() {
        const selected = this.editBoxforWidgets[0].widget
        if (selected && this.widgets.length > 1) {
            const widgetIndex = this.widgets.findIndex(item => item.id === selected.id)
            const swapIndex = widgetIndex ? widgetIndex - 1 : 0 as number
            moveToIndex(selected, swapIndex)
            this.swap(widgetIndex, swapIndex)
        }
    }

    lowerToBottom() {
        const selected = this.editBoxforWidgets[0].widget
        if (selected && this.widgets.length > 1) {
            const widgetIndex = this.widgets.findIndex(item => item.id === selected.id) as number
            moveToIndex(selected, 0)
            this.swap(0, widgetIndex)
        }
    }

    swap(indexA: number, indexB: number) { [[this.widgets[indexA]], [this.widgets[indexB]]] = [[this.widgets[indexB]], [this.widgets[indexA]]]}
    //********************************* Events *********************************
    // @ts-ignore: Unreachable code error
    addEventListener<K extends keyof CustomElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    // @ts-ignore: Unreachable code error
    removeEventListener<K extends keyof CustomElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void
}

interface CustomElementEventMap extends HTMLElementEventMap {
    "widget-change": { detail: WidgetChangeEvent }
    "editbox-change": { detail: EditBoxChangeEvent }
}

customElements.define('g-svg-container', SvgContainer, { extends: 'div' })
