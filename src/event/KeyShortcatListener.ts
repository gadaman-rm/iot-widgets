export class KeyShortcatListener {
    keyCode: string
    #container: HTMLElement
    #onKeyDown?: (e: KeyboardEvent) => void
    #onKeyUp?: (e: KeyboardEvent) => void
    constructor(keyCode: string, container?: HTMLElement) {
        this.keyCode = keyCode
        this.#container = container ? container : document as any
        this.#container.addEventListener('keydown', this.#keyDown)
        this.#container.addEventListener('keyup', this.#keyUp)
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
        this.#container.removeEventListener('keydown', this.#keyDown)
        this.#container.removeEventListener('keyup', this.#keyUp)
    }
}
