interface EmptyStateProps {
  children?: React.ReactNode
}

export function EmptyState({ children = 'No data' }: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center py-8 text-text-muted text-sm">{children}</div>
  )
}
