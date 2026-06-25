import { useApi } from '../ApiProvider'
import type { IdentityApi } from './types'

export function useIdentityApi(): IdentityApi {
  return useApi().identityApi
}
