import { randomId } from "../math/helper"
import { Transform, toTransformBox } from "../math/matrix"
import { point, roundPoint, subPoint } from "../math/point"

export const BASE_SVG_ATTRIBUTES = ['id', 'x', 'y', 'width', 'height', 'rotate', 'scalex', 'scaley', 'origin'] as const
export class BaseSvg extends HTMLDivElement {
    root: SVGSVGElement
    #transform: Transform
    constructor(template: HTMLTemplateElement,
        id = randomId(),
        width?: number,
        height?: number,
        x = 0,
        y = 0,
        rotate = 0,
        origin?: string,
        scaleX = 1,
        scaleY = 1,
    ) {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.root = this.shadowRoot!.querySelector('svg')!
        this.width = width
        this.height = height
        this.#transform = new Transform(this.root, x, y, scaleX, scaleY, rotate)
        const originStr = origin ? origin : (this.width && this.height) ? `${this.width / 2} ${this.height / 2}` : '0 0'
        this.origin = originStr
        this.id = id
        if(this.width !== undefined) this.setAttribute('width', this.width.toString())
        if(this.height !== undefined) this.setAttribute('height', this.height.toString())
        if(this.origin !== undefined) this.setAttribute('origin', originStr)
    }
    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }
    public get x() { return +this.getAttribute('x')! }
    public set x(x: number) { this.setAttribute('x', x.toString()) }
    public get y() { return +this.getAttribute('y')! }
    public set y(y: number) { this.setAttribute('y', y.toString()) }
    public get rotate() { return +this.getAttribute('rotate')! }
    public set rotate(rotate: number) { this.setAttribute('rotate', rotate.toString()) }
    public get scaleX() { return +this.getAttribute('scaleX')! }
    public set scaleX(scaleX: number) { this.setAttribute('scaleX', scaleX.toString()) }
    public get scaleY() { return +this.getAttribute('scaleY')! }
    public set scaleY(scaleY: number) { this.setAttribute('scaleY', scaleY.toString()) }

    public get width(): number { return +this.root.getAttribute('width')! }
    public set width(width: number | undefined) {
        if (width !== undefined) {
            this.root.setAttribute('width', width.toString())
        }
    }
    public get height(): number { return +this.root.getAttribute('height')! }
    public set height(height: number | undefined) {
        if (height !== undefined) this.root.setAttribute('height', height.toString())
    }
    public get originStr() { return this.root.getAttribute('transform-origin')! }
    public get origin(): { x: number, y: number } {
        const origin = this.root.getAttribute('transform-origin')?.trim()?.split(' ')!
        const x = +origin[0]
        const y = +origin[1]
        return { x, y }
    }
    public set origin(origin: string) { this.root.setAttribute('transform-origin', origin) }

    setOriginCenter() {
        if (this.width !== undefined && this.height !== undefined) {
            const newOrigin = `${this.width / 2} ${this.height / 2}`
            this.setAttribute('origin', newOrigin)
        }
    }

    fixResizePosition(oldWidth: number, newWidth: number, oldHeight: number, newHeight: number) {
        const { x, y, rotate } = this.#transform
        const iBox = toTransformBox(x, y, oldWidth, oldHeight, rotate)
        const nBox = toTransformBox(x, y, newWidth, newHeight, rotate)
        const dTl = subPoint(nBox.tl, iBox.tl)
        const newPosition = roundPoint(subPoint(point(x, y), dTl))
        if(!isNaN(newPosition.x) && !isNaN(newPosition.y)) {
            this.setAttribute('x', newPosition.x.toString())
            this.setAttribute('y', newPosition.y.toString())
        }
    }

    attributeChangedCallback(attributeName: typeof BASE_SVG_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attributeName) {
            case 'id': this.idUpdate(oldValue, newValue)
            break
            case 'x': this.xUpdate(+oldValue, +newValue)
                break
            case 'y': this.yUpdate(+oldValue, +newValue)
                break
            case 'width': this.widthUpdate(+oldValue, +newValue)
                break
            case 'height': this.heightUpdate(+oldValue, +newValue)
                break
            case 'rotate': this.rotateUpdate(+oldValue, +newValue)
                break
            case 'scalex': this.scaleXUpdate(+oldValue, +newValue)
                break
            case 'scaley': this.scaleYUpdate(+oldValue, +newValue)
                break
            case 'origin': this.originUpdate(oldValue, newValue)
                break
            default: this.attributeUpdate(attributeName, oldValue, newValue)
        }
    }
    connectedCallback() { this.mount() }
    disconnectedCallback() { this.unmount() }

    idUpdate(oldId: string, newId: string) {  }
    widthUpdate(oldWidth: number, newWidth: number) {
        this.width = newWidth
        this.setOriginCenter()
        this.fixResizePosition(oldWidth, newWidth, this.height, this.height)
    }
    heightUpdate(oldHeight: number, newHeight: number) {
        this.height = newHeight
        this.setOriginCenter()
        this.fixResizePosition(this.width, this.width, oldHeight, newHeight)
    }
    xUpdate(oldX: number, newX: number) { this.#transform.transform = {x: newX} }
    yUpdate(oldY: number, newY: number) { this.#transform.transform = {y: newY} }
    rotateUpdate(oldRotate: number, newRotate: number) { this.#transform.transform = {rotate: newRotate} }
    scaleXUpdate(oldScaleX: number, newScaleX: number) { this.#transform.transform = {scaleX: newScaleX} }
    scaleYUpdate(oldScaleY: number, newScaleY: number) { this.#transform.transform = {scaleY: newScaleY} }
    originUpdate(oldOrigin: string, newOrigin: string) { this.origin = newOrigin }
    attributeUpdate(attributeName: any, oldValue: string, newValue: string) { }
    mount() { }
    unmount() { }
}
