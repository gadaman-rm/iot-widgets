export declare class DragListener<Init = undefined> {
    #private;
    element: HTMLElement;
    active: boolean;
    init?: Init;
    constructor(element: HTMLElement);
    set onDragStart(onDragStart: (e: MouseEvent, initFn: (init: Init) => Init) => void);
    set onDragMove(onDragMove: (e: MouseEvent, init?: Init) => void);
    set onDragEnd(onDragEnd: (e: MouseEvent, init?: Init) => void);
    removeEvent: () => void;
}

export { }
