import { DragListener } from "../../../event/event"
import { point } from "../../../math/point"
import { EditBox } from "../EditBox"

interface MouseInit {
    x: number
    y: number
    clientX: number
    clientY: number
}

export class MoveListener {
    dragListener: DragListener<MouseInit>
    edListener: EditBox
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox) {
        this.dragListener = new DragListener<MouseInit>(svgElement as any)
        this.edListener = editBoxListener

        this.dragListener.onDragStart = (e, initFn) => {
            const { x, y } = this.edListener.transform
            const currentMouseCoord = this.edListener.mouseCoordInZoomAndPan(e)
            initFn({ x, y, clientX: currentMouseCoord.x, clientY: currentMouseCoord.y })
        }

        this.dragListener.onDragMove = (e, init) => {
            if(init) {
                const initMouseCoord = point(init.clientX, init.clientY)
                const currentMouseCoord = this.edListener.mouseCoordInZoomAndPan(e)

                const dx = initMouseCoord.x - init.x
                const dy = initMouseCoord.y - init.y
    
                const x = currentMouseCoord.x - dx
                const y = currentMouseCoord.y - dy

                this.edListener.setAttribute('x', x.toString())
                this.edListener.setAttribute('y', y.toString())
                this.edListener.onEditEmit('move', { x, y })
            }
        }
    }

    removeListener() {
        this.dragListener.removeEvent()
    }
}
