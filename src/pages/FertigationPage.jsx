import { useState } from 'react'

function FertigationPage() {
  const [pumpOn, setPumpOn] = useState(false)
  const [solenoidOn, setSolenoidOn] = useState(false)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Smart Fertigation</div>
          <div className="page-caption">
            Kontrol penyiraman dan pemberian nutrisi berbasis kontrol proporsional.
          </div>
        </div>
        <span className="badge">Mode Otomatis</span>
      </div>

      <section className="card-grid-2">
        <div className="card card-animate card-animate-delay-1">
          <div className="card-header">
            <div>
              <div className="card-title">Status Sistem</div>
              <div className="card-subtitle">Ringkasan operasi fertigasi</div>
            </div>
          </div>
          <div className="small-text">
            Moisture sekarang: <strong>62%</strong> · Target: <strong>65%</strong>
          </div>
          <div className="small-text" style={{ marginTop: '0.4rem' }}>
            Mode kontrol: <strong>Proportional Control</strong>
          </div>
          <div className="small-text" style={{ marginTop: '0.4rem' }}>
            Durasi penyiraman terakhir: <strong>120 detik</strong>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-2">
          <div className="card-header">
            <div>
              <div className="card-title">Kontrol Manual</div>
              <div className="card-subtitle">Override mode otomatis</div>
            </div>
          </div>
          <div className="control-row" style={{ marginTop: '0.25rem' }}>
            <div>
              <div className="card-title">Pompa Irigasi</div>
              <div className="small-text">Status: {pumpOn ? 'MENYIRAM' : 'OFF'}</div>
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
              <div className="card-title">Solenoid Valve</div>
              <div className="small-text">
                Status: {solenoidOn ? 'TERBUKA' : 'TERTUTUP'}
              </div>
            </div>
            <button
              type="button"
              className={`switch ${solenoidOn ? 'switch-on' : ''}`}
              onClick={() => setSolenoidOn((v) => !v)}
              aria-label={solenoidOn ? 'Tutup solenoid' : 'Buka solenoid'}
            >
              <div className="switch-knob" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FertigationPage

