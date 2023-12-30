export default function debounce(callback) {

  let trigger

  return () => {

    clearTimeout(trigger)
    trigger = setTimeout(callback, 1000)
  }
}
