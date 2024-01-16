export class DragListener<Init = undefined>{
    element: HTMLElement
    active: boolean
    init?: Init
    #onDragStart?: (e: MouseEvent, initFn: (init: Init) => Init) => void
    #onDragMove?: (e: MouseEvent, init?: Init) => void
    #onDragEnd?: (e: MouseEvent, init?: Init) => void
    constructor(element: HTMLElement) {
        this.active = false
        this.element = element
        this.element.addEventListener('mousedown', this.#start)
        document.addEventListener('mousemove', this.#move)
        document.addEventListener('mouseup', this.#end)
    }

    public set onDragStart(onDragStart : (e: MouseEvent, initFn: (init: Init) => Init) => void) {
        this.#onDragStart = onDragStart
    }

    public set onDragMove(onDragMove : (e: MouseEvent, init?: Init) => void) {
        this.#onDragMove = onDragMove
    }

    public set onDragEnd(onDragEnd : (e: MouseEvent, init?: Init) => void) {
        this.#onDragEnd = onDragEnd
    }
    
    #start = (e: MouseEvent, init?: Init) => {
        this.active = true
        this.init = init
        if (this.#onDragStart) this.#onDragStart(e, (init) => this.init = init)
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
    removeEvent = () => {
        this.element.removeEventListener('mousedown', this.#start)
        document.removeEventListener('mousemove', this.#move)
        document.removeEventListener('mouseup', this.#end)
    }
}
