export function debounce(func, wait=300, immediate) {
  let timeout
  return (...args) => {
    let invertDebounce = immediate && !timeout
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) {
        func.apply(this, args)
      }
    }, wait)

    if (invertDebounce) {
      func.apply(this, args)
    }
  }
}