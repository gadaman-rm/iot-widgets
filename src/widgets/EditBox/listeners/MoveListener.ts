import { DragListener } from "../../../event/event"
import { Point, point } from "../../../math/point"
import { EditBox } from "../EditBox"

interface MouseInit {
  x: number
  y: number
  clientX: number
  clientY: number
}

export class MoveListener {
  #dragListener: DragListener<MouseInit>
  #edListener: EditBox
  constructor(svgElement: SVGRectElement, editBoxListener: EditBox) {
    this.#edListener = editBoxListener
    this.#dragListener = new DragListener<MouseInit>(svgElement)
    this.#initHandler()
  }

  #initHandler() {
    this.#dragListener.onDragStart = (e) => {
      const { initFn } = e.param
      const currentMouseCoord = this.#edListener.mouseCoordInZoomAndPan(e)
      if (!currentMouseCoord)
        throw new Error("EditBox svgContainer property is null")
      initFn({
        ...this.emitMoveStart(currentMouseCoord, point(this.#edListener)),
      })
    }
    this.#dragListener.onDragMove = (e) => {
      const { init } = e.param
      const currentMouseCoord = this.#edListener.mouseCoordInZoomAndPan(e)
      if (!currentMouseCoord)
        throw new Error("EditBox svgContainer property is null")
      if (init) {
        this.emitMove(currentMouseCoord, init)
      }
    }
    this.#dragListener.onDragEnd = (e) => {
      this.emitMoveEnd()
    }
  }
  removeListener() {
    this.#dragListener.removeEvent()
  }

  emitMoveStart = (currentMouseCoord: Point, initXY: Point) => {
    this.#edListener.editStartEmit("move")
    return {
      x: initXY.x,
      y: initXY.y,
      clientX: currentMouseCoord.x,
      clientY: currentMouseCoord.y,
    }
  }
  emitMove = (currentMouseCoord: Point, init: MouseInit) => {
    const initMouseCoord = point(init.clientX, init.clientY)

    const dx = initMouseCoord.x - init.x
    const dy = initMouseCoord.y - init.y

    const x = currentMouseCoord.x - dx
    const y = currentMouseCoord.y - dy

    this.#edListener.setAttribute("x", x.toString())
    this.#edListener.setAttribute("y", y.toString())
    this.#edListener.editEmit("move", { x, y })
  }
  emitMoveEnd = () => {
    this.#edListener.editEndEmit("move")
  }
}
