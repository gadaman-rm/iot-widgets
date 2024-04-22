export class KeyShortcatListener {
  keyCode: string
  #container: HTMLElement | Document
  #onKeyDown?: (e: KeyboardEvent) => void
  #onKeyUp?: (e: KeyboardEvent) => void
  constructor(keyCode: string, container?: HTMLElement | Document) {
    this.keyCode = keyCode
    this.#container = container ? container : document
    this.#container.addEventListener("keydown", this.#keyDown as any)
    this.#container.addEventListener("keyup", this.#keyUp as any)
  }

  public set onKeyDown(onKeyDown: (e: KeyboardEvent) => void) {
    this.#onKeyDown = onKeyDown
  }

  public set onKeyUp(onKeyUp: (e: KeyboardEvent) => void) {
    this.#onKeyUp = onKeyUp
  }

  #keyDown = (e: KeyboardEvent) => {
    if (e.code === this.keyCode) if (this.#onKeyDown) this.#onKeyDown(e)
  }

  #keyUp = (e: KeyboardEvent) => {
    if (e.code === this.keyCode) if (this.#onKeyUp) this.#onKeyUp(e)
  }

  removeEvent = () => {
    this.#container.removeEventListener("keydown", this.#keyDown as any)
    this.#container.removeEventListener("keyup", this.#keyUp as any)
  }
}
