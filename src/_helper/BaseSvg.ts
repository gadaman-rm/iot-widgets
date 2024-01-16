export const BASE_SVG_ATTRIBUTES = ['x', 'y', 'width', 'height', 'rotate', 'scalex', 'scaley', 'origin'] as const
export class BaseSvg extends HTMLDivElement {
    root: SVGSVGElement
    constructor(
        template: HTMLTemplateElement,
        width?: number,
        height?: number,
        x = 0,
        y = 0,
        rotate = 0,
        origin?: string,
        scaleX = 1,
        scaleY = 1,
    ) {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.root = this.shadowRoot!.querySelector('svg')!
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.rotate = rotate
        this.scaleX = scaleX
        this.scaleY = scaleY
        const originStr = origin ? origin : (this.width && this.height) ? `${this.width / 2} ${this.height / 2}` : '0 0'
        this.origin = originStr
        this.transform = { x, y, scaleX, scaleY, rotate }

        if(this.width !== undefined) this.setAttribute('width', this.width.toString())
        if(this.height !== undefined) this.setAttribute('height', this.height.toString())
        if(x !== undefined) this.setAttribute('x', x.toString())
        if(y !== undefined) this.setAttribute('y', y.toString())
        if(rotate !== undefined) this.setAttribute('rotate', rotate.toString())
        if(scaleX !== undefined) this.setAttribute('scaleX', scaleX.toString())
        if(scaleY !== undefined) this.setAttribute('scaleY', scaleY.toString())
        if(this.origin !== undefined) this.setAttribute('origin', originStr)
    }

    #parse_transform(transform: string) {
        let x = 0, y = 0, scaleX = 1, scaleY = 1, rotate = 0
        if (transform) {
            const translate = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(transform)!
            const scale = /scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(transform)!
            rotate = +/rotate\(\s*([^\s,)]+)/.exec(transform)![1]
            x = +translate[1]
            y = +translate[2]
            scaleX = +scale[1]
            scaleY = +scale[2]
        }
        return { x, y, scaleX, scaleY, rotate }
    }

    public get transform(): { x: number, y: number, scaleX: number, scaleY: number, rotate: number } {
        return this.#parse_transform(this.root.getAttribute('transform')!)
    }
    public set transform(v: { x?: number, y?: number, scaleX?: number, scaleY?: number, rotate?: number }) {
        const t = { ...this.#parse_transform(this.root.getAttribute('transform')!), ...v }
        this.root.setAttribute('transform',
            `translate(${t.x},${t.y}) rotate(${t.rotate}) scale(${t.scaleX},${t.scaleY})`)
    }
    public get x(): number { return this.transform.x! }
    public get y(): number { return this.transform.y! }
    public set x(x: number) { this.transform = { x } }
    public set y(y: number) { this.transform = { y } }

    public set scaleX(scaleX: number) { this.transform = { scaleX } }
    public set scaleY(scaleY: number) { this.transform = { scaleY } }
    public set rotate(rotate: number) { this.transform = { rotate: -rotate } }
    public get width(): number { return +this.root.getAttribute('width')! }
    public set width(width: number | undefined) {
        if (width !== undefined) {
            this.root.setAttribute('width', width.toString())
        }
    }
    public get height(): number { return +this.root.getAttribute('height')! }
    public set height(height: number | undefined) {
        if (height !== undefined) this.root.setAttribute('height', height.toString())
    }
    public get origin(): { x: number, y: number } {
        const origin = this.root.getAttribute('transform-origin')?.trim()?.split(' ')!
        const x = +origin[0]
        const y = +origin[1]
        return { x, y }
    }
    public set origin(origin: string) { this.root.setAttribute('transform-origin', origin) }

    setOriginCenter() {
        if (this.width !== undefined && this.height !== undefined) {
            const newOrigin = `${this.width / 2} ${this.height / 2}`
            const oldOrigin = this.root.getAttribute('transform-origin')!
            this.originUpdate(oldOrigin, newOrigin)
        }
    }

    attributeChangedCallback(attributeName: typeof BASE_SVG_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attributeName) {
            case 'x': this.xUpdate(+oldValue, +newValue)
                break
            case 'y': this.yUpdate(+oldValue, +newValue)
                break
            case 'width': this.widthUpdate(+oldValue, +newValue)
                break
            case 'height': this.heightUpdate(+oldValue, +newValue)
                break
            case 'rotate': this.rotateUpdate(+oldValue, +newValue)
                break
            case 'scalex': this.scaleXUpdate(+oldValue, +newValue)
                break
            case 'scaley': this.scaleYUpdate(+oldValue, +newValue)
                break
            case 'origin': this.originUpdate(oldValue, newValue)
                break
            default: this.attributeUpdate(attributeName, oldValue, newValue)
        }
    }
    connectedCallback() { this.mount() }
    disconnectedCallback() { this.unmount() }

    xUpdate(oldX: number, newX: number) { this.x = newX }
    yUpdate(oldY: number, newY: number) { this.y = newY }
    widthUpdate(oldWidth: number, newWidth: number) {
        this.width = newWidth
        this.setOriginCenter()
    }
    heightUpdate(oldHeight: number, newHeight: number) {
        this.height = newHeight
        this.setOriginCenter()
    }
    rotateUpdate(oldRotate: number, newRotate: number) { this.rotate = newRotate }
    scaleXUpdate(oldScaleX: number, newScaleX: number) { this.scaleX = newScaleX }
    scaleYUpdate(oldScaleY: number, newScaleY: number) { this.scaleY = newScaleY }
    originUpdate(oldOrigin: string, newOrigin: string) { this.origin = newOrigin }
    attributeUpdate(attributeName: any, oldValue: string, newValue: string) { }
    mount() { }
    unmount() { }
}
