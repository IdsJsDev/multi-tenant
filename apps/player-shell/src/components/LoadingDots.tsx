export function LoadingDots() {
  return (
    <div className="flex items-center justify-center py-8 gap-1 text-gray-400" aria-live="polite">
      <span>Loading</span>
      <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
    </div>
  )
}
