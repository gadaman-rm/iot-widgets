export interface PanMouseEvent<Init = undefined> extends MouseEvent {
  param: {
    initFn: (init: Init) => Init
    init?: Init
  }
}

export class PanListener<Init = undefined> {
  #container: HTMLElement | Document
  active: boolean
  init?: Init
  #onPanStart?: (e: PanMouseEvent<Init>) => void
  #onPanMove?: (e: PanMouseEvent<Init>) => void
  #onPanEnd?: (e: PanMouseEvent<Init>) => void
  #onPanLeave?: (e: PanMouseEvent<Init>) => void
  constructor(container?: HTMLElement | Document) {
    this.active = false
    this.#container = container ? container : document
    this.#container.addEventListener("mousedown", this.#start as any)
    this.#container.addEventListener("mousemove", this.#move as any)
    this.#container.addEventListener("mouseup", this.#end as any)
    this.#container.addEventListener("mouseleave", this.#leave as any)
  }

  public set onPanStart(onPanStart: (e: PanMouseEvent<Init>) => void) {
    this.#onPanStart = onPanStart
  }

  public set onPanMove(onPanMove: (e: PanMouseEvent<Init>) => void) {
    this.#onPanMove = onPanMove
  }

  public set onPanEnd(onPanEnd: (e: PanMouseEvent<Init>) => void) {
    this.#onPanEnd = onPanEnd
  }

  public set onPanLeave(onPanLeave: (e: PanMouseEvent<Init>) => void) {
    this.#onPanLeave = onPanLeave
  }

  #start = (e: PanMouseEvent<Init>) => {
    if (e.button === 1 && !this.active) {
      this.active = true
      e.param = { init: this.init, initFn: (init: Init) => (this.init = init) }
      if (this.#onPanStart) this.#onPanStart(e)
    }
  }
  #move = (e: PanMouseEvent<Init>) => {
    if (this.active) {
      e.param = { init: this.init, initFn: (init: Init) => (this.init = init) }
      if (this.#onPanMove) this.#onPanMove(e)
    }
  }
  #end = (e: PanMouseEvent<Init>) => {
    if (e.button === 1 && this.active) {
      this.active = false
      e.param = { init: this.init, initFn: (init: Init) => (this.init = init) }
      if (this.#onPanEnd) this.#onPanEnd(e)
    }
  }
  #leave = (e: PanMouseEvent<Init>) => {
    if (e.button === 1 && this.active) {
      // this.active = false
      if (this.#onPanLeave) this.#onPanLeave(e)
    }
  }
  removeEvent = () => {
    this.#container.removeEventListener("mousedown", this.#start as any)
    this.#container.removeEventListener("mousemove", this.#move as any)
    this.#container.removeEventListener("mouseup", this.#end as any)
    this.#container.removeEventListener("mouseleave", this.#leave as any)
  }
}
