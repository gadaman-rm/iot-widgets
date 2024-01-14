declare const ATTRIBUTES: readonly ["zero"];

declare const ATTRIBUTES_2: readonly ["zero"];

declare const BASE_SVG_ATTRIBUTES: readonly ["x", "y", "width", "height", "rotate", "scalex", "scaley", "origin"];

declare class BaseSvg extends HTMLDivElement {
    #private;
    root: SVGSVGElement;
    constructor(template: HTMLTemplateElement, width: number, height: number, x?: number, y?: number, rotate?: number, scaleX?: number, scaleY?: number, origin?: string);
    get transform(): {
        x?: number;
        y?: number;
        scaleX?: number;
        scaleY?: number;
        rotate?: number;
    };
    set transform(v: {
        x?: number;
        y?: number;
        scaleX?: number;
        scaleY?: number;
        rotate?: number;
    });
    set x(x: number);
    set y(y: number);
    set scaleX(scaleX: number);
    set scaleY(scaleY: number);
    set rotate(rotate: number);
    get width(): number;
    set width(width: string | number);
    get height(): number;
    set height(height: string | number);
    get origin(): {
        x: number;
        y: number;
    };
    set origin(origin: string);
    attributeUpdate(attributeName: any, oldValue: string, newValue: string): void;
    attributeChangedCallback(attributeName: typeof BASE_SVG_ATTRIBUTES[number], oldValue: string, newValue: string): void;
    mount(): void;
    connectedCallback(): void;
    unmount(): void;
    disconnectedCallback(): void;
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
