import { DragListener } from "../../../event/event"
import { distancePointFromLine } from "../../../math/geometry"
import { TransformedBox } from "../../../math/matrix"
import { logInfo } from "../../../utility/debug"
import { EditBox } from "../EditBox"

export class RmidResizeListener {
    dragListener: DragListener<TransformedBox>
    edListener: EditBox
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox) {
        this.dragListener = new DragListener<TransformedBox>(svgElement as any)
        this.edListener = editBoxListener

        this.dragListener.onDragStart = (_e, initFn) => {
            this.edListener.isResizeByListener = true
            const initTransformBox = this.edListener.toTransformBoxInZoomAndPan({})
            initFn(initTransformBox)
            logInfo({ TransformedBox: [{ points: initTransformBox, prefix: 'i' }]})
        }

        this.dragListener.onDragMove = (e, iBox) => {
            if (iBox) {
                const currentMouseCoord = this.edListener.mouseCoordInZoomAndPan(e)
                const box = this.edListener.toTransformBoxInZoomAndPan({})
                let newWidth = distancePointFromLine(currentMouseCoord, box.tl, box.bl) 
                const nBox = this.edListener.toTransformBoxInZoomAndPan({ width: newWidth })
                logInfo({ TransformedBox: [{ points: nBox }]})

                if (newWidth > 10) {
                    const newPosition = this.edListener.fixResizePositionInZoomAndPan(iBox, nBox)
                    this.edListener.setAttribute('x', newPosition.x.toString())
                    this.edListener.setAttribute('y', newPosition.y.toString())
                    this.edListener.setAttribute('width', newWidth.toString())
                    this.edListener.onEditEmit('rmid-resize', { width: newWidth, x: newPosition.x, y: newPosition.y })
                }
            }
        }

        this.dragListener.onDragEnd = () => {
            this.edListener.isResizeByListener = false
        }
    }

    removeListener() {
        this.dragListener.removeEvent()
    }
}
