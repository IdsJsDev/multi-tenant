'use client'

import { useEffect, useState } from 'react'
import { subscribe, type ToastItem } from '@/lib/toast'

export function Toast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  useEffect(() => {
    const unsubscribe = subscribe((toast) => {
      setToasts((prev) => [...prev, toast])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, 4000)
    })
    return unsubscribe
  }, [])

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 rounded-md shadow-lg text-sm text-white max-w-sm animate-in slide-in-from-right ${
            toast.type === 'error'
              ? 'bg-red-600'
              : 'bg-green-600'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}
