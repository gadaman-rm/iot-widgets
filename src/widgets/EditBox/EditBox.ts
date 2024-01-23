import { BASE_SVG_ATTRIBUTES, BaseSvg } from "../../_helper"
import { randomId } from "../../math/helper"
import { Transform } from "../../math/matrix"
import { Point } from "../../math/point"
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
    containerTransform: Transform
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
    #onEdit?: (e: EditEvent) => void
    constructor(id = randomId(), transform: Transform, width = 100, height = 100, x = 0, y = 0, rotate = 0, origin?: string, scaleX = 1, scaleY = 1) {
        super(template, id, width, height, x, y, rotate, origin, scaleX, scaleY)
        this.setAttribute('is', "my-editbox")
        this.isResizeByListener = false
        this.controllerSize = 12
        this.containerTransform = transform
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
        this.initHandler()
        this.render()
    }
    mouseCoordInZoomAndPan = (e: MouseEvent) => {
        const { x, y, scaleX } = this.containerTransform
        return {
            x: (e.clientX - x) * (1 / scaleX),
            y: (e.clientY - y) * (1 / scaleX),
        }
    }
    onEditEmit(type: 'rmid-resize' | 'bmid-resize' | 'br-resize' | 'move' | 'rotate', e: Partial<EditEvent>) {
        const { x, y, rotate, scaleX, scaleY } = this.transform
        if (this.#onEdit) {
            this.#onEdit({
                type,
                width: this.width,
                height: this.height,
                x: x,
                y: y,
                rotate: -rotate,
                scaleX: scaleX,
                scaleY: scaleY,
                originStr: this.originStr,
                origin: this.origin,
                ...e
            })
        }
    }
    public get onEdit(): string { return this.getAttribute('onedit')! }
    public set onEdit(fn: (e: EditEvent) => void) { this.#onEdit = fn }
    initHandler() {
        if (this.onEdit && typeof window[this.onEdit as any] === 'function')
            this.#onEdit = window[this.onEdit as any] as any
    }

    // attributeUpdate(attributeName: typeof ATTRIBUTES[number], oldValue: string, newValue: string) {
    //     switch (attributeName) {
    //     }
    // }

    render() {
        if (this.bodyRef && this.tlResizeRef && this.lmidResizeRef &&
            this.blResizeRef && this.rotateRef && this.bmidResizeRef &&
            this.brResizeRef && this.rmidResizeRef && this.tmidResizeRef
        ) {
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
        this.width = newWidth
        this.setOriginCenter()
        if (!this.isResizeByListener)
            this.fixResizePosition(oldWidth, newWidth, this.height, this.height)
        this.render()
    }
    heightUpdate(oldHeight: number, newHeight: number): void {
        this.height = newHeight
        this.setOriginCenter()
        if (!this.isResizeByListener)
            this.fixResizePosition(this.width, this.width, oldHeight, newHeight)
        this.render()
    }

    unmount() {
        this.moveListener.removeListener()
        this.rotateListener.removeListener()
        this.rmidResizeListener.removeListener()
        this.bmidResizeListener.removeListener()
        this.brResizeListener.removeListener()
    }
}

// setTimeout(() => {
//     const edit = document.querySelector('div[is="my-editbox"]')!
//     edit.setAttribute('x', '100')

// }, 1000);

customElements.define('my-editbox', EditBox, { extends: 'div' })
