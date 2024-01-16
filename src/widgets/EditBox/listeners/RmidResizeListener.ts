import { DragListener } from "../../../event/event"
import { distancePointFromLine } from "../../../math/geometry"
import { TransformedBox, toTransformBox } from "../../../math/matrix"
import { point, roundPoint, subPoint } from "../../../math/point"
import { EditBox } from "../EditBox"

export class RmidResizeListener {
    dragListener: DragListener<TransformedBox>
    edListener: EditBox
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox) {
        this.dragListener = new DragListener<TransformedBox>(svgElement as any)
        this.edListener = editBoxListener

        this.dragListener.onDragStart = (_e, initFn) => {
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
                const nBox = toTransformBox(x, y, newWidth, this.edListener.height, rotate)
                this.fixResizePosition(x, y, iBox, nBox)

                if (newWidth > 10) {

                    this.edListener.setAttribute('width', newWidth.toString())
                }
            }
        }
    }

    fixResizePosition(x: number, y: number, initTransformBox: TransformedBox, newTransformBox: TransformedBox) {
        const dTl = subPoint(newTransformBox.tl, initTransformBox.tl)
        const newPosition = roundPoint(subPoint(point(x, y), dTl))
        this.edListener.setAttribute('x', newPosition.x.toString())
        this.edListener.setAttribute('y', newPosition.y.toString())
    }

    removeListener() {
        this.dragListener.removeEvent()
    }
}
