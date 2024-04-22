export class ZoomListener {
  active: boolean
  #container: HTMLElement | Document
  #onZoom?: (e: WheelEvent) => void
  constructor(container?: HTMLElement | Document) {
    this.active = false
    this.#container = container ? container : document
    this.#container.addEventListener("wheel", this.#wheel as any, {
      passive: false,
    })
  }

  public set onZoom(onZoom: (e: WheelEvent) => void) {
    this.#onZoom = onZoom
  }

  #wheel = (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault()
      this.active = true
    } else {
      this.active = false
    }

    if (this.active) if (this.#onZoom) this.#onZoom(e)
  }

  removeEvent = () => {
    this.#container.removeEventListener("wheel", this.#wheel as any)
  }
}
