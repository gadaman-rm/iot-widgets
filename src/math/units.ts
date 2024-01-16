export const pxToVW = (px: number) => 100 * px / document.documentElement.clientWidth
export const pxToVH = (px: number) => 100 * px / document.documentElement.clientHeight
export const vhToPX = (vh: number) => document.documentElement.clientHeight * vh / 100
export const vwToPX = (vw: number) => document.documentElement.clientWidth * vw / 100
export const remToPX = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
export const pxToREM = (px: number) => px / parseFloat(getComputedStyle(document.documentElement).fontSize)
