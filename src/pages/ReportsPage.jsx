function ReportsPage() {
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
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <div
            className="page-title"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b2733' }}
          >
            Laporan & Analisis
          </div>
          <div
            className="page-caption"
            style={{ marginTop: '0.25rem', color: '#5f6c7b', fontSize: '0.95rem' }}
          >
            Download data sensor harian, aktivitas pompa, dan analisis tren.
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
            marginBottom: '0.8rem',
          }}
        >
          <div>
            <div
              className="card-title"
              style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
            >
              Generate Laporan
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Pilih rentang tanggal & jenis laporan
            </div>
          </div>
        </div>
        <div
          className="simple-card-list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '0.9rem',
          }}
        >
          <div>
            <div className="small-text" style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              Tanggal Mulai
            </div>
            <input
              type="date"
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.45rem 0.6rem',
                borderRadius: '0.7rem',
                border: '1px solid #d1d5db',
                fontSize: '0.85rem',
              }}
            />
          </div>
          <div>
            <div className="small-text" style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              Tanggal Akhir
            </div>
            <input
              type="date"
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.45rem 0.6rem',
                borderRadius: '0.7rem',
                border: '1px solid #d1d5db',
                fontSize: '0.85rem',
              }}
            />
          </div>
          <div>
            <div className="small-text" style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              Jenis Laporan
            </div>
            <select
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.45rem 0.6rem',
                borderRadius: '0.7rem',
                border: '1px solid #d1d5db',
                fontSize: '0.85rem',
                backgroundColor: '#ffffff',
              }}
            >
              <option>Data sensor harian</option>
              <option>Aktivitas pompa</option>
              <option>Analisis tren</option>
            </select>
          </div>
        </div>
        <div
          style={{
            marginTop: '0.9rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            className="btn-primary"
            style={{
              padding: '0.55rem 0.95rem',
              borderRadius: '999px',
              border: 'none',
              background:
                'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
              color: '#f7fff9',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)',
            }}
          >
            Export Excel
          </button>
          <button
            type="button"
            style={{
              padding: '0.55rem 0.95rem',
              borderRadius: '999px',
              border: '1px solid #d3e4d8',
              background: '#ffffff',
              fontSize: '0.85rem',
              cursor: 'pointer',
              color: '#374151',
              boxShadow: '0 4px 15px rgba(148, 163, 184, 0.2)',
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

