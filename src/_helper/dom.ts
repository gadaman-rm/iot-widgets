export const button = (props: Partial<HTMLButtonElement>) =>
  Object.assign(document.createElement("button"), props)

export function moveToIndex(targetElement: HTMLElement, index: number) {
  let parent = targetElement.parentNode
  if (parent) parent.insertBefore(targetElement, parent.children[index])
}

export function riseToTop(targetElement: HTMLElement) {
  let parent = targetElement.parentNode
  if (parent) parent.append(targetElement)
}

export function rise(targetElement: HTMLElement) {
  let parent = targetElement.parentNode
  const next = targetElement.nextSibling
  if (parent && next) parent.insertBefore(next, targetElement)
}

export function lower(targetElement: HTMLElement) {
  let parent = targetElement.parentNode
  const previous = targetElement.previousSibling
  if (parent && previous) parent.insertBefore(targetElement, previous)
}

export function lowerToBottom(targetElement: HTMLElement) {
  let parent = targetElement.parentNode
  if (parent) parent.insertBefore(targetElement, parent.firstElementChild)
}
