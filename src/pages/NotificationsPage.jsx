function NotificationsPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <div
            className="page-title"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b2733' }}
          >
            Notifikasi & Alert
          </div>
          <div
            className="page-caption"
            style={{ marginTop: '0.25rem', color: '#5f6c7b', fontSize: '0.95rem' }}
          >
            Riwayat peringatan sistem: tandon air, kelembapan rendah, sensor offline.
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
          marginBottom: '1rem',
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
              Filter Riwayat
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Pilih rentang tanggal & tipe alert
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
              Tipe Alert
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
              <option>Semua</option>
              <option>Tandon air kosong</option>
              <option>Kelembapan tanah rendah</option>
              <option>Sensor offline</option>
            </select>
          </div>
        </div>
      </section>

      <section
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
              Riwayat Notifikasi
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Daftar alert dengan severity & status penanganan.
            </div>
          </div>
        </div>
        <div
          className="small-text"
          style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}
        >
          Tabel riwayat notifikasi akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default NotificationsPage

