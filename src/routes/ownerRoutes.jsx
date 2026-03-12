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
import OwnerTanksPage from '../modules/owner/pages/TanksPage.jsx'
import OwnerManualControlPage from '../modules/owner/pages/ManualControlPage.jsx'
import OwnerThresholdsPage from '../modules/owner/pages/ThresholdsPage.jsx'
import OwnerTrendsPage from '../modules/owner/pages/TrendsPage.jsx'
import OwnerNotificationsPage from '../modules/owner/pages/NotificationsPage.jsx'
import OwnerMonitoringPage from '../modules/owner/pages/MonitoringPage.jsx'
import OwnerDiagnosaPage from '../modules/owner/pages/DiagnosaPage.jsx'

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
      <Route path="monitoring" element={<OwnerMonitoringPage />} />
      <Route path="sensors" element={<OwnerSensorsPage />} />
      <Route path="tanks" element={<OwnerTanksPage />} />
      <Route path="manual-control" element={<OwnerManualControlPage />} />
      <Route path="thresholds" element={<OwnerThresholdsPage />} />
      <Route path="trends" element={<OwnerTrendsPage />} />
      <Route path="diagnosa" element={<OwnerDiagnosaPage />} />
      <Route path="notifications" element={<OwnerNotificationsPage />} />
      <Route path="analysis" element={<OwnerAnalysisPage />} />
      <Route path="reports" element={<OwnerReportsPage />} />
      <Route path="settings" element={<OwnerSettingsPage />} />
    </Route>
  )
}

