import { DragListener } from "../../../event/event"
import { point } from "../../../math/point"
import { EditBox } from "../EditBox"

export class RotateListener {
    dragListener: DragListener
    edListener: EditBox
    constructor(svgElement: SVGCircleElement, editBoxListener: EditBox) {
        this.dragListener = new DragListener(svgElement as any)
        this.edListener = editBoxListener

        this.dragListener.onDragMove = (e) => {
                const currentMouseCoord = point(e.clientX, e.clientY)
                const { x, y } = this.edListener.transform

                const editBoxCenter = point(x + this.edListener.width / 2, y + this.edListener.height / 2)
                const R = Math.atan2(currentMouseCoord.y - editBoxCenter.y, currentMouseCoord.x - editBoxCenter.x) * (180 / Math.PI)
                const initR = Math.atan2(y - editBoxCenter.y, x + this.edListener.width - editBoxCenter.x) * (180 / Math.PI)
                const rotate = Math.floor((R - initR) * -1)

                this.edListener.setAttribute('rotate', rotate.toString())
                if(this.edListener.editId) {
                    const item = document.getElementById(this.edListener.editId)!
                    item.setAttribute('rotate', rotate.toString())
                }
        }
    }

    removeListener() {
        this.dragListener.removeEvent()
    }
}
