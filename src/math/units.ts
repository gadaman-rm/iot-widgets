// export const cmToPX = (value: number) => value * 38
// export const pxToCM = (value: number) => value / 38

// export const mmToPX = (value: number) => value * 3.8
// export const pxToMM = (value: number) => value / 3.8

// export const qToPX = (value: number) => value * 0.95
// export const pxToQ = (value: number) => value / 0.95

// export const inToPX = (value: number) => value * 96
// export const pxToIN = (value: number) => value / 96

// export const pcToPX = (value: number) => value * 16
// export const pxToPC = (value: number) => value / 16

// export const ptToPX = (value: number) => value * 1.333333
// export const pxToPT = (value: number) => value / 1.333333

export const vwToPX = (vw: number) =>
  (document.documentElement.clientWidth * vw) / 100
export const pxToVW = (px: number) =>
  (100 * px) / document.documentElement.clientWidth

export const vhToPX = (vh: number) =>
  (document.documentElement.clientHeight * vh) / 100
export const pxToVH = (px: number) =>
  (100 * px) / document.documentElement.clientHeight

export const remToPX = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
export const pxToREM = (px: number) =>
  px / parseFloat(getComputedStyle(document.documentElement).fontSize)

export const emToPX = (em: number, target: HTMLElement) =>
  em * parseFloat(getComputedStyle(target.parentElement!).fontSize)
export const pxToEM = (px: number, target: HTMLElement) =>
  px / parseFloat(getComputedStyle(target.parentElement!).fontSize)

/** Convert a value to a different unit
 * @param {number} val - value to convert
 * @param {string} from - unit `val` can be one of: %, em, ex, px, cm, mm, in, pt, pc
 * @param {string} to - unit to convert to, same as `from`
 * @returns {object} - {number, string} with the number/string forms for the converted value
 */
export const convert_units = (() => {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  const len = rect.width.baseVal
  const modes = {
    "%": len.SVG_LENGTHTYPE_PERCENTAGE,
    rem: len.SVG_LENGTHTYPE_EMS,
    ex: len.SVG_LENGTHTYPE_EXS,
    px: len.SVG_LENGTHTYPE_PX,
    cm: len.SVG_LENGTHTYPE_CM,
    mm: len.SVG_LENGTHTYPE_MM,
    in: len.SVG_LENGTHTYPE_IN,
    pt: len.SVG_LENGTHTYPE_PT,
    pc: len.SVG_LENGTHTYPE_PC,
  }
  return (
    val: number,
    from: keyof typeof modes,
    to: keyof typeof modes,
    context = document.body,
  ) => {
    if (context) context.appendChild(rect)
    len.newValueSpecifiedUnits(modes[from], val)
    len.convertToSpecifiedUnits(modes[to])
    const out = {
      number: len.valueInSpecifiedUnits,
      string: len.valueAsString,
    }
    if (context) context.removeChild(rect)
    return out
  }
})()
