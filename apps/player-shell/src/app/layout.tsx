import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApiProvider } from '@/api/ApiProvider'
import { AuthProvider } from '@/context/AuthContext'
import { TenantProvider } from '@/context/TenantContext'
import 'theme-tenant-alpha/src/tokens.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Player Shell',
  description: 'Multi-tenant frontend demo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApiProvider>
          <AuthProvider>
            <TenantProvider>{children}</TenantProvider>
          </AuthProvider>
        </ApiProvider>
      </body>
    </html>
  )
}
