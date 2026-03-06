function DeviceManagementPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Manajemen Perangkat IoT</div>
          <div className="page-caption">
            Pantau status ESP32, kamera, dan sensor di kebun.
          </div>
        </div>
      </div>

      <section className="card card-animate card-animate-delay-1">
        <div className="card-header">
          <div>
            <div className="card-title">Status Perangkat</div>
            <div className="card-subtitle">Online / Offline, RSSI WiFi, terakhir update</div>
          </div>
        </div>
        <div className="small-text">
          Tabel perangkat beserta tombol restart & kalibrasi sensor akan ditampilkan di
          sini.
        </div>
        <div
          className="small-text"
          style={{ marginTop: '0.6rem', display: 'flex', gap: '0.5rem' }}
        >
          <button
            type="button"
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '0.6rem',
              border: 'none',
              background:
                'linear-gradient(135deg, #18c46b 0%, #0f7a4a 100%)',
              color: '#f7fff9',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Restart Perangkat
          </button>
          <button
            type="button"
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '0.6rem',
              border: '1px solid #d3e4d8',
              background: '#ffffff',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Kalibrasi Sensor
          </button>
        </div>
      </section>
    </div>
  )
}

export default DeviceManagementPage

