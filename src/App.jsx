import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation, Outlet } from 'react-router-dom'
import './App.css'

function PageTransition() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-enter">
      <Outlet />
    </div>
  )
}

import DashboardPage from './pages/DashboardPage.jsx'
import MonitoringPage from './pages/MonitoringPage.jsx'
import FertigationPage from './pages/FertigationPage.jsx'
import SmartVisionPage from './pages/SmartVisionPage.jsx'
import PlantManagementPage from './pages/PlantManagementPage.jsx'
import DeviceManagementPage from './pages/DeviceManagementPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import ReportsPage from './pages/ReportsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const isAuthenticated = () => {
  return true
}

function SidebarLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ['sidebar-link', isActive ? 'active' : ''].join(' ').trim()
      }
    >
      <span>{label}</span>
    </NavLink>
  )
}

function MainLayout() {
  return (
    <div className="app-root">
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo">Smart Vineyard Dashboard</div>
          <div className="sidebar-subtitle">Saung Tinanggur · Smart Farming</div>
        </div>
        <nav className="sidebar-nav">
          <SidebarLink to="/dashboard" label="Dashboard" />
          <SidebarLink to="/monitoring" label="Monitoring Sensor" />
          <SidebarLink to="/fertigation" label="Smart Fertigation" />
          <SidebarLink to="/vision" label="Smart Vision (AI)" />
          <SidebarLink to="/plants" label="Manajemen Tanaman" />
          <SidebarLink to="/devices" label="Perangkat IoT" />
          <SidebarLink to="/notifications" label="Notifikasi & Alert" />
          <SidebarLink to="/reports" label="Laporan & Analisis" />
        </nav>
        <div className="sidebar-footer">© {new Date().getFullYear()} Smart Vineyard</div>
      </aside>
      <main className="main-content">
        <div className="topbar">
          <div className="topbar-title">
            <h1>Smart Vineyard Dashboard</h1>
            <span>Integrated Smart Fertigation System</span>
          </div>
          <div className="topbar-status">
            <div className="chip">
              <span className="chip-dot" />
              System Online
            </div>
            <span className="small-text">
              Last update <strong>10:45 AM</strong>
            </span>
          </div>
        </div>
        <Routes>
          <Route element={<PageTransition />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/monitoring" element={<MonitoringPage />} />
            <Route path="/fertigation" element={<FertigationPage />} />
            <Route path="/vision" element={<SmartVisionPage />} />
            <Route path="/plants" element={<PlantManagementPage />} />
            <Route path="/devices" element={<DeviceManagementPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={isAuthenticated() ? <MainLayout /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
