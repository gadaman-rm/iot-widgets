import { DragListener } from "../../../event/event"
import { distancePointFromLine } from "../../../math/geometry"
import { TransformedBox } from "../../../math/matrix"
import { point, roundPoint, subPoint } from "../../../math/point"
import { EditBox } from "../EditBox"

export class BmidResizeListener {
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
      this.edListener.editStartEmit("bmid-resize")
    }

    this.dragListener.onDragMove = (e) => {
      const { init: iBox } = e.param
      if (iBox) {
        const currentMouseCoord = this.edListener.mouseCoordInZoomAndPan(e)
        if (!currentMouseCoord)
          throw new Error("EditBox svgContainer property is null")
        const box = this.edListener.toTransformBox({})
        let newHeight = distancePointFromLine(currentMouseCoord, box.tr, box.tl)
        const nBox = this.edListener.toTransformBox({ height: newHeight })

        if (newHeight > 10) {
          const newPosition = this.edListener.fixResizePositionInZoomAndPan(
            iBox,
            nBox,
          )
          this.edListener.setAttribute("x", newPosition.x.toString())
          this.edListener.setAttribute("y", newPosition.y.toString())
          this.edListener.setAttribute("height", newHeight.toString())
          this.edListener.editEmit("bmid-resize", {
            height: newHeight,
            x: newPosition.x,
            y: newPosition.y,
          })
        }
      }
    }

    this.dragListener.onDragEnd = () => {
      this.edListener.isResizeByListener = false
      this.edListener.editEndEmit("bmid-resize")
    }
  }

  fixResizePosition(
    x: number,
    y: number,
    initTransformBox: TransformedBox,
    newTransformBox: TransformedBox,
  ) {
    const dTl = subPoint(newTransformBox.tl, initTransformBox.tl)
    const newPosition = roundPoint(subPoint(point(x, y), dTl))
    return newPosition
  }

  removeListener() {
    this.dragListener.removeEvent()
  }
}
