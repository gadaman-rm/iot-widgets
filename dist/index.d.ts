declare const ATTRIBUTES: readonly ["zero"];

declare const ATTRIBUTES_2: readonly ["zero"];

declare const BASE_SVG_ATTRIBUTES: readonly ["id", "x", "y", "width", "height", "rotate", "scalex", "scaley", "origin"];

declare class BaseSvg extends HTMLDivElement {
    #private;
    root: SVGSVGElement;
    constructor(template: HTMLTemplateElement, id?: string, width?: number, height?: number, x?: number, y?: number, rotate?: number, origin?: string, scaleX?: number, scaleY?: number);
    get id(): string;
    set id(id: string);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get rotate(): number;
    set rotate(rotate: number);
    get scaleX(): number;
    set scaleX(scaleX: number);
    get scaleY(): number;
    set scaleY(scaleY: number);
    get width(): number;
    set width(width: number | undefined);
    get height(): number;
    set height(height: number | undefined);
    get originStr(): string;
    get origin(): {
        x: number;
        y: number;
    };
    set origin(origin: string);
    setOriginCenter(): void;
    fixResizePosition(oldWidth: number, newWidth: number, oldHeight: number, newHeight: number): void;
    attributeChangedCallback(attributeName: typeof BASE_SVG_ATTRIBUTES[number], oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    idUpdate(oldId: string, newId: string): void;
    widthUpdate(oldWidth: number, newWidth: number): void;
    heightUpdate(oldHeight: number, newHeight: number): void;
    xUpdate(oldX: number, newX: number): void;
    yUpdate(oldY: number, newY: number): void;
    rotateUpdate(oldRotate: number, newRotate: number): void;
    scaleXUpdate(oldScaleX: number, newScaleX: number): void;
    scaleYUpdate(oldScaleY: number, newScaleY: number): void;
    originUpdate(oldOrigin: string, newOrigin: string): void;
    attributeUpdate(attributeName: any, oldValue: string, newValue: string): void;
    mount(): void;
    unmount(): void;
}

declare class BmidResizeListener {
    dragListener: DragListener<TransformedBox>;
    edListener: EditBox;
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox);
    fixResizePosition(x: number, y: number, initTransformBox: TransformedBox, newTransformBox: TransformedBox): Readonly<{
        x: number;
        y: number;
    }>;
    removeListener(): void;
}

declare class BrResizeListener {
    dragListener: DragListener<TransformedBox>;
    edListener: EditBox;
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox);
    fixResizePosition(x: number, y: number, initTransformBox: TransformedBox, newTransformBox: TransformedBox): Readonly<{
        x: number;
        y: number;
    }>;
    removeListener(): void;
}

export declare class Circle extends HTMLDivElement {
    constructor();
}

export declare class Container extends HTMLDivElement {
    root: SVGSVGElement;
    main: SVGGElement;
    transform: Transform;
    static get observedAttributes(): readonly ["panx", "pany", "zoom"];
    constructor(pan?: Point, zoom?: number);
    get zoom(): number;
    set zoom(zoom: number);
    get pan(): Point;
    set pan(pan: Point);
    mouseCoordInContainer(e: MouseEvent): {
        x: number;
        y: number;
    };
    zoomUpdate(oldZoom: number, newZoom: number): void;
    panXUpdate(oldPanX: number, newPanX: number): void;
    panYUpdate(oldPanY: number, newPanY: number): void;
    attributeChangedCallback(attributeName: typeof CONTAINER_ATTRIBUTES[number], oldValue: string, newValue: string): void;
}

export declare const CONTAINER_ATTRIBUTES: readonly ["panx", "pany", "zoom"];

declare class DragListener<Init = undefined> {
    #private;
    element: HTMLElement | SVGElement;
    active: boolean;
    init?: Init;
    constructor(element: HTMLElement | SVGElement, container?: HTMLElement);
    set onDragStart(onDragStart: (e: MouseEvent, initFn: (init: Init) => Init) => void);
    set onDragMove(onDragMove: (e: MouseEvent, init?: Init) => void);
    set onDragEnd(onDragEnd: (e: MouseEvent, init?: Init) => void);
    set onDragLeave(onDragLeave: (e: MouseEvent, init?: Init) => void);
    removeEvent: () => void;
}

export declare class EditBox extends BaseSvg {
    #private;
    static observedAttributes: ("x" | "y" | "width" | "height" | "rotate" | "id" | "scalex" | "scaley" | "origin")[];
    controllerSize: number;
    container: Container;
    bodyRef: SVGRectElement;
    rotateRef: SVGCircleElement;
    tlResizeRef: SVGRectElement;
    lmidResizeRef: SVGRectElement;
    blResizeRef: SVGRectElement;
    bmidResizeRef: SVGRectElement;
    brResizeRef: SVGRectElement;
    rmidResizeRef: SVGRectElement;
    tmidResizeRef: SVGRectElement;
    rmidResizeListener: RmidResizeListener;
    bmidResizeListener: BmidResizeListener;
    brResizeListener: BrResizeListener;
    rotateListener: RotateListener;
    moveListener: MoveListener;
    isResizeByListener: boolean;
    constructor(id: string | undefined, container: Container, width?: number, height?: number, x?: number, y?: number, rotate?: number, origin?: string, scaleX?: number, scaleY?: number);
    mouseCoordInZoomAndPan: (e: MouseEvent) => {
        x: number;
        y: number;
    };
    toTransformBox: (box: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }) => {
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
    };
    fixResizePositionInZoomAndPan(initTransformBox: TransformedBox, newTransformBox: TransformedBox): Readonly<{
        x: number;
        y: number;
    }>;
    onEditEmit(type: 'rmid-resize' | 'bmid-resize' | 'br-resize' | 'move' | 'rotate', e: Partial<EditEvent>): void;
    get onEdit(): string;
    set onEdit(fn: (e: EditEvent) => void);
    initHandler(): void;
    render(): void;
    widthUpdate(oldWidth: number, newWidth: number): void;
    heightUpdate(oldHeight: number, newHeight: number): void;
    unmount(): void;
}

export declare type EditEvent = {
    type: 'rmid-resize' | 'bmid-resize' | 'br-resize' | 'move' | 'rotate';
    width: number;
    height: number;
    x: number;
    y: number;
    rotate: number;
    scaleX: number;
    scaleY: number;
    origin: Point;
    originStr: string;
};

export declare class Gauge extends BaseSvg {
    static observedAttributes: ("x" | "y" | "width" | "height" | "rotate" | "id" | "scalex" | "scaley" | "origin" | "zero")[];
    constructor(id?: string, width?: number, height?: number, x?: number, y?: number, rotate?: number, origin?: string, scaleX?: number, scaleY?: number);
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], _oldValue: string, _newValue: string): void;
}

declare interface MouseInit {
    x: number;
    y: number;
    clientX: number;
    clientY: number;
}

declare class MoveListener {
    dragListener: DragListener<MouseInit>;
    edListener: EditBox;
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox);
    removeListener(): void;
}

export declare class MyComponent extends HTMLDivElement {
    #private;
    static get observedAttributes(): string[];
    ageRef: HTMLDivElement;
    constructor();
    get age(): string;
    set age(age: string);
    attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void;
    get onT1Click(): string;
    set onT1Click(fn: (e: MouseEvent) => void);
    initHandler(): void;
    handleT1Click: (e: MouseEvent) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

declare interface Point {
    x: number;
    y: number;
}

declare class RmidResizeListener {
    dragListener: DragListener<TransformedBox>;
    edListener: EditBox;
    constructor(svgElement: SVGRectElement, editBoxListener: EditBox);
    removeListener(): void;
}

declare class RotateListener {
    dragListener: DragListener;
    edListener: EditBox;
    constructor(svgElement: SVGCircleElement, editBoxListener: EditBox);
    removeListener(): void;
}

export declare class Slider extends BaseSvg {
    static observedAttributes: ("x" | "y" | "width" | "height" | "rotate" | "id" | "scalex" | "scaley" | "origin" | "zero")[];
    constructor(id?: string, width?: number, height?: number, x?: number, y?: number, rotate?: number, origin?: string, scaleX?: number, scaleY?: number);
    attributeUpdate(attributeName: typeof ATTRIBUTES_2[number], _oldValue: string, _newValue: string): void;
}

declare class Transform {
    #private;
    x: number;
    y: number;
    rotate: number;
    scaleX: number;
    scaleY: number;
    element: HTMLElement | SVGElement;
    constructor(element: HTMLElement | SVGElement, x?: number, y?: number, scaleX?: number, scaleY?: number, rotate?: number);
    get transform(): {
        x: number;
        y: number;
        rotate: number;
        scaleX: number;
        scaleY: number;
    };
    set transform(transform: string | TransformProps);
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

declare type TransformProps = {
    x?: number;
    y?: number;
    rotate?: number;
    scaleX?: number;
    scaleY?: number;
};

export { }
