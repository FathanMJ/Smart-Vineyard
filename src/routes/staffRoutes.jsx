import { Route } from 'react-router-dom'
import { StaffPaths } from './routePaths'
import { RequireRole } from '../core/auth/RequireRole.jsx'
import { RoleLayout } from '../layouts/RoleLayout.jsx'

import StaffDashboardPage from '../modules/staff/pages/DashboardPage.jsx'
import StaffUploadImagePage from '../modules/staff/pages/UploadImagePage.jsx'
import StaffSensorsPage from '../modules/staff/pages/SensorsPage.jsx'

export function StaffRoutes() {
  return (
    <Route
      path={`${StaffPaths.root}/*`}
      element={
        <RequireRole allowed={['staff']}>
          <RoleLayout role="staff" />
        </RequireRole>
      }
    >
      <Route path="dashboard" element={<StaffDashboardPage />} />
      <Route path="upload-image" element={<StaffUploadImagePage />} />
      <Route path="sensors" element={<StaffSensorsPage />} />
    </Route>
  )
}

