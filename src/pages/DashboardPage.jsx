import { useState } from 'react'

function DashboardPage() {
  const [pumpOn, setPumpOn] = useState(true)
  const [injectOn, setInjectOn] = useState(false)

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    padding: '1.25rem 1.5rem',
    border: '1px solid #e3ecf3',
    boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
  }
  const badgeSuccess = {
    padding: '0.25rem 0.6rem',
    borderRadius: '999px',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    color: '#16a34a',
    fontSize: '0.75rem',
    fontWeight: 600,
  }
  const badgeCritical = {
    padding: '0.25rem 0.6rem',
    borderRadius: '999px',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: '#dc2626',
    fontSize: '0.75rem',
    fontWeight: 600,
  }
  const badgeDefault = {
    padding: '0.25rem 0.6rem',
    borderRadius: '999px',
    backgroundColor: 'rgba(148, 163, 184, 0.15)',
    color: '#475569',
    fontSize: '0.75rem',
    fontWeight: 600,
  }

  return (
    <div
      className="page page-with-padding"
      style={{
        minHeight: '100vh',
        padding: '1.5rem',
        background:
          'linear-gradient(135deg, #f5f9ff 0%, #eef7f2 50%, #fefefe 100%)',
      }}
    >
      <section
        className="card-grid-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div className="card card-animate card-animate-delay-1" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                Nutrisi Tanah (NPK)
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Kandungan nutrisi terkini
              </div>
            </div>
            <span className="badge badge-success" style={badgeSuccess}>Optimal</span>
          </div>
          <div className="npk-values">
            <div className="npk-item">
              <span className="npk-label">N</span>
              <span className="npk-value">120</span>
            </div>
            <div className="npk-item">
              <span className="npk-label">P</span>
              <span className="npk-value">45</span>
            </div>
            <div className="npk-item">
              <span className="npk-label">K</span>
              <span className="npk-value">180</span>
            </div>
          </div>
          <div className="npk-footer">
            <span>pH Tanah: <strong>6.5</strong></span>
            <span className="muted">Varietas: Jupiter</span>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-2" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                Kondisi Lingkungan
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Status kelembapan area akar
              </div>
            </div>
          </div>
          <div style={{ marginTop: '0.4rem' }}>
            <span className="big-number">72%</span>{' '}
            <span className="muted">Kelembapan tanah</span>
          </div>
          <div className="small-text" style={{ marginTop: '0.35rem' }}>
            Udara: <strong>29°C</strong> · RH: <strong>65%</strong>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-3" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                Stok Air & Nutrisi
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Tandon utama & pupuk cair
              </div>
            </div>
          </div>
          <div className="tank-list">
            <div className="tank-row">
              <span>Air Baku (Tandon Utama)</span>
              <span className="small-text">85%</span>
            </div>
            <div className="tank-row">
              <div className="progress-track">
                <div className="progress-bar-primary" />
              </div>
            </div>
            <div className="tank-row">
              <span>Pupuk Cair (Pekat)</span>
              <span className="small-text">40%</span>
            </div>
            <div className="tank-row">
              <div className="progress-track">
                <div className="progress-bar-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="card-grid-2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div className="card card-animate card-animate-delay-4" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                AI Diagnosis (Visual)
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Analisis daun terakhir dari kamera
              </div>
            </div>
          </div>
          <div className="ai-diagnosis">
            <div className="ai-label">Klorosis Ringan</div>
            <div className="ai-tagline">
              Confidence 86% · Dugaan: Defisiensi Nitrogen
            </div>
            <button className="btn-link">Lihat Analisis Detail</button>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-5" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                Kontrol Fertigasi Manual
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Pompa & injeksi nutrisi
              </div>
            </div>
            <span className="badge" style={badgeDefault}>Mode Manual</span>
          </div>
          <div className="control-row" style={{ marginTop: '0.25rem' }}>
            <div>
              <div className="card-title">Pompa Irigasi</div>
              <div className="small-text">
                Status: {pumpOn ? 'MENYIRAM · 120 detik' : 'STANDBY'}
              </div>
            </div>
            <button
              type="button"
              className={`switch ${pumpOn ? 'switch-on' : ''}`}
              onClick={() => setPumpOn((v) => !v)}
              aria-label={pumpOn ? 'Matikan pompa' : 'Nyalakan pompa'}
            >
              <div className="switch-knob" />
            </button>
          </div>
          <div className="control-row" style={{ marginTop: '0.75rem' }}>
            <div>
              <div className="card-title">Injeksi Nutrisi</div>
              <div className="small-text">
                Status: {injectOn ? 'AKTIF' : 'STANDBY'}
              </div>
            </div>
            <button
              type="button"
              className={`switch ${injectOn ? 'switch-on' : ''}`}
              onClick={() => setInjectOn((v) => !v)}
              aria-label={injectOn ? 'Matikan injeksi' : 'Nyalakan injeksi'}
            >
              <div className="switch-knob" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="card-grid-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div className="card card-animate card-animate-delay-6" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                Status Perangkat IoT
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                ESP32, kamera, dan sensor
              </div>
            </div>
            <span className="badge badge-success" style={badgeSuccess}>Semua Online</span>
          </div>
          <div className="small-text">
            • ESP32 Utama – Online · RSSI -63 dBm
          </div>
          <div className="small-text">• ESP32-CAM – Online · Foto aktif</div>
          <div className="small-text">• Node Sensor 1 – Online · Sync 10 detik</div>
        </div>

        <div className="card card-animate card-animate-delay-7" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                Alert Sistem
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Peringatan kritis terbaru
              </div>
            </div>
            <span className="badge-critical badge" style={badgeCritical}>2 Alert</span>
          </div>
          <div className="small-text">• Tandon air cadangan mendekati kosong</div>
          <div className="small-text">
            • Kelembapan blok B turun di bawah 55% (butuh penyiraman)
          </div>
        </div>

        <div className="card card-animate card-animate-delay-8" style={cardStyle}>
          <div
            className="card-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
              >
                Foto Daun Terbaru
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Dari kamera Smart Vineyard
              </div>
            </div>
          </div>
          <div
            className="chart-placeholder"
            style={{
              minHeight: '140px',
              borderRadius: '0.9rem',
              border: '1px dashed #cbd5e1',
              background:
                'repeating-linear-gradient(135deg, #f9fafb, #f9fafb 8px, #f3f4f6 8px, #f3f4f6 16px)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.86rem',
              color: '#6b7280',
            }}
          >
            Area Foto Daun (thumbnail ESP32-CAM)
          </div>
          <div className="small-text" style={{ marginTop: '0.5rem' }}>
            Diisi dengan snapshot terbaru + hasil klasifikasi AI.
          </div>
        </div>
      </section>

      <section
        className="card chart-card card-animate card-animate-delay-9"
        style={cardStyle}
      >
        <div
          className="chart-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '0.75rem',
          }}
        >
          <div>
            <div
              className="card-title"
              style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
            >
              Tren Kelembapan & Nutrisi (24 Jam)
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Soil moisture dan NPK per 30 menit
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span
              className="tag-pill"
              style={{
                padding: '0.25rem 0.6rem',
                borderRadius: '999px',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                color: '#16a34a',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              NPK
            </span>
            <span
              className="tag-pill"
              style={{
                padding: '0.25rem 0.6rem',
                borderRadius: '999px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: '#2563eb',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              Moisture
            </span>
            <span
              className="tag-pill"
              style={{
                padding: '0.25rem 0.6rem',
                borderRadius: '999px',
                backgroundColor: 'rgba(148, 163, 184, 0.15)',
                color: '#475569',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              Hari ini
            </span>
          </div>
        </div>
        <div
          className="chart-placeholder"
          style={{
            borderRadius: '0.9rem',
            border: '1px dashed #cbd5e1',
            background:
              'repeating-linear-gradient(135deg, #f9fafb, #f9fafb 8px, #f3f4f6 8px, #f3f4f6 16px)',
            padding: '2.5rem 1rem',
            fontSize: '0.86rem',
            color: '#6b7280',
            textAlign: 'center',
          }}
        >
          Area Grafik Tren (Integrasi Recharts / Chart.js nanti)
        </div>
      </section>
    </div>
  )
}

export default DashboardPage

