export const random = (min=1, max=100) => Math.floor(Math.random() * (max + 1)) + min
export const randomItem = <T>(list: T[]) => list[random(0, list.length - 1)]
export function* uniqueId(perfix = 'id-'): Generator<string, string> {
    let i = 0
    while (true) yield `${perfix}${++i}`
}
// export const randomId = MuiRandomId.bind(this)