export class PanListener<Init = undefined>{
    active: boolean
    init?: Init
    #onPanStart?: (e: MouseEvent, initFn: (init: Init) => Init) => void
    #onPanMove?: (e: MouseEvent, init?: Init) => void
    #onPanEnd?: (e: MouseEvent, init?: Init) => void
    #onPanLeave?: (e: MouseEvent, init?: Init) => void
    constructor() {
        this.active = false
        document.addEventListener('mousedown', this.#start)
        document.addEventListener('mousemove', this.#move)
        document.addEventListener('mouseup', this.#end)
        document.addEventListener('mouseleave', this.#leave)
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
            this.active = false
            if (this.#onPanLeave) this.#onPanLeave(e, this.init)
        }
    }
    removeEvent = () => {
        document.removeEventListener('mousedown', this.#start)
        document.removeEventListener('mousemove', this.#move)
        document.removeEventListener('mouseup', this.#end)
        document.removeEventListener('mouseleave', this.#leave)
    }
}
