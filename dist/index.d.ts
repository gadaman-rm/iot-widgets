declare const ATTRIBUTES: readonly ["zero"];

declare const ATTRIBUTES_2: readonly ["zero"];

declare const ATTRIBUTES_3: readonly ["zero"];

declare const BASE_SVG_ATTRIBUTES: readonly ["x", "y", "width", "height", "rotate", "scalex", "scaley", "origin"];

declare class BaseSvg extends HTMLDivElement {
    #private;
    root: SVGSVGElement;
    constructor(template: HTMLTemplateElement, width?: number, height?: number, x?: number, y?: number, rotate?: number, origin?: string, scaleX?: number, scaleY?: number);
    get transform(): {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        rotate: number;
    };
    set transform(v: {
        x?: number;
        y?: number;
        scaleX?: number;
        scaleY?: number;
        rotate?: number;
    });
    get x(): number;
    get y(): number;
    set x(x: number);
    set y(y: number);
    set scaleX(scaleX: number);
    set scaleY(scaleY: number);
    set rotate(rotate: number);
    get width(): number;
    set width(width: number | undefined);
    get height(): number;
    set height(height: number | undefined);
    get origin(): {
        x: number;
        y: number;
    };
    set origin(origin: string);
    setOriginCenter(): void;
    attributeChangedCallback(attributeName: typeof BASE_SVG_ATTRIBUTES[number], oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    xUpdate(oldX: number, newX: number): void;
    yUpdate(oldY: number, newY: number): void;
    widthUpdate(oldWidth: number, newWidth: number): void;
    heightUpdate(oldHeight: number, newHeight: number): void;
    rotateUpdate(oldRotate: number, newRotate: number): void;
    scaleXUpdate(oldScaleX: number, newScaleX: number): void;
    scaleYUpdate(oldScaleY: number, newScaleY: number): void;
    originUpdate(oldOrigin: string, newOrigin: string): void;
    attributeUpdate(attributeName: any, oldValue: string, newValue: string): void;
    mount(): void;
    unmount(): void;
}

export declare class EditBox extends EditBoxRenderListener {
    static observedAttributes: ("x" | "y" | "width" | "height" | "rotate" | "scalex" | "scaley" | "origin" | "zero")[];
    constructor();
    attributeUpdate(attributeName: typeof ATTRIBUTES_3[number], _oldValue: string, _newValue: string): void;
}

declare class EditBoxRender extends BaseSvg {
    controllerSize: number;
    bodyRef: SVGRectElement;
    rotateRef: SVGCircleElement;
    tlResizeRef: SVGRectElement;
    lmidResizeRef: SVGRectElement;
    blResizeRef: SVGRectElement;
    bmidResizeRef: SVGRectElement;
    brResizeRef: SVGRectElement;
    rmidResizeRef: SVGRectElement;
    tmidResizeRef: SVGRectElement;
    constructor();
    render(): void;
    widthUpdate(oldWidth: number, newWidth: number): void;
    heightUpdate(oldHeight: number, newHeight: number): void;
}

declare class EditBoxRenderListener extends EditBoxRender {
    isRmidResize: boolean;
    constructor();
    handleRmidResizeStart: (e: MouseEvent) => void;
    handleRmidResizeEnd: (e: MouseEvent) => void;
    handleRmidResize: (e: MouseEvent) => void;
    mount(): void;
    unmount(): void;
}

export declare class Gauge extends BaseSvg {
    static observedAttributes: ("x" | "y" | "width" | "height" | "rotate" | "scalex" | "scaley" | "origin" | "zero")[];
    constructor();
    attributeUpdate(attributeName: typeof ATTRIBUTES[number], _oldValue: string, _newValue: string): void;
}

export declare class MyComponent extends HTMLDivElement {
    constructor();
}

export declare class Slider extends BaseSvg {
    static observedAttributes: ("x" | "y" | "width" | "height" | "rotate" | "scalex" | "scaley" | "origin" | "zero")[];
    constructor();
    attributeUpdate(attributeName: typeof ATTRIBUTES_2[number], _oldValue: string, _newValue: string): void;
}

export { }
