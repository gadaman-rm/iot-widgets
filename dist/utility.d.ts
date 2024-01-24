export declare const isValue: (value: any) => boolean;

export declare const logInfo: (data: {
    points?: {
        point: Point;
        label: string;
        color?: string;
        showLabel?: boolean;
    }[];
    TransformedBox?: {
        points: Omit<TransformedBox, 'aabox' | 'cen'>;
        color?: string;
        prefix?: string;
        showLabel?: boolean;
    }[];
}) => void;

export declare interface LogPointStyle {
    labelOffsetX?: number;
    labelOffsetY?: number;
    color?: string;
}

declare interface Point {
    x: number;
    y: number;
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
declare interface TransformedBox {
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

export { }
