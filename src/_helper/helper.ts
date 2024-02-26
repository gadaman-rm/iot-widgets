export const getCssVar = (cssVar: string, elem: Element = document.documentElement) => window.getComputedStyle(elem).getPropertyValue(cssVar)

