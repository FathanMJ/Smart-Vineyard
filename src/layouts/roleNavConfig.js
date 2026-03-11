import { AgronomisPaths, OwnerPaths, StaffPaths } from '../routes/routePaths'

export const roleNavConfig = {
  owner: {
    title: 'Smart Vineyard (Owner)',
    subtitle: 'Saung Tinanggur · Owner Console',
    links: [
      { to: OwnerPaths.dashboard, label: 'Dashboard' },
      { to: OwnerPaths.users, label: 'Manajemen Pengguna' },
      { to: OwnerPaths.sensors, label: 'Data Sensor' },
      { to: OwnerPaths.analysis, label: 'Analisis AI' },
      { to: OwnerPaths.reports, label: 'Laporan' },
      { to: OwnerPaths.settings, label: 'Pengaturan' },
    ],
  },
  agronomis: {
    title: 'Smart Vineyard (Agronomis)',
    subtitle: 'Saung Tinanggur · Agronomis',
    links: [
      { to: AgronomisPaths.dashboard, label: 'Dashboard' },
      { to: AgronomisPaths.sensors, label: 'Data Sensor' },
      { to: AgronomisPaths.analysis, label: 'Analisis AI' },
      { to: AgronomisPaths.recommendation, label: 'Rekomendasi' },
      { to: AgronomisPaths.history, label: 'Riwayat' },
    ],
  },
  staff: {
    title: 'Smart Vineyard (Staff)',
    subtitle: 'Saung Tinanggur · Staff Lapangan',
    links: [
      { to: StaffPaths.dashboard, label: 'Dashboard' },
      { to: StaffPaths.uploadImage, label: 'Upload Citra Daun' },
      { to: StaffPaths.sensors, label: 'Data Sensor' },
    ],
  },
}

