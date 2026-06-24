import React from 'react'

interface BrandCardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function BrandCard({ title, children, className = '' }: BrandCardProps) {
  return (
    <div className={`bg-surface rounded-lg shadow-card p-6 ${className}`}>
      {title && (
        <h2 className="text-lg font-semibold text-text-base mb-4">{title}</h2>
      )}
      {children}
    </div>
  )
}
