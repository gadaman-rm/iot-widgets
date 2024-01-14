export declare class Gauge extends HTMLElement {
    constructor();
}

export declare class MyComponent extends HTMLDivElement {
    constructor();
}

export declare class Slider extends HTMLElement {
    static observedAttributes: string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void;
}

export { }
