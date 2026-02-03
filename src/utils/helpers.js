export function formatTime(seconds, lrcformat = true) {
    const mins = Math.floor(seconds / 60)
    const secs = (seconds % 60).toFixed(3)
    if (lrcformat) {
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(6, '0')}`
    } else {
        return `${mins}:${Math.floor(secs).toString().padStart(2, '0')}`
    }
}

export function deformatTime(timeText) {
    let time = 0
    timeText
        .split(':')
        .reverse()
        .forEach((t, i) => {
            time += parseFloat(t) * 60 ** i
        })
    return time
}

export function awaitFilePick(input) {
  return new Promise((resolve) => {
    const handler = () => {
      input.removeEventListener('change', handler)
      resolve(input.files)
    }
    input.addEventListener('change', handler, { once: true })
    input.click()
  })
}