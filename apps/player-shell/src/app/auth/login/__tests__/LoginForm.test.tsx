import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from '../LoginForm'

const mockLogin = vi.fn()
const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

vi.mock('@/context/AuthContext', () => ({
  useAuth: () => ({ login: mockLogin }),
}))

describe('LoginForm', () => {
  it('renders email and password fields', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('shows required errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.click(screen.getByRole('button'))
    expect(screen.getAllByRole('alert')).toHaveLength(2)
  })

  it('shows email format error for invalid email', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(screen.getByLabelText(/email/i), 'invalid')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByRole('button'))
    expect(screen.getByText(/valid email/i)).toBeInTheDocument()
  })

  it('shows password length error for short password', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/password/i), 'short')
    await user.click(screen.getByRole('button'))
    expect(screen.getByText(/at least 8/i)).toBeInTheDocument()
  })

  it('calls login and redirects on valid submission', async () => {
    mockLogin.mockResolvedValueOnce(undefined)
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByRole('button'))
    expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123')
    expect(mockPush).toHaveBeenCalledWith('/account/billing')
  })
})
