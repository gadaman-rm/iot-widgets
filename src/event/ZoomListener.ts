export class ZoomListener {
    active: boolean
    #onZoom?: (e: WheelEvent) => void
    constructor() {
        this.active = false
        document.addEventListener('wheel', this.#wheel, { passive: false })
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
        document.removeEventListener('wheel', this.#wheel)
    }
}
