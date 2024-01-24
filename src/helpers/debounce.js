export default function debounce(callback, timeout = 1000) {

  let trigger

  return (...args) => {

    clearTimeout(trigger)
    trigger = setTimeout(() => callback.apply(this, args), timeout)
  }
}
