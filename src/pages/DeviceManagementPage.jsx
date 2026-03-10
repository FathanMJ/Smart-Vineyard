function DeviceManagementPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <div
            className="page-title"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b2733' }}
          >
            Manajemen Perangkat IoT
          </div>
          <div
            className="page-caption"
            style={{ marginTop: '0.25rem', color: '#5f6c7b', fontSize: '0.95rem' }}
          >
            Pantau status ESP32, kamera, dan sensor di kebun.
          </div>
        </div>
      </div>

      <section
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
            gap: '1rem',
          }}
        >
          <div>
            <div
              className="card-title"
              style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
            >
              Status Perangkat
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Online / Offline, RSSI WiFi, terakhir update
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              style={{
                padding: '0.5rem 0.9rem',
                borderRadius: '999px',
                border: 'none',
                background:
                  'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
                color: '#f7fff9',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(22, 163, 74, 0.35)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
            >
              Restart Perangkat
            </button>
            <button
              type="button"
              style={{
                padding: '0.5rem 0.9rem',
                borderRadius: '999px',
                border: '1px solid #d3e4d8',
                background: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#374151',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(148, 163, 184, 0.2)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
            >
              Kalibrasi Sensor
            </button>
          </div>
        </div>

        <div
          className="small-text"
          style={{
            marginTop: '1.1rem',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            color: '#4b5563',
          }}
        >
          Tabel perangkat beserta tombol restart & kalibrasi sensor akan ditampilkan di
          sini.
        </div>
      </section>
    </div>
  )
}

export default DeviceManagementPage

