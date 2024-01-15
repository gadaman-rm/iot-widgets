export interface Point { x: number, y: number }
export interface TransformedBox {
    tl: Point,
    tr: Point,
    br: Point,
    bl: Point,
    aabox: {
        x: number,
        y: number,
        width: number,
        height: number
    }
}
export function point(value: [number, number]): Point
export function point(value: Point): Point
export function point(x: number, y: number): Point
export function point() {
    return arguments.length === 1 ?
        Array.isArray(arguments[0]) ? Object.freeze({ x: arguments[0][0], y: arguments[0][1] })
            : Object.freeze({ x: arguments[0].x, y: arguments[0].y })
        :
        Object.freeze({ x: arguments[0], y: arguments[1] })
}

export const rotatePoint = (point: Point, angle: number, origin: Point) => {
    const radians = (Math.PI / 180) * angle
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)

    return Object.freeze({
        x: cos * (point.x - origin.x) + sin * (point.y - origin.y) + origin.x,
        y: cos * (point.y - origin.y) - sin * (point.x - origin.x) + origin.y
    })
}

export const rotatePoints = (points: Point[], angle: number, origin: Point) => {
    return points.map(point => rotatePoint(point, angle, origin))
}

export const toTransformBox = (
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number = 0,
    origin?: Point,
) => {
    const org = origin ? origin : point(x + (width / 2), y + (height / 2))
    const [tl, tr, br, bl] = rotatePoints([
        point(x, y),
        point(x + width, y),
        point(x + width, y + height),
        point(x, y + height)
    ], angle, org)

    const minx = Math.min(tl.x, tr.x, bl.x, br.x)
    const maxx = Math.max(tl.x, tr.x, bl.x, br.x)
    const miny = Math.min(tl.y, tr.y, bl.y, br.y)
    const maxy = Math.max(tl.y, tr.y, bl.y, br.y)

    return {
        tl,
        tr,
        br,
        bl,
        aabox: {
            x: minx,
            y: miny,
            width: maxx - minx,
            height: maxy - miny
        }
    }
}


export interface LogPointStyle {
    labelOffsetX?: number,
    labelOffsetY?: number,
}

const logPoint = (
    point: Point,
    label: string,
    style?: LogPointStyle,
    showLabel: boolean = true,
) => {
    const pointSize = 15

    let isPoint = document.getElementById(label.toLowerCase()) as HTMLDivElement
    const pointRef = isPoint ? isPoint : document.createElement('div')
    pointRef.setAttribute('id', label.toLowerCase())
    pointRef.style.position = 'absolute'
    pointRef.style.width = `${pointSize}px`
    pointRef.style.height = `${pointSize}px`
    pointRef.style.insetInlineStart = `0px`
    pointRef.style.insetBlockStart = `0px`
    pointRef.style.borderRadius = `${pointSize}px`

    pointRef.style.transform = `translate(${point.x - (pointSize / 2)}px, ${point.y - (pointSize / 2)}px)`
    pointRef.style.backgroundColor = 'green'


    if (showLabel === true) {
        let isLabel = document.getElementById("t-" + label.toLowerCase()) as SVGTextElement | null

        const labelRef = isLabel ? isLabel : document.createElement('div')
        labelRef.setAttribute('id', "t-" + label.toLowerCase())
        labelRef.style.position = 'absolute'
        labelRef.style.insetInlineStart = `0px`
        labelRef.style.insetBlockStart = `0px`
        labelRef.style.transform = `translate(${
            point.x + pointSize + (style?.labelOffsetX || 0)
        }px, ${
            point.y + pointSize + (style?.labelOffsetY || 0)
        }px)`
        labelRef.style.color = 'green'
        labelRef.innerHTML = `${label}{${point.x}, ${point.y}}`
        document.body.appendChild(labelRef)
    }

    document.body.appendChild(pointRef)
}

export const logInfo = (
    data: {
        points?: {
            point: Point
            label: string
            color?: string
            showLabel?: boolean
        }[]
        TransformedBox?: {
            points: Omit<TransformedBox, 'aabox' | 'cen'>
            color?: string
            prefix?: string
            showLabel?: boolean
        }[]
        ,
    }
) => {
    if (data.points)
        data.points.forEach(item => {
            logPoint(item.point, item.label, { labelOffsetX: -8, labelOffsetY: -8 }, item.showLabel)
        })
    if (data.TransformedBox)
        data.TransformedBox.forEach(item => {
            const currentResizelogStyle: LogPointStyle = { labelOffsetX: -8, labelOffsetY: -8 }
            logPoint(item.points.tl, `${item.prefix || ''}tl`, currentResizelogStyle, item.showLabel)
            logPoint(item.points.tr, `${item.prefix || ''}tr`, currentResizelogStyle)
            logPoint(item.points.bl, `${item.prefix || ''}bl`, currentResizelogStyle, item.showLabel)
            logPoint(item.points.br, `${item.prefix || ''}br`, currentResizelogStyle, item.showLabel)
        })
}