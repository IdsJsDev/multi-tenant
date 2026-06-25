type ToastType = 'error' | 'success'

export interface ToastItem {
  id: string
  message: string
  type: ToastType
}

type Listener = (toast: ToastItem) => void

let listeners: Listener[] = []

export function showToast(message: string, type: ToastType = 'error') {
  const toast: ToastItem = { id: Date.now().toString(), message, type }
  listeners.forEach((fn) => fn(toast))
}

export function subscribe(fn: Listener) {
  listeners.push(fn)
  return () => {
    listeners = listeners.filter((l) => l !== fn)
  }
}
