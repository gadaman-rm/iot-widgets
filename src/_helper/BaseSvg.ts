import { randomId } from "../math/helper"
import { Transform, toTransformBox } from "../math/matrix"
import { Point, point, roundPoint, subPoint } from "../math/point"

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
        this.#transform = new Transform(this.root, x, y, scaleX, scaleY, rotate)
        this.id = id
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.scaleX = scaleX
        this.scaleY = scaleY
        this.rotate = rotate
        this.origin = origin ? origin : (this.width && this.height) ? `${this.width / 2} ${this.height / 2}` : '0 0'
    }

    public get id() { return this.getAttribute('id')! }
    public set id(id: string) { this.setAttribute('id', id) }
    public get width(): number { return +this.getAttribute('width')! }
    public set width(width: number | undefined) { if (width !== undefined) this.setAttribute('width', width.toString()) }
    public get height(): number { return +this.getAttribute('height')! }
    public set height(height: number | undefined) { if (height !== undefined) this.setAttribute('height', height.toString()) }
    public get x() { return +this.getAttribute('x')! }
    public set x(x: number) { this.setAttribute('x', x.toString()) }
    public get y() { return +this.getAttribute('y')! }
    public set y(y: number) { this.setAttribute('y', y.toString()) }
    public get rotate() { return (+this.getAttribute('rotate')!)}
    public set rotate(rotate: number) { this.setAttribute('rotate', (rotate).toString()) }
    public get scaleX() { return +this.getAttribute('scaleX')! }
    public set scaleX(scaleX: number) { this.setAttribute('scaleX', scaleX.toString()) }
    public get scaleY() { return +this.getAttribute('scaleY')! }
    public set scaleY(scaleY: number) { this.setAttribute('scaleY', scaleY.toString()) }
    public get originStr() { return this.getAttribute('origin')! }
    public get origin(): Point {
        const origin = this.getAttribute('origin')?.trim()?.split(' ')!
        const x = +origin[0]
        const y = +origin[1]
        return { x, y }
    }
    public set origin(origin: string | Point) {
        if (typeof origin === 'string') this.setAttribute('origin', origin)
        else this.setAttribute('origin', `${origin.x} ${origin.y}`)
    }

    setOriginCenter() {
        if (this.width !== undefined && this.height !== undefined)
            this.origin = { x: this.width / 2, y: this.height / 2 }
    }
    fixXyInResize(oldWidth: number, newWidth: number, oldHeight: number, newHeight: number) {
        const { x, y, rotate } = this.#transform.transform
        const iBox = toTransformBox(x, y, oldWidth, oldHeight, rotate)
        const nBox = toTransformBox(x, y, newWidth, newHeight, rotate)
        const dTl = subPoint(nBox.tl, iBox.tl)
        const newPosition = roundPoint(subPoint(point(this.x, this.y), dTl))
        if (!isNaN(newPosition.x) && !isNaN(newPosition.y)) {
            this.x = newPosition.x
            this.y = newPosition.y
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

    idUpdate(oldId: string, newId: string) { }
    widthUpdate(oldWidth: number, newWidth: number) {
        this.fixXyInResize(oldWidth, newWidth, this.height, this.height)
        this.root.setAttribute('width', newWidth.toString())
        this.setOriginCenter()
    }
    heightUpdate(oldHeight: number, newHeight: number) {
        this.fixXyInResize(this.width, this.width, oldHeight, newHeight)
        this.root.setAttribute('height', newHeight.toString())
        this.setOriginCenter()
    }
    xUpdate(oldX: number, newX: number) { this.#transform.transform = { x: newX } }
    yUpdate(oldY: number, newY: number) { this.#transform.transform = { y: newY } }
    rotateUpdate(oldRotate: number, newRotate: number) { this.#transform.transform = { rotate: -newRotate } }
    scaleXUpdate(oldScaleX: number, newScaleX: number) { this.#transform.transform = { scaleX: newScaleX } }
    scaleYUpdate(oldScaleY: number, newScaleY: number) { this.#transform.transform = { scaleY: newScaleY } }
    originUpdate(oldOrigin: string, newOrigin: string) { this.root.setAttribute('transform-origin', newOrigin) }
    attributeUpdate(attributeName: any, oldValue: string, newValue: string) { }
    mount() { }
    unmount() { }
}
