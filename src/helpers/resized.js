const screen = {}

if (typeof window !== 'undefined') {

  screen.width = window.innerWidth
  screen.height = window.innerHeight
}

export default function resized() {

  if (screen.resized) {

    clearTimeout(screen.resized)
    screen.resized = setTimeout(() => screen.resized = false, 1000)

    return true
  }

  if (screen.width !== window.innerWidth || screen.height !== window.innerHeight) {

    screen.resized = true

    screen.width = window.innerWidth
    screen.height = window.innerHeight

    return true
  }

  return false
}
