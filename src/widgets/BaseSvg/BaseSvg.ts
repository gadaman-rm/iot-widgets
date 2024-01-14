export const BASE_SVG_ATTRIBUTES = ['x', 'y', 'width', 'height', 'rotate', 'scalex', 'scaley', 'origin'] as const
export class BaseSvg extends HTMLDivElement {
    root: SVGSVGElement
    constructor(
        template: HTMLTemplateElement, 
        width: number, 
        height: number,
        x=0,
        y=0,
        rotate=0,
        scaleX=1,
        scaleY=1,
        origin = `${width/2} ${height/2}`
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
        this.origin = origin
    }

    #parse_transform(transform: string) {
        let x = 0, y = 0, scaleX = 1, scaleY = 1, rotate =0
        if(transform) {
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
    public get transform() { return this.#parse_transform(this.root.getAttribute('transform')!)}
    public set transform(v : { x?: number, y?: number, scaleX?: number, scaleY?: number, rotate?: number }) {
        const t = { ...this.#parse_transform(this.root.getAttribute('transform')!), ...v }
        this.root.setAttribute(
            'transform',
            `translate(${t.x},${t.y}) rotate(${t.rotate}) scale(${t.scaleX},${t.scaleY})`
        )
    }

    public set x(x: number) { this.transform = { x } }
    public set y(y: number) { this.transform = { y } }
    public set scaleX(scaleX: number) { this.transform = { scaleX } }
    public set scaleY(scaleY: number) { this.transform = { scaleY } }
    public set rotate(rotate: number) { this.transform = { rotate: -rotate } }

    public get width(): number { return this.width }
    public set width(width: string | number) { this.root.setAttribute('width', width.toString()) }

    public get height(): number { return this.height }
    public set height(height: string | number) { this.root.setAttribute('height', height.toString()) }

    public get origin(): { x: number, y: number } { 
        const origin = this.root.getAttribute('transform-origin')!.trim().split(' ')
        const x = +origin[0]
        const y = +origin[1]
        return {x, y}
    }
    public set origin(origin : string) { this.root.setAttribute('transform-origin', origin)}

    attributeUpdate(attributeName: any, oldValue: string, newValue: string) {
        if (attributeName && oldValue && newValue) { }
    }
    attributeChangedCallback(attributeName: typeof BASE_SVG_ATTRIBUTES[number], oldValue: string, newValue: string) {
        switch (attributeName) {
            case 'x':
                this.x = +newValue
                break
            case 'y':
                this.y = +newValue
                break
            case 'width':
                this.width = newValue
                break
            case 'height':
                this.height = newValue
                break
            case 'rotate':
                this.rotate = +newValue
                break
            case 'scalex':
                this.scaleX = +newValue
                break
            case 'scaley':
                this.scaleY = +newValue
                break
            case 'origin':
                this.origin = newValue
                break
            default: this.attributeUpdate(attributeName, oldValue, newValue)
        }
    }

    mount() { }
    connectedCallback() { this.mount() }

    unmount() { }
    disconnectedCallback() { this.unmount() }
}