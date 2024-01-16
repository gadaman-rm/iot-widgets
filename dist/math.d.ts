import { V4Options } from 'uuid';

export declare const absPoint: (point: Point) => Readonly<{
    x: number;
    y: number;
}>;

export declare const addPoint: (p2: Point, p1: Point) => Readonly<{
    x: number;
    y: number;
}>;

export declare enum CmpPoint {
    LESS = -1,
    EQUAL = 0,
    MORE = 1,
    OTHER = 2
}

export declare const cmpPoint: (p1: Point, p2: Point) => CmpPoint;

export declare const distancePointFromLine: (p: Point, ls: Point, le: Point) => number;

export declare const divPoint: (p2: Point, p1: Point) => Readonly<{
    x: number;
    y: number;
}>;

/**
 * See if the given transformlist includes a non-indentity matrix transform.
 * @function module:math.hasMatrixTransform
 * @param {SVGTransformList} [tlist] - The transformlist to check
 * @returns {boolean} Whether or not a matrix transform was found
 */
export declare const hasMatrixTransform: (tlist: SVGTransformList) => boolean;

/**
 * Helper function to check if the matrix performs no actual transform
 * (i.e. exists for identity purposes).
 * @function module:math.isIdentity
 * @param {DOMMatrix} m - The matrix object to check
 * @returns {boolean} Indicates whether or not the matrix is 1,0,0,1,0,0
 */
export declare const isIdentity: (m: DOMMatrix) => boolean;

export declare type LineEquation = {
    m: number;
    c: number;
};

export declare const lineEquation: (p1: Point, p2: Point) => LineEquation;

export declare const linesDistance: (l1: LineEquation, l2: LineEquation) => number;

/**
 * This function tries to return a `DOMMatrix` that is the multiplication `m1 * m2`.
 * We also round to zero when it's near zero.
 * @function module:math.matrixMultiply
 * @param {...DOMMatrix} args - Matrix objects to multiply
 * @returns {DOMMatrix} The matrix object resulting from the calculation
 */
export declare const matrixMultiply: (...args: DOMMatrix[]) => DOMMatrix;

export declare const mulPoint: (p2: Point, p1: Point) => Readonly<{
    x: number;
    y: number;
}>;

export declare interface Point {
    x: number;
    y: number;
}

export declare function point(value: [number, number]): Point;

export declare function point(value: Point): Point;

export declare function point(x: number, y: number): Point;

export declare const pxToREM: (px: number) => number;

export declare const pxToVH: (px: number) => number;

export declare const pxToVW: (px: number) => number;

export declare const random: (min?: number, max?: number) => number;

export declare const randomId: (<T extends ArrayLike<number>>(options: V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: V4Options | undefined) => string);

export declare const randomItem: <T>(list: T[]) => T;

/**
 * Check if two rectangles (BBoxes objects) intersect each other.
 * @function module:math.rectsIntersect
 * @param {SVGRect} r1 - The first BBox-like object
 * @param {SVGRect} r2 - The second BBox-like object
 * @returns {boolean} True if rectangles intersect
 */
export declare const rectsIntersect: (r1: SVGRect, r2: SVGRect) => boolean;

export declare const reflectPointOverLine: (line: LineEquation, point: Point) => {
    x: number;
    y: number;
};

export declare const remToPX: (rem: number) => number;

export declare const rotatePoint: (point: Point, angle: number, origin: Point) => Readonly<{
    x: number;
    y: number;
}>;

export declare const rotatePoints: (points: Point[], angle: number, origin: Point) => Readonly<{
    x: number;
    y: number;
}>[];

export declare const roundPoint: (point: Point) => Readonly<{
    x: number;
    y: number;
}>;

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
export declare const snapToAngle: (x1: number, y1: number, x2: number, y2: number) => {
    x: number;
    y: number;
    a: number;
};

export declare const subPoint: (p2: Point, p1: Point) => Readonly<{
    x: number;
    y: number;
}>;

export declare const svgInfo: (ref: SVGSVGElement, _props?: '*' | 'width' | 'height' | 'viewBox') => {
    x: number;
    y: number;
    width: number;
    height: number;
    viewBox: string;
    vX: number;
    vY: number;
    vWidth: number;
    vHeight: number;
};

export declare const toTransformBox: (x: number, y: number, width: number, height: number, angle?: number, origin?: Point) => TransformedBox;

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
export declare interface TransformedBox {
    tl: Point;
    tr: Point;
    br: Point;
    bl: Point;
    aabox: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}

/**
 * A (hopefully) quicker function to transform a point by a matrix
 * (this function avoids any DOM calls and just does the math).
 * @function module:math.transformPoint
 * @param {Point} point - Float representing the x coordinate
 * @param {DOMMatrix} m - Matrix object to transform the point with
 * @returns {module:Point} representing the transformed point
 */
export declare const transformPoint: (m: DOMMatrix, p: Point) => Point;

/**
 * Calculate an array of points transformed with an affine matrix
 * @function module:math.transformPoints
 * @param {DOMMatrix} matrix Affine Matrix
 * @param {Point[]} points Array of point
 * @returns {Point[]} Array of point
 */
export declare const transformPoints: (m: DOMMatrix, points: Point[]) => Point[];

export declare function uniqueId(perfix?: string): Generator<string, string>;

export declare const vhToPX: (vh: number) => number;

export declare const vwToPX: (vw: number) => number;

export declare const zeroAjsPoint: (point: Point) => Readonly<{
    x: number;
    y: number;
}>;

export { }
