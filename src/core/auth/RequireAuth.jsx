import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { PublicPaths } from '../../routes/routePaths'

export function RequireAuth() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={PublicPaths.login} replace state={{ from: location }} />
  }

  return <Outlet />
}

