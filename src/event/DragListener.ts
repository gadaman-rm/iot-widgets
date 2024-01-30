export class DragListener<Init = undefined>{
    #container: HTMLElement
    element: HTMLElement | SVGElement
    active: boolean
    init?: Init
    #onDragStart?: (e: MouseEvent, initFn: (init: Init) => Init) => void
    #onDragMove?: (e: MouseEvent, init?: Init) => void
    #onDragEnd?: (e: MouseEvent, init?: Init) => void
    #onDragLeave?: (e: MouseEvent, init?: Init) => void
    constructor(element: HTMLElement | SVGElement, container?: HTMLElement) {
        this.active = false
        this.element = element
        this.#container = container ? container : document as any
        this.element.addEventListener('mousedown', this.#start as any)
        this.#container.addEventListener('mousemove', this.#move)
        this.#container.addEventListener('mouseup', this.#end)
        this.#container.addEventListener('mouseleave', this.#leave)
    }

    public set onDragStart(onDragStart: (e: MouseEvent, initFn: (init: Init) => Init) => void) {
        this.#onDragStart = onDragStart
    }

    public set onDragMove(onDragMove: (e: MouseEvent, init?: Init) => void) {
        this.#onDragMove = onDragMove
    }

    public set onDragEnd(onDragEnd: (e: MouseEvent, init?: Init) => void) {
        this.#onDragEnd = onDragEnd
    }

    public set onDragLeave(onDragLeave: (e: MouseEvent, init?: Init) => void) {
        this.#onDragLeave = onDragLeave
    }

    #start = (e: MouseEvent) => {
        if (!this.active) {
            this.active = true
            if (this.#onDragStart) this.#onDragStart(e, (init) => this.init = init)
        }
    }
    #move = (e: MouseEvent) => {
        if (this.active) {
            if (this.#onDragMove) this.#onDragMove(e, this.init)
        }
    }
    #end = (e: MouseEvent) => {
        if (this.active) {
            this.active = false
            if (this.#onDragEnd) this.#onDragEnd(e, this.init)
        }
    }
    #leave = (e: MouseEvent) => {
        if (this.active) {
            // this.active = false
            if (this.#onDragLeave) this.#onDragLeave(e, this.init)
        }
    }
    removeEvent = () => {
        this.element.removeEventListener('mousedown', this.#start as any)
        this.#container.removeEventListener('mousemove', this.#move)
        this.#container.removeEventListener('mouseup', this.#end)
        this.#container.removeEventListener('mouseleave', this.#leave)
    }
}
