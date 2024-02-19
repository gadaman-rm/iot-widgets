export const flatSlot = (elem: HTMLSlotElement | HTMLElement) => {
    const list: Element[] = []
    if (elem instanceof HTMLSlotElement)
        elem.assignedElements().map(item => {
            if (item.getAttribute('data-children') === 'true') {
                list.push(...flatSlot(item as HTMLSlotElement))
            } else {
                list.push(item)
            }
        })
    else if (elem instanceof HTMLElement) {
        list.push(...elem.querySelectorAll('*'))
    }

    return list
}
