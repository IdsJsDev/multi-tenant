export default function BillingLoading() {
  return (
    <div className="flex items-center justify-center min-h-[400px] gap-1 text-gray-400">
      <span>Loading</span>
      <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
    </div>
  )
}
