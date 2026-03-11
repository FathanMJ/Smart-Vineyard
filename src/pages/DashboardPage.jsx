import { useState } from 'react'

function DashboardPage() {
  const [pumpOn, setPumpOn] = useState(true)
  const [injectOn, setInjectOn] = useState(false)

  return (
    <div className="page page-with-padding page-shell">
      <section className="card-grid-3 u-mb-1">
        <div className="card card-animate card-animate-delay-1 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Nutrisi Tanah (NPK)</div>
              <div className="card-subtitle card-subtitle-lg">Kandungan nutrisi terkini</div>
            </div>
            <span className="badge badge-success badge-pill-success">Optimal</span>
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

        <div className="card card-animate card-animate-delay-2 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Kondisi Lingkungan</div>
              <div className="card-subtitle card-subtitle-lg">Status kelembapan area akar</div>
            </div>
          </div>
          <div className="u-mt-04">
            <span className="big-number">72%</span>{' '}
            <span className="muted">Kelembapan tanah</span>
          </div>
          <div className="small-text u-mt-035">
            Udara: <strong>29°C</strong> · RH: <strong>65%</strong>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-3 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Stok Air & Nutrisi</div>
              <div className="card-subtitle card-subtitle-lg">Tandon utama & pupuk cair</div>
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

      <section className="card-grid-2 u-mb-1">
        <div className="card card-animate card-animate-delay-4 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">AI Diagnosis (Visual)</div>
              <div className="card-subtitle card-subtitle-lg">Analisis daun terakhir dari kamera</div>
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

        <div className="card card-animate card-animate-delay-5 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Kontrol Fertigasi Manual</div>
              <div className="card-subtitle card-subtitle-lg">Pompa & injeksi nutrisi</div>
            </div>
            <span className="badge badge-pill-neutral">Mode Manual</span>
          </div>
          <div className="control-row u-mt-025">
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
          <div className="control-row u-mt-075">
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

      <section className="card-grid-3 u-mb-1">
        <div className="card card-animate card-animate-delay-6 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Status Perangkat IoT</div>
              <div className="card-subtitle card-subtitle-lg">ESP32, kamera, dan sensor</div>
            </div>
            <span className="badge badge-success badge-pill-success">Semua Online</span>
          </div>
          <div className="small-text">
            • ESP32 Utama – Online · RSSI -63 dBm
          </div>
          <div className="small-text">• ESP32-CAM – Online · Foto aktif</div>
          <div className="small-text">• Node Sensor 1 – Online · Sync 10 detik</div>
        </div>

        <div className="card card-animate card-animate-delay-7 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Alert Sistem</div>
              <div className="card-subtitle card-subtitle-lg">Peringatan kritis terbaru</div>
            </div>
            <span className="badge badge-critical badge-pill-critical">2 Alert</span>
          </div>
          <div className="small-text">• Tandon air cadangan mendekati kosong</div>
          <div className="small-text">
            • Kelembapan blok B turun di bawah 55% (butuh penyiraman)
          </div>
        </div>

        <div className="card card-animate card-animate-delay-8 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Foto Daun Terbaru</div>
              <div className="card-subtitle card-subtitle-lg">Dari kamera Smart Vineyard</div>
            </div>
          </div>
          <div
            className="chart-placeholder placeholder-striped placeholder-photo"
          >
            Area Foto Daun (thumbnail ESP32-CAM)
          </div>
          <div className="small-text u-mt-05">
            Diisi dengan snapshot terbaru + hasil klasifikasi AI.
          </div>
        </div>
      </section>

      <section
        className="card chart-card card-animate card-animate-delay-9 card-elevated"
      >
        <div
          className="chart-header chart-header-wrap"
        >
          <div>
            <div className="card-title card-title-lg">Tren Kelembapan & Nutrisi (24 Jam)</div>
            <div className="card-subtitle card-subtitle-lg">
              Soil moisture dan NPK per 30 menit
            </div>
          </div>
          <div className="tag-row">
            <span className="tag-pill tag-pill-success">NPK</span>
            <span className="tag-pill tag-pill-info">Moisture</span>
            <span className="tag-pill tag-pill-neutral">Hari ini</span>
          </div>
        </div>
        <div
          className="chart-placeholder placeholder-striped"
        >
          Area Grafik Tren (Integrasi Recharts / Chart.js nanti)
        </div>
      </section>
    </div>
  )
}

export default DashboardPage

