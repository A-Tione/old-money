export const throttle = <T extends unknown[]>(fn: Function, time: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined = undefined
  return (...args: T) => {
    if (timer) {
      return
    } else {
      fn(...args)
      timer = setTimeout(() => {
        timer = undefined
      }, time)
    }
  }
}