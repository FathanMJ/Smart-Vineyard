import { useState } from 'react'

function FertigationPage() {
  const [pumpOn, setPumpOn] = useState(false)
  const [solenoidOn, setSolenoidOn] = useState(false)

  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <div
            className="page-title"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b2733' }}
          >
            Smart Fertigation
          </div>
          <div
            className="page-caption"
            style={{ marginTop: '0.25rem', color: '#5f6c7b', fontSize: '0.95rem' }}
          >
            Kontrol penyiraman dan pemberian nutrisi berbasis kontrol proporsional.
          </div>
        </div>
        <span
          className="badge"
          style={{
            alignSelf: 'flex-start',
            padding: '0.3rem 0.7rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            color: '#16a34a',
            fontSize: '0.78rem',
            fontWeight: 600,
          }}
        >
          Mode Otomatis
        </span>
      </div>

      <section
        className="card-grid-2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
          gap: '1rem',
        }}
      >
        <div
          className="card card-animate card-animate-delay-1"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            border: '1px solid #e3ecf3',
            boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
          }}
        >
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
                Status Sistem
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Ringkasan operasi fertigasi
              </div>
            </div>
          </div>
          <div
            className="small-text"
            style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6 }}
          >
            Moisture sekarang: <strong>62%</strong> · Target: <strong>65%</strong>
          </div>
          <div
            className="small-text"
            style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: '#4b5563' }}
          >
            Mode kontrol: <strong>Proportional Control</strong>
          </div>
          <div
            className="small-text"
            style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: '#4b5563' }}
          >
            Durasi penyiraman terakhir: <strong>120 detik</strong>
          </div>
        </div>

        <div
          className="card card-animate card-animate-delay-2"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            border: '1px solid #e3ecf3',
            boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
          }}
        >
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
                Kontrol Manual
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Override mode otomatis
              </div>
            </div>
          </div>
          <div
            className="control-row"
            style={{
              marginTop: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827' }}
              >
                Pompa Irigasi
              </div>
              <div className="small-text" style={{ fontSize: '0.84rem', color: '#4b5563' }}>
                Status: {pumpOn ? 'MENYIRAM' : 'OFF'}
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
          <div
            className="control-row"
            style={{
              marginTop: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <div
                className="card-title"
                style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827' }}
              >
                Solenoid Valve
              </div>
              <div className="small-text" style={{ fontSize: '0.84rem', color: '#4b5563' }}>
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

