import { Point } from "./point"

export type LineEquation = { m: number, c: number }
export const lineEquation = (p1: Point, p2: Point): LineEquation => {
    const m = (p2.y - p1.y) / (p2.x - p1.x)
    const c = p1.y - m * p1.x
    return { m, c }
}
export const linesDistance = (l1: LineEquation, l2: LineEquation) => {
    return Math.abs(l2.c - l1.c) / Math.sqrt(1 + l1.m ** 2)
}
export const distancePointFromLine = (p: Point, ls: Point, le: Point) => {
    return (
        (le.x - ls.x) * (ls.y - p.y) - (le.y - ls.y) * (ls.x - p.x)
    ) / Math.sqrt((le.x - ls.x) ** 2 + (le.y - ls.y) ** 2)
}
export const reflectPointOverLine = (line: LineEquation, point: Point) => {
    return {
        x: (point.x + line.m * (point.y - line.c)) / (1 + line.m ** 2),
        y: (line.m * point.x - point.y + 2 * line.c) / (1 + line.m ** 2),
    }
}