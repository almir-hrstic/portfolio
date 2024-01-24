const screen = {}

if (typeof document !== 'undefined') {

  screen.width = document.documentElement.clientWidth
  screen.height = document.documentElement.clientHeight
}

export default function resized() {

  if (screen.resized) {

    clearTimeout(screen.resized)
    screen.resized = setTimeout(() => screen.resized = false, 1000)

    return true
  }

  if (screen.width !== document.documentElement.clientWidth || screen.height !== document.documentElement.clientHeight) {

    screen.resized = true

    screen.width = document.documentElement.clientWidth
    screen.height = document.documentElement.clientHeight

    return true
  }

  return false
}
