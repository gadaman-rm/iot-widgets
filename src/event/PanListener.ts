export class PanListener<Init = undefined>{
    #container: HTMLElement | Document
    active: boolean
    init?: Init
    #onPanStart?: (e: MouseEvent, initFn: (init: Init) => Init) => void
    #onPanMove?: (e: MouseEvent, init?: Init) => void
    #onPanEnd?: (e: MouseEvent, init?: Init) => void
    #onPanLeave?: (e: MouseEvent, init?: Init) => void
    constructor(container?: HTMLElement | Document) {
        this.active = false
        this.#container = container ? container : document
        this.#container.addEventListener('mousedown', this.#start as any)
        this.#container.addEventListener('mousemove', this.#move as any)
        this.#container.addEventListener('mouseup', this.#end as any)
        this.#container.addEventListener('mouseleave', this.#leave as any)
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
        this.#container.removeEventListener('mousedown', this.#start as any)
        this.#container.removeEventListener('mousemove', this.#move as any)
        this.#container.removeEventListener('mouseup', this.#end as any)
        this.#container.removeEventListener('mouseleave', this.#leave as any)
    }
}
