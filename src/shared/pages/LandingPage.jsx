import { Link } from 'react-router-dom'
import { PublicPaths } from '../../routes/routePaths'

export default function LandingPage() {
  return (
    <div className="page page-with-padding page-shell">
      <section className="card card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Smart Vineyard Management System</div>
            <div className="card-subtitle card-subtitle-lg">
              Monitoring IoT & Analisis AI untuk tanaman anggur
            </div>
          </div>
        </div>
        <div className="small-text text-body">
          Silakan login untuk masuk ke modul sesuai role Anda: Owner, Agronomis, atau Staff.
        </div>
        <div className="btn-row">
          <Link className="btn-pill-primary" to={PublicPaths.login}>
            Login
          </Link>
        </div>
      </section>
    </div>
  )
}

