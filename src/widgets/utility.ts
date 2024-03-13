import { Gauge, Slider } from "."

export type IWidgets = Slider | Gauge 
export type IWidgetsNames = 'slider' | 'gauge' 
export const strToWidgets = (widgetName: IWidgetsNames | undefined | null) => {
    switch (widgetName) {
        case 'slider': return new Slider()
        case 'gauge': return new Gauge()
    }
}

export type IWidgetsIsNames = 'g-slider' | 'g-gauge' 
export const isToWidgets = (widgetName: IWidgetsIsNames | undefined | null) => {
    switch (widgetName) {
        case 'g-slider': return new Slider()
        case 'g-gauge': return new Gauge()
    }
}
