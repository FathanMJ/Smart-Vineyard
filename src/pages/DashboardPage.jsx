import { useState } from 'react'

function DashboardPage() {
  const [pumpOn, setPumpOn] = useState(true)
  const [injectOn, setInjectOn] = useState(false)

  return (
    <div className="page">
      <section className="card-grid-3">
        <div className="card card-animate card-animate-delay-1">
          <div className="card-header">
            <div>
              <div className="card-title">Nutrisi Tanah (NPK)</div>
              <div className="card-subtitle">Kandungan nutrisi terkini</div>
            </div>
            <span className="badge badge-success">Optimal</span>
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

        <div className="card card-animate card-animate-delay-2">
          <div className="card-header">
            <div>
              <div className="card-title">Kondisi Lingkungan</div>
              <div className="card-subtitle">Status kelembapan area akar</div>
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

        <div className="card card-animate card-animate-delay-3">
          <div className="card-header">
            <div>
              <div className="card-title">Stok Air & Nutrisi</div>
              <div className="card-subtitle">Tandon utama & pupuk cair</div>
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

      <section className="card-grid-2">
        <div className="card card-animate card-animate-delay-4">
          <div className="card-header">
            <div>
              <div className="card-title">AI Diagnosis (Visual)</div>
              <div className="card-subtitle">Analisis daun terakhir dari kamera</div>
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

        <div className="card card-animate card-animate-delay-5">
          <div className="card-header">
            <div>
              <div className="card-title">Kontrol Fertigasi Manual</div>
              <div className="card-subtitle">Pompa & injeksi nutrisi</div>
            </div>
            <span className="badge">Mode Manual</span>
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

      <section className="card-grid-3">
        <div className="card card-animate card-animate-delay-6">
          <div className="card-header">
            <div>
              <div className="card-title">Status Perangkat IoT</div>
              <div className="card-subtitle">ESP32, kamera, dan sensor</div>
            </div>
            <span className="badge badge-success">Semua Online</span>
          </div>
          <div className="small-text">
            • ESP32 Utama – Online · RSSI -63 dBm
          </div>
          <div className="small-text">• ESP32-CAM – Online · Foto aktif</div>
          <div className="small-text">• Node Sensor 1 – Online · Sync 10 detik</div>
        </div>

        <div className="card card-animate card-animate-delay-7">
          <div className="card-header">
            <div>
              <div className="card-title">Alert Sistem</div>
              <div className="card-subtitle">Peringatan kritis terbaru</div>
            </div>
            <span className="badge-critical badge">2 Alert</span>
          </div>
          <div className="small-text">• Tandon air cadangan mendekati kosong</div>
          <div className="small-text">
            • Kelembapan blok B turun di bawah 55% (butuh penyiraman)
          </div>
        </div>

        <div className="card card-animate card-animate-delay-8">
          <div className="card-header">
            <div>
              <div className="card-title">Foto Daun Terbaru</div>
              <div className="card-subtitle">Dari kamera Smart Vineyard</div>
            </div>
          </div>
          <div
            className="chart-placeholder"
            style={{
              minHeight: '140px',
              borderStyle: 'solid',
              overflow: 'hidden',
            }}
          >
            Area Foto Daun (thumbnail ESP32-CAM)
          </div>
          <div className="small-text" style={{ marginTop: '0.5rem' }}>
            Diisi dengan snapshot terbaru + hasil klasifikasi AI.
          </div>
        </div>
      </section>

      <section className="card chart-card card-animate card-animate-delay-9">
        <div className="chart-header">
          <div>
            <div className="card-title">Tren Kelembapan & Nutrisi (24 Jam)</div>
            <div className="card-subtitle">Soil moisture dan NPK per 30 menit</div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span className="tag-pill">NPK</span>
            <span className="tag-pill">Moisture</span>
            <span className="tag-pill">Hari ini</span>
          </div>
        </div>
        <div className="chart-placeholder">
          Area Grafik Tren (Integrasi Recharts / Chart.js nanti)
        </div>
      </section>
    </div>
  )
}

export default DashboardPage

