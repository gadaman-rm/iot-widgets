import { DragListener } from "../../../event/event"
import { distancePointFromLine } from "../../../math/geometry"
import { TransformedBox } from "../../../math/matrix"
import { EditBox } from "../EditBox"

export class RmidResizeListener {
  dragListener: DragListener<TransformedBox>
  edListener: EditBox
  constructor(svgElement: SVGRectElement, editBoxListener: EditBox) {
    this.edListener = editBoxListener
    this.dragListener = new DragListener<TransformedBox>(svgElement)

    this.dragListener.onDragStart = (e) => {
      const { initFn } = e.param
      this.edListener.isResizeByListener = true
      const initTransformBox = this.edListener.toTransformBox({})
      initFn(initTransformBox)
      this.edListener.editStartEmit("rmid-resize")
    }

    this.dragListener.onDragMove = (e) => {
      const { init: iBox } = e.param
      if (iBox) {
        const currentMouseCoord =
          this.edListener.svgContainer?.mouseCoordInContainer(e)
        if (!currentMouseCoord)
          throw new Error("EditBox svgContainer property is null")
        const box = this.edListener.toTransformBox({})
        let newWidth = distancePointFromLine(currentMouseCoord, box.tl, box.bl)
        const nBox = this.edListener.toTransformBox({ width: newWidth })
        if (newWidth > 10) {
          const newPosition = this.edListener.fixResizePositionInZoomAndPan(
            iBox,
            nBox,
          )
          this.edListener.setAttribute("x", newPosition.x.toString())
          this.edListener.setAttribute("y", newPosition.y.toString())
          this.edListener.setAttribute("width", newWidth.toString())
          this.edListener.editEmit("rmid-resize", {
            width: newWidth,
            x: newPosition.x,
            y: newPosition.y,
          })
        }
      }
    }

    this.dragListener.onDragEnd = () => {
      this.edListener.isResizeByListener = false
      this.edListener.editEndEmit("rmid-resize")
    }
  }

  removeListener() {
    this.dragListener.removeEvent()
  }
}
