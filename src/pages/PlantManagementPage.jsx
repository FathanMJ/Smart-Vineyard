function PlantManagementPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <div
            className="page-title"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b2733' }}
          >
            Manajemen Tanaman
          </div>
          <div
            className="page-caption"
            style={{ marginTop: '0.25rem', color: '#5f6c7b', fontSize: '0.95rem' }}
          >
            Atur varietas anggur dan parameter target untuk kontrol otomatis.
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
            marginBottom: '0.6rem',
          }}
        >
          <div>
            <div
              className="card-title"
              style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
            >
              Daftar Varietas
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Threshold kelembapan & nutrisi
            </div>
          </div>
        </div>
        <div
          className="small-text"
          style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}
        >
          Tabel konfigurasi varietas (Jupiter, dsb) akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default PlantManagementPage

