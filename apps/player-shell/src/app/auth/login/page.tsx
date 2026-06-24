import { LoginForm } from './LoginForm'

async function preloadAuth() {
  // Artificial delay to demonstrate loading state
  await new Promise(resolve => setTimeout(resolve, 1000))
}

export default async function LoginPage() {
  await preloadAuth()
  return <LoginForm />
}
