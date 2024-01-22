export class KeyShortcatListener {
    keyCode: string
    #onKeyDown?: (e: KeyboardEvent) => void
    #onKeyUp?: (e: KeyboardEvent) => void
    constructor(keyCode: string) {
        this.keyCode = keyCode
        document.addEventListener('keydown', this.#keyDown)
        document.addEventListener('keyup', this.#keyUp)
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
        document.removeEventListener('keydown', this.#keyDown)
        document.removeEventListener('keyup', this.#keyUp)
    }
}
