import { Route } from 'react-router-dom'
import { OwnerPaths } from './routePaths'
import { RequireRole } from '../core/auth/RequireRole.jsx'
import { RoleLayout } from '../layouts/RoleLayout.jsx'

import OwnerDashboardPage from '../modules/owner/pages/DashboardPage.jsx'
import OwnerUsersPage from '../modules/owner/pages/UsersPage.jsx'
import OwnerSensorsPage from '../modules/owner/pages/SensorsPage.jsx'
import OwnerAnalysisPage from '../modules/owner/pages/AnalysisPage.jsx'
import OwnerReportsPage from '../modules/owner/pages/ReportsPage.jsx'
import OwnerSettingsPage from '../modules/owner/pages/SettingsPage.jsx'

export function OwnerRoutes() {
  return (
    <Route
      path={`${OwnerPaths.root}/*`}
      element={
        // Sesuaikan allowed dengan huruf besar 'O' (sesuai database ENUM)
        <RequireRole allowed={['Owner', 'owner']}> 
          <RoleLayout role="owner" />
        </RequireRole>
      }
    >
      <Route path="dashboard" element={<OwnerDashboardPage />} />
      <Route path="users" element={<OwnerUsersPage />} />
      <Route path="sensors" element={<OwnerSensorsPage />} />
      <Route path="analysis" element={<OwnerAnalysisPage />} />
      <Route path="reports" element={<OwnerReportsPage />} />
      <Route path="settings" element={<OwnerSettingsPage />} />
    </Route>
  )
}

