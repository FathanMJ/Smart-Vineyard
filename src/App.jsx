import { useState } from 'react'
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

function SidebarLink({ to, label, onNavigate }) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        ['sidebar-link', isActive ? 'active' : ''].join(' ').trim()
      }
    >
      <span>{label}</span>
    </NavLink>
  )
}

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-root">
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
        aria-hidden="true"
        onClick={() => setSidebarOpen(false)}
      />
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div>
          <div className="sidebar-logo">Smart Vineyard Dashboard</div>
          <div className="sidebar-subtitle">Saung Tinanggur · Smart Farming</div>
        </div>
        <nav className="sidebar-nav">
          <SidebarLink to="/dashboard" label="Dashboard" onNavigate={() => setSidebarOpen(false)} />
          <SidebarLink to="/monitoring" label="Monitoring Sensor" onNavigate={() => setSidebarOpen(false)} />
          <SidebarLink to="/fertigation" label="Smart Fertigation" onNavigate={() => setSidebarOpen(false)} />
          <SidebarLink to="/vision" label="Smart Vision (AI)" onNavigate={() => setSidebarOpen(false)} />
          <SidebarLink to="/plants" label="Manajemen Tanaman" onNavigate={() => setSidebarOpen(false)} />
          <SidebarLink to="/devices" label="Perangkat IoT" onNavigate={() => setSidebarOpen(false)} />
          <SidebarLink to="/notifications" label="Notifikasi & Alert" onNavigate={() => setSidebarOpen(false)} />
          <SidebarLink to="/reports" label="Laporan & Analisis" onNavigate={() => setSidebarOpen(false)} />
        </nav>
        <div className="sidebar-footer">© {new Date().getFullYear()} Smart Vineyard</div>
        <button
          type="button"
          className="menu-close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Tutup menu"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.5rem',
            border: 'none',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            borderRadius: '0.5rem',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </aside>
      <main className="main-content">
        <div className="topbar">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Buka menu navigasi"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
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
