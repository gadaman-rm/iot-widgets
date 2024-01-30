export declare class DragListener<Init = undefined> {
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

export declare class KeyShortcatListener {
    #private;
    keyCode: string;
    constructor(keyCode: string, container?: HTMLElement);
    set onKeyDown(onKeyDown: (e: KeyboardEvent) => void);
    set onKeyUp(onKeyUp: (e: KeyboardEvent) => void);
    removeEvent: () => void;
}

export declare class PanListener<Init = undefined> {
    #private;
    active: boolean;
    init?: Init;
    constructor(container?: HTMLElement);
    set onPanStart(onPanStart: (e: MouseEvent, initFn: (init: Init) => Init) => void);
    set onPanMove(onPanMove: (e: MouseEvent, init?: Init) => void);
    set onPanEnd(onPanEnd: (e: MouseEvent, init?: Init) => void);
    set onPanLeave(onPanLeave: (e: MouseEvent, init?: Init) => void);
    removeEvent: () => void;
}

export declare class ZoomListener {
    #private;
    active: boolean;
    constructor(container?: HTMLElement);
    set onZoom(onZoom: (e: WheelEvent) => void);
    removeEvent: () => void;
}

export { }
