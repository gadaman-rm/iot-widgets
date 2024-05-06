export const getCssVar = (
  cssVar: string,
  elem: Element = document.documentElement,
) => window.getComputedStyle(elem).getPropertyValue(cssVar)

export const strToBool = (value: string | null | undefined) =>
  value === "" || value?.toLowerCase() === "true"

export const boolToStr = (value: boolean | null | undefined) =>
  value ? "true" : "false"

export const createSlot = (name: string) => {
  const div = document.createElement("div")
  div.innerHTML = `<slot id="${name}" name="${name}"></slot>`
  return div.firstElementChild as HTMLSlotElement
}

export const html = (strings: TemplateStringsArray, ...args: any[]) => {
  let str = ""
  const div = document.createElement("div")
  strings.raw.forEach((strItem, strIndex) => {
    const argItem = args[strIndex]
    str += strItem.trim()
    if (argItem) str += String(args[strIndex])
  })
  div.innerHTML = str
  return div
}

export const htmlRoot = (strings: TemplateStringsArray, ...args: any[]) => {
  let str = ""
  const div = document.createElement("div")
  strings.raw.forEach((strItem, strIndex) => {
    const argItem = args[strIndex]
    str += strItem.trim()
    if (argItem) str += String(args[strIndex])
  })
  div.innerHTML = str
  return div.firstElementChild!
}

export const htmlList = (strings: TemplateStringsArray, ...args: any[]) => {
  let str = ""
  const div = document.createElement("div")
  strings.raw.forEach((strItem, strIndex) => {
    const argItem = args[strIndex]
    str += strItem.trim()
    if (argItem) str += String(args[strIndex])
  })
  div.innerHTML = str
  return div.children!
}
