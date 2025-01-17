import { consoleWarn, createImage } from './utils'

export function cloneCanvas<T extends HTMLCanvasElement>(
  canvas: T,
): HTMLCanvasElement | HTMLImageElement {
  if (canvas.ownerDocument) {
    try {
      const dataURL = canvas.toDataURL()
      if (dataURL !== 'data:,') {
        return createImage(dataURL, canvas.ownerDocument)
      }
    } catch (error) {
      //
    }
  }

  const clone = canvas.cloneNode(false) as T
  const ctx = canvas.getContext('2d')
  const clonedCtx = clone.getContext('2d')

  try {
    if (ctx && clonedCtx) {
      clonedCtx.putImageData(
        ctx.getImageData(0, 0, canvas.width, canvas.height),
        0, 0,
      )
    }
    return clone
  } catch (error) {
    consoleWarn('Failed to clone canvas', error)
  }

  return clone
}
