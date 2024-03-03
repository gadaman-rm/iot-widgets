import { SvgContainer } from ".."
import { BASE_SVG_ATTRIBUTES, BaseSvg } from "../../_helper"
import { randomId } from "../../math/helper"
import { TransformedBox, toTransformBox } from "../../math/matrix"
import { Point, point, roundPoint, subPoint } from "../../math/point"
import html from './EditBox.html?raw'
import { BmidResizeListener } from "./listeners/BmidResizeListener"
import { BrResizeListener } from "./listeners/BrResizeListener"
import { MoveListener } from "./listeners/MoveListener"
import { RmidResizeListener } from "./listeners/RmidResizeListener"
import { RotateListener } from "./listeners/RotateListener"

const template = document.createElement('template')
template.innerHTML = `${html}`
const ATTRIBUTES = [] as const
export type EditEvent = {
    type: 'rmid-resize' | 'bmid-resize' | 'br-resize' | 'move' | 'rotate'
    width: number
    height: number
    x: number
    y: number
    rotate: number
    scaleX: number
    scaleY: number
    origin: Point
    originStr: string
}
export class EditBox extends BaseSvg {
    static observedAttributes = [...BASE_SVG_ATTRIBUTES, ...ATTRIBUTES]
    controllerSize: number
    svgContainer: SvgContainer
    bodyRef: SVGRectElement
    rotateRef: SVGCircleElement
    tlResizeRef: SVGRectElement
    lmidResizeRef: SVGRectElement
    blResizeRef: SVGRectElement
    bmidResizeRef: SVGRectElement
    brResizeRef: SVGRectElement
    rmidResizeRef: SVGRectElement
    tmidResizeRef: SVGRectElement
    rmidResizeListener: RmidResizeListener
    bmidResizeListener: BmidResizeListener
    brResizeListener: BrResizeListener
    rotateListener: RotateListener
    moveListener: MoveListener
    isResizeByListener: boolean
    #onEditStart?: (type: EditEvent['type']) => void
    #onEdit?: (e: EditEvent) => void
    #onEditEnd?: (type: EditEvent['type']) => void
    constructor(id = randomId(), svgContainer: SvgContainer, width = 0, height = 0, x = 0, y = 0, rotate = 0, origin?: string, scaleX = 1, scaleY = 1) {
        super(template, id, width, height, x, y, rotate, origin, scaleX, scaleY)
        this.setAttribute('is', "g-editbox")
        this.isResizeByListener = false
        this.controllerSize = 12
        this.svgContainer = svgContainer
        this.bodyRef = this.root.querySelector('#body')!
        this.rotateRef = this.root.querySelector('#rotate')!
        this.tlResizeRef = this.root.querySelector('#tl-resize')!
        this.lmidResizeRef = this.root.querySelector('#lmid-resize')!
        this.blResizeRef = this.root.querySelector('#bl-resize')!
        this.bmidResizeRef = this.root.querySelector('#bmid-resize')!
        this.brResizeRef = this.root.querySelector('#br-resize')!
        this.rmidResizeRef = this.root.querySelector('#rmid-resize')!
        this.tmidResizeRef = this.root.querySelector('#tmid-resize')!

        this.moveListener = new MoveListener(this.bodyRef, this)
        this.rotateListener = new RotateListener(this.rotateRef, this)
        this.rmidResizeListener = new RmidResizeListener(this.rmidResizeRef, this)
        this.bmidResizeListener = new BmidResizeListener(this.bmidResizeRef, this)
        this.brResizeListener = new BrResizeListener(this.brResizeRef, this)
        this.render()
    }
    public set onEditStart(fn: (type: EditEvent['type']) => void) { this.#onEditStart = fn }

    public set onEdit(fn: (e: EditEvent) => void) { this.#onEdit = fn }

    public set onEditEnd(fn: (type: EditEvent['type']) => void) { this.#onEditEnd = fn }

    editStartEmit(type: EditEvent['type']) { if (this.#onEditStart) this.#onEditStart(type) }
    editEmit(type: EditEvent['type'], e: Partial<EditEvent>) {
        if (this.#onEdit)
            this.#onEdit({
                type,
                width: this.width,
                height: this.height,
                x: this.x,
                y: this.y,
                rotate: this.rotate,
                scaleX: this.scaleX,
                scaleY: this.scaleY,
                originStr: this.originStr,
                origin: this.origin,
                ...e
            })
    }
    editEndEmit(type: EditEvent['type']) { if (this.#onEditEnd) this.#onEditEnd(type) }

    mouseCoordInZoomAndPan = (e: MouseEvent) => {
        return this.svgContainer.mouseCoordInContainer(e)
    }
    // toTransformBox = (box: {x?: number, y?: number, width?: number, height?: number}, panAndZoom = false) => {
    //     const {pan, zoom} = this.container
    //     const transform = this.transform

    //     const dxZoom = panAndZoom ? (transform.x * zoom) - transform.x : 0
    //     const dyZoom = panAndZoom ? (transform.y * zoom) - transform.y : 0
    //     const dxPan = panAndZoom ? pan.x : 0
    //     const dyPan = panAndZoom ? pan.y : 0

    //     box.x ??= transform.x + dxZoom + dxPan
    //     box.y ??= transform.y + dyZoom + dyPan
    //     box.width ??= this.width * (panAndZoom ? zoom : 1)
    //     box.height ??= this.height * (panAndZoom ? zoom : 1)
    //     const {tl, tr, br, bl, aabox} = toTransformBox(box.x, box.y, box.width, box.height, transform.rotate)

    //     return {tl, tr, br, bl, aabox}
    // }

    toTransformBox = (box: { x?: number, y?: number, width?: number, height?: number }) => {
        box.x ??= this.x
        box.y ??= this.y
        box.width ??= this.width
        box.height ??= this.height
        const { tl, tr, br, bl, aabox } = toTransformBox(box.x, box.y, box.width, box.height, -this.rotate)

        return { tl, tr, br, bl, aabox }
    }

    fixResizePositionInZoomAndPan(initTransformBox: TransformedBox, newTransformBox: TransformedBox) {
        const dTl = subPoint(newTransformBox.tl, initTransformBox.tl)
        const newPosition = roundPoint(subPoint(point(this.x, this.y), dTl))
        return newPosition
    }

    render() {
        if (this.bodyRef && this.tlResizeRef && this.lmidResizeRef &&
            this.blResizeRef && this.rotateRef && this.bmidResizeRef &&
            this.brResizeRef && this.rmidResizeRef && this.tmidResizeRef
        ) {
            this.root.setAttribute('width', this.width.toString())
            this.root.setAttribute('height', this.height.toString())
            this.bodyRef.setAttribute('width', this.width.toString())
            this.bodyRef.setAttribute('height', this.height.toString())

            // this.tlResizeRef.setAttribute('width', this.controllerSize.toString())
            // this.tlResizeRef.setAttribute('height', this.controllerSize.toString())
            // this.tlResizeRef.setAttribute('x', (-this.controllerSize / 2).toString())
            // this.tlResizeRef.setAttribute('y', (-this.controllerSize / 2).toString())

            // this.lmidResizeRef.setAttribute('width', this.controllerSize.toString())
            // this.lmidResizeRef.setAttribute('height', this.controllerSize.toString())
            // this.lmidResizeRef.setAttribute('x', (-this.controllerSize / 2).toString())
            // this.lmidResizeRef.setAttribute('y', ((this.height * 0.5) - (this.controllerSize / 2)).toString())

            // this.blResizeRef.setAttribute('width', this.controllerSize.toString())
            // this.blResizeRef.setAttribute('height', this.controllerSize.toString())
            // this.blResizeRef.setAttribute('x', (-this.controllerSize / 2).toString())
            // this.blResizeRef.setAttribute('y', ((this.height) - (this.controllerSize / 2)).toString())

            this.rotateRef = this.root.querySelector('#rotate')! as SVGCircleElement
            this.rotateRef.setAttribute('cx', this.width.toString())
            this.rotateRef.setAttribute('r', (this.controllerSize / 2).toString())

            this.bmidResizeRef.setAttribute('width', this.controllerSize.toString())
            this.bmidResizeRef.setAttribute('height', this.controllerSize.toString())
            this.bmidResizeRef.setAttribute('x', ((this.width * 0.5) - (this.controllerSize / 2)).toString())
            this.bmidResizeRef.setAttribute('y', ((this.height) - (this.controllerSize / 2)).toString())

            this.brResizeRef.setAttribute('width', this.controllerSize.toString())
            this.brResizeRef.setAttribute('height', this.controllerSize.toString())
            this.brResizeRef.setAttribute('x', ((this.width) - (this.controllerSize / 2)).toString())
            this.brResizeRef.setAttribute('y', ((this.height) - (this.controllerSize / 2)).toString())

            this.rmidResizeRef.setAttribute('width', this.controllerSize.toString())
            this.rmidResizeRef.setAttribute('height', this.controllerSize.toString())
            this.rmidResizeRef.setAttribute('x', ((this.width) - (this.controllerSize / 2)).toString())
            this.rmidResizeRef.setAttribute('y', ((this.height * 0.5) - (this.controllerSize / 2)).toString())

            // this.tmidResizeRef.setAttribute('width', this.controllerSize.toString())
            // this.tmidResizeRef.setAttribute('height', this.controllerSize.toString())
            // this.tmidResizeRef.setAttribute('x', ((this.width * 0.5) - (this.controllerSize / 2)).toString())
            // this.tmidResizeRef.setAttribute('y', (-this.controllerSize / 2).toString())
        }
    }

    widthUpdate(oldWidth: number, newWidth: number): void {
        if (this.isMounted) {
            if (!this.isResizeByListener) this.fixXyInResize(oldWidth, newWidth, this.height, this.height)
            this.setOriginCenter()
            if (!this.isDimUpdate && this.ratio) {
                this.isDimUpdate = true
                this.height = +(newWidth * this.ratio).toFixed(3)
            } else {
                this.isDimUpdate = false
            }
            this.render()
        }
    }

    heightUpdate(oldHeight: number, newHeight: number): void {
        if (this.isMounted) {
            if (!this.isResizeByListener) this.fixXyInResize(this.width, this.width, oldHeight, newHeight)
            this.setOriginCenter()
            if (!this.isDimUpdate && this.ratio) {
                this.isDimUpdate = true
                this.width = +(newHeight * 1 / this.ratio).toFixed(3)
            } else {
                this.isDimUpdate = false
            }
            this.render()
        }
    }

    ratioUpdate(oldRatio: number, newRatio: number): void {
        if(newRatio) {
            this.rmidResizeRef.style.visibility = 'hidden'
            this.bmidResizeRef.style.visibility = 'hidden'
        } else {
            this.rmidResizeRef.style.visibility = 'visible'
            this.bmidResizeRef.style.visibility = 'visible'
        }
    }

    unmount() {
        this.moveListener.removeListener()
        this.rotateListener.removeListener()
        this.rmidResizeListener.removeListener()
        this.bmidResizeListener.removeListener()
        this.brResizeListener.removeListener()
    }
}

customElements.define('g-editbox', EditBox, { extends: 'div' })
