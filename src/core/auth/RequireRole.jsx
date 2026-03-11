import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { getDefaultRoleHomePath } from './rolePaths'

export function RequireRole({ allowed, children }) {
  const { user } = useAuth()
  const role = user?.role

  if (!role || !allowed?.includes(role)) {
    return <Navigate to={getDefaultRoleHomePath(role)} replace />
  }

  return children ?? <Outlet />
}

