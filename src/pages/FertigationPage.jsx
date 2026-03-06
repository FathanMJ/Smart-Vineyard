function FertigationPage() {
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
        <div className="card">
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

        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Kontrol Manual</div>
              <div className="card-subtitle">Override mode otomatis</div>
            </div>
          </div>
          <div className="control-row" style={{ marginTop: '0.25rem' }}>
            <div>
              <div className="card-title">Pompa Irigasi</div>
              <div className="small-text">Status: OFF</div>
            </div>
            <div className="switch">
              <div className="switch-knob" />
            </div>
          </div>
          <div className="control-row" style={{ marginTop: '0.75rem' }}>
            <div>
              <div className="card-title">Solenoid Valve</div>
              <div className="small-text">Status: TERTUTUP</div>
            </div>
            <div className="switch">
              <div className="switch-knob" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FertigationPage

