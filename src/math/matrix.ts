import { point, Point, rotatePoints } from './point'

/**
 * Mathematical utilities.
 * @module math
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria, 2010 Jeff Schiller
 */

/**
 * @typedef {PlainObject} module:math.AngleCoord45
 * @property {Float} x - The angle-snapped x value
 * @property {Float} y - The angle-snapped y value
 * @property {Integer} a - The angle at which to snap
 */

/**
 * @typedef {PlainObject} module:math.XYObject
 * @property {Float} x
 * @property {Float} y
 */

// Constants
const NEAR_ZERO = 1e-14


/**
 * A (hopefully) quicker function to transform a point by a matrix
 * (this function avoids any DOM calls and just does the math).
 * @function module:math.transformPoint
 * @param {Point} point - Float representing the x coordinate
 * @param {DOMMatrix} m - Matrix object to transform the point with
 * @returns {module:Point} representing the transformed point
 */
export const transformPoint = (m: DOMMatrix, p: Point) =>
    point(m.a * p.x + m.c * p.y + m.e, m.b * p.x + m.d * p.y + m.f)

/**
 * Calculate an array of points transformed with an affine matrix
 * @function module:math.transformPoints
 * @param {DOMMatrix} matrix Affine Matrix
 * @param {Point[]} points Array of point
 * @returns {Point[]} Array of point
 */
export const transformPoints = (m: DOMMatrix, points: Point[]) => {
    return points.map(point => transformPoint(m, point))
}

/**
 * Helper function to check if the matrix performs no actual transform
 * (i.e. exists for identity purposes).
 * @function module:math.isIdentity
 * @param {DOMMatrix} m - The matrix object to check
 * @returns {boolean} Indicates whether or not the matrix is 1,0,0,1,0,0
 */
export const isIdentity = (m: DOMMatrix) => {
    return (
        m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1 && m.e === 0 && m.f === 0
    )
}

/**
 * This function tries to return a `DOMMatrix` that is the multiplication `m1 * m2`.
 * We also round to zero when it's near zero.
 * @function module:math.matrixMultiply
 * @param {...DOMMatrix} args - Matrix objects to multiply
 * @returns {DOMMatrix} The matrix object resulting from the calculation
 */
export const matrixMultiply = (...args: DOMMatrix[]): DOMMatrix => {
    const m = args.reduceRight((prev, m1) => {
        return m1.multiply(prev)
    })

    if (Math.abs(m.a) < NEAR_ZERO) {
        m.a = 0
    }
    if (Math.abs(m.b) < NEAR_ZERO) {
        m.b = 0
    }
    if (Math.abs(m.c) < NEAR_ZERO) {
        m.c = 0
    }
    if (Math.abs(m.d) < NEAR_ZERO) {
        m.d = 0
    }
    if (Math.abs(m.e) < NEAR_ZERO) {
        m.e = 0
    }
    if (Math.abs(m.f) < NEAR_ZERO) {
        m.f = 0
    }

    return m
}

/**
 * See if the given transformlist includes a non-indentity matrix transform.
 * @function module:math.hasMatrixTransform
 * @param {SVGTransformList} [tlist] - The transformlist to check
 * @returns {boolean} Whether or not a matrix transform was found
 */
export const hasMatrixTransform = (tlist: SVGTransformList) => {
    if (!tlist) {
        return false
    }
    let num = tlist.numberOfItems
    while (num--) {
        const xform = tlist.getItem(num)
        if (xform.type === 1 && !isIdentity(xform.matrix)) {
            return true
        }
    }
    return false
}

/**
 * @typedef {PlainObject} module:math.TransformedBox An object with the following values
 * @property {module:math.XYObject} tl - The top left coordinate
 * @property {module:math.XYObject} tr - The top right coordinate
 * @property {module:math.XYObject} bl - The bottom left coordinate
 * @property {module:math.XYObject} br - The bottom right coordinate
 * @property {PlainObject} aabox - Object with the following values:
 * @property {Float} aabox.x - Float with the axis-aligned x coordinate
 * @property {Float} aabox.y - Float with the axis-aligned y coordinate
 * @property {Float} aabox.width - Float with the axis-aligned width coordinate
 * @property {Float} aabox.height - Float with the axis-aligned height coordinate
 */
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

/**
 * Returns a 45 degree angle coordinate associated with the two given
 * coordinates.
 * @function module:math.snapToAngle
 * @param {Integer} x1 - First coordinate's x value
 * @param {Integer} y1 - First coordinate's y value
 * @param {Integer} x2 - Second coordinate's x value
 * @param {Integer} y2 - Second coordinate's y value
 * @returns {module:math.AngleCoord45}
 */
export const snapToAngle = (x1: number, y1: number, x2: number, y2: number) => {
    const snap = Math.PI / 4 // 45 degrees
    const dx = x2 - x1
    const dy = y2 - y1
    const angle = Math.atan2(dy, dx)
    const dist = Math.sqrt(dx * dx + dy * dy)
    const snapangle = Math.round(angle / snap) * snap

    return {
        x: x1 + dist * Math.cos(snapangle),
        y: y1 + dist * Math.sin(snapangle),
        a: snapangle
    }
}

/**
 * Check if two rectangles (BBoxes objects) intersect each other.
 * @function module:math.rectsIntersect
 * @param {SVGRect} r1 - The first BBox-like object
 * @param {SVGRect} r2 - The second BBox-like object
 * @returns {boolean} True if rectangles intersect
 */
export const rectsIntersect = (r1: SVGRect, r2: SVGRect) => {
    return (
        r2.x < r1.x + r1.width &&
        r2.x + r2.width > r1.x &&
        r2.y < r1.y + r1.height &&
        r2.y + r2.height > r1.y
    )
}

export const toTransformBox = (
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number = 0,
    origin?: Point,
): TransformedBox => {
    const org = origin ? origin : point(x + (width / 2), y + (height / 2))
    const [tl, tr, br, bl] = rotatePoints([
        point(x, y),
        point(x + width, y),
        point(x + width, y + height),
        point(x, y + height)
    ], -angle, org)

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

export const svgInfo = (
    ref: SVGSVGElement,
    _props: '*' | 'width' | 'height' | 'viewBox' = "*"
) => {
    const svg = ref
    const box = svg.getBBox()
    const viewBox = [box.x, box.y, box.width, box.height].join(" ")
    const vX = box.x
    const vY = box.y
    const vWidth = box.width
    const vHeight = box.height
    const width = svg.width.baseVal.value
    const height = svg.height.baseVal.value
    const x = svg.x.baseVal.value
    const y = svg.y.baseVal.value

    return {
        x,
        y,
        width,
        height,
        viewBox,
        vX,
        vY,
        vWidth,
        vHeight,
    }
}

export class Transform {
    x: number
    y: number
    rotate: number
    scaleX: number
    scaleY: number
    element: HTMLElement

    constructor(element: HTMLElement) {
        this.x = 0
        this.y = 0
        this.scaleX = 1
        this.scaleY = 1
        this.rotate = 0
        this.element = element
        this.#parse(this.element.style.transform)
    }
    
    public get transform(): {x: number, y: number, rotate: number, scaleX: number, scaleY: number } {
        this.#parse(this.element.style.transform)
        return { x: this.x, y: this.y, rotate: this.rotate, scaleX: this.scaleX, scaleY: this.scaleY }
    }
    public set transform(transform: string) { this.#parse(transform) }

    #parse(transform: string) {
        if (transform) {
            const transformTrim = transform.replace(/, /g, ',')
            .replace(/px/g, '')
            const translate = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(transformTrim)
            const scale2d = /scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(transformTrim)
            const rotate = /rotate\(\s*([^\s,)]+)/.exec(transformTrim)

            if(translate) {
                this.x = +translate[1]
                this.y = +translate[2]
            }

            if(scale2d) {
                this.scaleX = +scale2d[1]
                this.scaleY = +scale2d[2]
            } else {
                const scale = /scale\(\s*([^\s,)]+)/.exec(transformTrim)
                if(scale) {
                    this.scaleX = +scale[1]
                    this.scaleY = +scale[1]
                }
            }

            if(rotate) {
                this.rotate = +rotate[1]
            }
        }
    }
}