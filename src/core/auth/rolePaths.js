import { AgronomisPaths, OwnerPaths, StaffPaths, PublicPaths } from '../../routes/routePaths'

export function getDefaultRoleHomePath(role) {
  switch (role) {
    case 'owner':
      return OwnerPaths.dashboard
    case 'agronomis':
      return AgronomisPaths.dashboard
    case 'staff':
      return StaffPaths.dashboard
    default:
      return PublicPaths.login
  }
}

