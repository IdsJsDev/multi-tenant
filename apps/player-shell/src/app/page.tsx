import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <header className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <span className="font-semibold text-gray-900">Player Shell</span>
        <Link
          href="/auth/login"
          className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
        >
          Sign in
        </Link>
      </header>

      <main className="flex flex-col items-center justify-center gap-6 px-4" style={{ minHeight: 'calc(100vh - 57px)' }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Player Shell</h1>
          <p className="text-gray-500">Multi-tenant frontend demo</p>
        </div>

      </main>
    </>
  )
}
