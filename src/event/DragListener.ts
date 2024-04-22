export interface DragMouseEvent<Init = undefined> extends MouseEvent {
  param: {
    initFn: (init: Init) => Init
    init?: Init
  }
}

export class DragListener<Init = undefined> {
  #container: HTMLElement | Document
  element: HTMLElement | SVGElement
  active: boolean
  init?: Init
  #onDragStart?: (e: DragMouseEvent<Init>) => void
  #onDragMove?: (e: DragMouseEvent<Init>) => void
  #onDragEnd?: (e: DragMouseEvent<Init>) => void
  #onDragLeave?: (e: DragMouseEvent<Init>) => void
  constructor(
    element: HTMLElement | SVGElement,
    container?: HTMLElement | Document,
  ) {
    this.active = false
    this.element = element
    this.#container = container ? container : document
    this.element.addEventListener("mousedown", this.#start as any)
    this.#container.addEventListener("mousemove", this.#move as any)
    this.#container.addEventListener("mouseup", this.#end as any)
    this.#container.addEventListener("mouseleave", this.#leave as any)
  }

  public set onDragStart(onDragStart: (e: DragMouseEvent<Init>) => void) {
    this.#onDragStart = onDragStart
  }

  public set onDragMove(onDragMove: (e: DragMouseEvent<Init>) => void) {
    this.#onDragMove = onDragMove
  }

  public set onDragEnd(onDragEnd: (e: DragMouseEvent<Init>) => void) {
    this.#onDragEnd = onDragEnd
  }

  public set onDragLeave(onDragLeave: (e: DragMouseEvent<Init>) => void) {
    this.#onDragLeave = onDragLeave
  }

  #start = (e: DragMouseEvent<Init>) => {
    if (!this.active) {
      this.active = true
      e.param = { init: this.init, initFn: (init: Init) => (this.init = init) }
      if (this.#onDragStart) this.#onDragStart(e)
    }
  }
  #move = (e: DragMouseEvent<Init>) => {
    if (this.active) {
      e.param = { init: this.init, initFn: (init: Init) => (this.init = init) }
      if (this.#onDragMove) this.#onDragMove(e)
    }
  }
  #end = (e: DragMouseEvent<Init>) => {
    if (this.active) {
      this.active = false
      e.param = { init: this.init, initFn: (init: Init) => (this.init = init) }
      if (this.#onDragEnd) this.#onDragEnd(e)
    }
  }
  #leave = (e: DragMouseEvent<Init>) => {
    if (this.active) {
      // this.active = false
      e.param = { init: this.init, initFn: (init: Init) => (this.init = init) }
      if (this.#onDragLeave) this.#onDragLeave(e)
    }
  }
  removeEvent = () => {
    this.element.removeEventListener("mousedown", this.#start as any)
    this.#container.removeEventListener("mousemove", this.#move as any)
    this.#container.removeEventListener("mouseup", this.#end as any)
    this.#container.removeEventListener("mouseleave", this.#leave as any)
  }
}
