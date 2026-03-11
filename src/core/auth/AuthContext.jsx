import { createContext, useContext, useMemo, useState } from 'react'
import { loginRequest } from './authApi'
import { clearAuth, getAccessToken, getUser, setAccessToken, setUser } from './authStorage'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [accessToken, setAccessTokenState] = useState(() => getAccessToken())
  const [user, setUserState] = useState(() => getUser())

  const isAuthenticated = Boolean(accessToken && user)

  const value = useMemo(() => {
    return {
      accessToken,
      user,
      isAuthenticated,
      async login({ email, password }) {
        const data = await loginRequest({ email, password })
        if (!data?.accessToken || !data?.user) {
          throw new Error('Invalid login response')
        }

        setAccessToken(data.accessToken)
        setUser(data.user)
        setAccessTokenState(data.accessToken)
        setUserState(data.user)

        return data.user
      },
      logout() {
        clearAuth()
        setAccessTokenState(null)
        setUserState(null)
      },
    }
  }, [accessToken, user, isAuthenticated])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

