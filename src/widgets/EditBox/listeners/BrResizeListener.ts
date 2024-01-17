import { DragListener } from "../../../event/event"
import { distancePointFromLine } from "../../../math/geometry"
import { TransformedBox, toTransformBox } from "../../../math/matrix"
import { point, roundPoint, subPoint } from "../../../math/point"
import { EditBox } from "../EditBox"

export class BrResizeListener {
    dragListener: DragListener<TransformedBox>
    edListener: EditBox
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox) {
        this.dragListener = new DragListener<TransformedBox>(svgElement as any)
        this.edListener = editBoxListener

        this.dragListener.onDragStart = (_e, initFn) => {
            this.edListener.isResizeByListener = true
            const { x, y, rotate } = this.edListener.transform
            const initTransformBox = toTransformBox(x, y, this.edListener.width, this.edListener.height, rotate)
            initFn(initTransformBox)
        }

        this.dragListener.onDragMove = (e, iBox) => {
            if (iBox) {
                const currentMouseCoord = point(e.clientX, e.clientY)
                const { x, y, rotate } = this.edListener.transform

                const box = toTransformBox(x, y, this.edListener.width, this.edListener.height, rotate)
                let newWidth = distancePointFromLine(currentMouseCoord, box.tl, box.bl)
                let newHeight = distancePointFromLine(currentMouseCoord, box.tr, box.tl)
                const nBox = toTransformBox(x, y, newWidth, newHeight, rotate)
                
                if (newWidth > 10 && newHeight > 10) {
                    this.fixResizePosition(x, y, iBox, nBox)
                    this.edListener.setAttribute('width', newWidth.toString())
                    this.edListener.setAttribute('height', newHeight.toString())

                    if(this.edListener.editId) {
                        const item = document.getElementById(this.edListener.editId)!
                        item.setAttribute('width', newWidth.toString())
                        item.setAttribute('height', newHeight.toString())
                    }
                }
            }
        }

        this.dragListener.onDragEnd = () => {
            this.edListener.isResizeByListener = false
        }
    }

    fixResizePosition(x: number, y: number, initTransformBox: TransformedBox, newTransformBox: TransformedBox) {
        const dTl = subPoint(newTransformBox.tl, initTransformBox.tl)
        const newPosition = roundPoint(subPoint(point(x, y), dTl))
        this.edListener.setAttribute('x', newPosition.x.toString())
        this.edListener.setAttribute('y', newPosition.y.toString())
        if(this.edListener.editId) {
            const item = document.getElementById(this.edListener.editId)!
            item.setAttribute('x', x.toString())
            item.setAttribute('y', y.toString())
        }
    }

    removeListener() {
        this.dragListener.removeEvent()
    }
}
