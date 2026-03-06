function ReportsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Laporan & Analisis</div>
          <div className="page-caption">
            Download data sensor harian, aktivitas pompa, dan analisis tren.
          </div>
        </div>
      </div>

      <section className="card card-animate card-animate-delay-1">
        <div className="card-header">
          <div>
            <div className="card-title">Generate Laporan</div>
            <div className="card-subtitle">Pilih rentang tanggal & jenis laporan</div>
          </div>
        </div>
        <div className="simple-card-list">
          <div>
            <div className="small-text">Tanggal Mulai</div>
            <input type="date" />
          </div>
          <div>
            <div className="small-text">Tanggal Akhir</div>
            <input type="date" />
          </div>
          <div>
            <div className="small-text">Jenis Laporan</div>
            <select>
              <option>Data sensor harian</option>
              <option>Aktivitas pompa</option>
              <option>Analisis tren</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            className="btn-primary"
            style={{
              padding: '0.5rem 0.9rem',
              borderRadius: '0.7rem',
              border: 'none',
              background:
                'linear-gradient(135deg, #18c46b 0%, #0f7a4a 100%)',
              color: '#f7fff9',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Export Excel
          </button>
          <button
            type="button"
            style={{
              padding: '0.5rem 0.9rem',
              borderRadius: '0.7rem',
              border: '1px solid #d3e4d8',
              background: '#ffffff',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, transform 0.15s ease',
            }}
          >
            Export PDF
          </button>
        </div>
      </section>
    </div>
  )
}

export default ReportsPage

