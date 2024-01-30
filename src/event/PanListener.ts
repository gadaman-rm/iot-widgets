export class PanListener<Init = undefined>{
    #container: HTMLElement
    active: boolean
    init?: Init
    #onPanStart?: (e: MouseEvent, initFn: (init: Init) => Init) => void
    #onPanMove?: (e: MouseEvent, init?: Init) => void
    #onPanEnd?: (e: MouseEvent, init?: Init) => void
    #onPanLeave?: (e: MouseEvent, init?: Init) => void
    constructor(container?: HTMLElement) {
        this.active = false
        this.#container = container ? container : document as any
        this.#container.addEventListener('mousedown', this.#start)
        this.#container.addEventListener('mousemove', this.#move)
        this.#container.addEventListener('mouseup', this.#end)
        this.#container.addEventListener('mouseleave', this.#leave)
    }

    public set onPanStart(onPanStart : (e: MouseEvent, initFn: (init: Init) => Init) => void) {
        this.#onPanStart = onPanStart
    }

    public set onPanMove(onPanMove : (e: MouseEvent, init?: Init) => void) {
        this.#onPanMove = onPanMove
    }

    public set onPanEnd(onPanEnd : (e: MouseEvent, init?: Init) => void) {
        this.#onPanEnd = onPanEnd
    }

    public set onPanLeave(onPanLeave : (e: MouseEvent, init?: Init) => void) {
        this.#onPanLeave = onPanLeave
    }
    
    #start = (e: MouseEvent, init?: Init) => {
        if(e.button === 1 && !this.active) {
            this.active = true
            this.init = init
            if (this.#onPanStart) this.#onPanStart(e, (init) => this.init = init)
        }
    }
    #move = (e: MouseEvent) => {
        if (this.active) {
            if (this.#onPanMove) this.#onPanMove(e, this.init)
        }
    }
    #end = (e: MouseEvent) => {
        if (e.button === 1 && this.active) {
            this.active = false
            if (this.#onPanEnd) this.#onPanEnd(e, this.init)
        }
    }
    #leave = (e: MouseEvent) => {
        if (e.button === 1 && this.active) {
            // this.active = false
            if (this.#onPanLeave) this.#onPanLeave(e, this.init)
        }
    }
    removeEvent = () => {
        this.#container.removeEventListener('mousedown', this.#start)
        this.#container.removeEventListener('mousemove', this.#move)
        this.#container.removeEventListener('mouseup', this.#end)
        this.#container.removeEventListener('mouseleave', this.#leave)
    }
}
