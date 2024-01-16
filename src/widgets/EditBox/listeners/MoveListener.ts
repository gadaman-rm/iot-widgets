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
            initFn({ x, y, clientX: e.clientX, clientY: e.clientY })
        }

        this.dragListener.onDragMove = (e, init) => {
            if(init) {
                const initMouseCoord = point(init.clientX, init.clientY)
                const currentMouseCoord = point(e.clientX, e.clientY)

                const dx = initMouseCoord.x - init.x
                const dy = initMouseCoord.y - init.y
    
                const x = currentMouseCoord.x - dx
                const y = currentMouseCoord.y - dy

                this.edListener.setAttribute('x', x.toString())
                this.edListener.setAttribute('y', y.toString())
            }
        }
    }

    removeListener() {
        this.dragListener.removeEvent()
    }
}
