export interface Point { x: number, y: number }
export function point(e: MouseEvent): Point
export function point(value: [number, number]): Point
export function point(value: Point): Point
export function point(x: number, y: number): Point
export function point() {
    return arguments.length === 1 ?
        arguments[0].hasOwnProperty('clientX') ?
            Object.freeze({ x: arguments[0].clientX, y: arguments[0].clientY })
            :
            Array.isArray(arguments[0]) ?
                Object.freeze({ x: arguments[0][0], y: arguments[0][1] })
                :
                Object.freeze({ x: arguments[0].x, y: arguments[0].y })
        :
        Object.freeze({ x: arguments[0], y: arguments[1] })
}
export const zeroAjsPoint = (point: Point) => {
    const NEAR_ZERO = 1e-10

    return Object.freeze({
        x: Math.abs(point.x) < NEAR_ZERO ? 0 : point.x,
        y: Math.abs(point.y) < NEAR_ZERO ? 0 : point.y,
    })
}
export enum CmpPoint {
    LESS = -1,
    EQUAL = 0,
    MORE = 1,
    OTHER = 2,
}
export const cmpPoint = (p1: Point, p2: Point) => (p1.x === p2.x && p1.y === p2.y) ?
    CmpPoint.EQUAL : (p1.x > p2.x && p1.y > p2.y) ?
        CmpPoint.MORE : (p1.x < p2.x && p1.y < p2.y) ?
            CmpPoint.LESS : CmpPoint.OTHER
export const roundPoint = (point: Point) => Object.freeze({ x: Math.round(point.x), y: Math.round(point.y) })
export const absPoint = (point: Point) => Object.freeze({ x: Math.abs(point.x), y: Math.abs(point.y) })
export const addPoint = (p2: Point, p1: Point) => Object.freeze({ x: p2.x + p1.x, y: p2.y + p1.y })
export const subPoint = (p2: Point, p1: Point) => Object.freeze({ x: p2.x - p1.x, y: p2.y - p1.y })
export const divPoint = (p2: Point, p1: Point) => Object.freeze({ x: p2.x / p1.x, y: p2.y / p1.y })
export const mulPoint = (p2: Point, p1: Point) => Object.freeze({ x: p2.x * p1.x, y: p2.y * p1.y })
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