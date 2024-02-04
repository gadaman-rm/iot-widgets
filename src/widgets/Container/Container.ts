import { Transform } from '../../math/matrix'
import { Point } from '../../math/point'
import html from './Container.html?raw'
import style from './Container.scss?inline'

const template = document.createElement('template')
template.innerHTML = `<style>${style}</style>${html}`

export const CONTAINER_ATTRIBUTES = ['panx', 'pany', 'zoom'] as const
export class Container extends HTMLDivElement {
    root: SVGSVGElement
    main: SVGGElement
    transform: Transform
    static get observedAttributes() { return CONTAINER_ATTRIBUTES }
    constructor(pan: Point = {x: 0, y: 0}, zoom: number = 1) {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.root = this.shadowRoot!.querySelector('#root')!
        this.main = this.shadowRoot!.querySelector('#main')!
        this.setAttribute('is', "my-container")
        this.transform = new Transform(this.main, pan.x, pan.y, zoom, zoom)
        this.zoom = zoom
        this.pan = pan
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
        return { x: (e.clientX - pan.x) / zoom, y: (e.clientY - pan.y) / zoom}
    }
    zoomUpdate(oldZoom: number, newZoom: number) { this.transform.transform = { scaleX: newZoom, scaleY: newZoom } }
    panXUpdate(oldPanX: number, newPanX: number) { this.transform.transform = {...this.pan, x: newPanX} }
    panYUpdate(oldPanY: number, newPanY: number) { this.transform.transform = {...this.pan, y: newPanY} }

    attributeChangedCallback(attributeName: typeof CONTAINER_ATTRIBUTES[number], oldValue: string, newValue: string) {
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
}

customElements.define('my-container', Container, { extends: 'div' })
