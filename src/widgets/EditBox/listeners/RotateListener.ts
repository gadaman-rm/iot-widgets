import { DragListener } from "../../../event/event"
import { point } from "../../../math/point"
import { EditBox } from "../EditBox"

export class RotateListener {
  dragListener: DragListener
  edListener: EditBox
  constructor(svgElement: SVGCircleElement, editBoxListener: EditBox) {
    this.edListener = editBoxListener
    this.dragListener = new DragListener(svgElement)

    this.dragListener.onDragStart = () => {
      this.edListener.editStartEmit("rotate")
    }
    this.dragListener.onDragMove = (e) => {
      const currentMouseCoord = this.edListener.mouseCoordInZoomAndPan(e)
      if (!currentMouseCoord)
        throw new Error("EditBox svgContainer property is null")
      const { x, y } = this.edListener

      const editBoxCenter = point(
        x + this.edListener.width / 2,
        y + this.edListener.height / 2,
      )
      const R =
        Math.atan2(
          currentMouseCoord.y - editBoxCenter.y,
          currentMouseCoord.x - editBoxCenter.x,
        ) *
        (180 / Math.PI)
      const initR =
        Math.atan2(
          y - editBoxCenter.y,
          x + this.edListener.width - editBoxCenter.x,
        ) *
        (180 / Math.PI)
      const rotate = -Math.floor(R - initR)

      this.edListener.rotate = rotate
      this.edListener.editEmit("rotate", { rotate })
    }

    this.dragListener.onDragEnd = () => {
      this.edListener.editEndEmit("rotate")
    }
  }

  removeListener() {
    this.dragListener.removeEvent()
  }
}
