/* Setup */

const setup = () => sessionStorage.setItem('screen_width', document.documentElement.clientWidth)

/* Debounce */

const debounce = (callback, timeout = 1000) => {

  let trigger

  return () => {

    clearTimeout(trigger)
    trigger = setTimeout(() => callback(), timeout)
  }
}

/* Resized */

const resized = () => {

  let screenWidth = sessionStorage.getItem('screen_width')

  if (screenWidth === document.documentElement.clientWidth.toString()) return false

  sessionStorage.setItem('screen_width', document.documentElement.clientWidth)
  return true
}

export { setup, debounce, resized }