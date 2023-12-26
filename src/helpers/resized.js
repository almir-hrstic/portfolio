export default function resized() {

  let screenWidth = sessionStorage.getItem('screen_width')

  if (screenWidth === document.documentElement.clientWidth.toString()) return false

  sessionStorage.setItem('screen_width', document.documentElement.clientWidth)
  return true
}
