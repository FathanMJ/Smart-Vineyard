function SmartVisionPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <div
            className="page-title"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b2733' }}
          >
            Smart Vision (AI Diagnosis)
          </div>
          <div
            className="page-caption"
            style={{ marginTop: '0.25rem', color: '#5f6c7b', fontSize: '0.95rem' }}
          >
            Analisis visual daun anggur untuk mendeteksi kesehatan tanaman.
          </div>
        </div>
      </div>

      <section
        className="card-grid-2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
          gap: '1rem',
          marginBottom: '1rem',
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
                Hasil Analisis Terakhir
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Diagnosa AI dari foto terbaru
              </div>
            </div>
          </div>
          <div className="ai-diagnosis">
            <div
              className="ai-label"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.25rem 0.7rem',
                borderRadius: '999px',
                backgroundColor: 'rgba(22, 163, 74, 0.08)',
                color: '#15803d',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              Sehat
            </div>
            <div
              className="ai-tagline"
              style={{
                marginTop: '0.5rem',
                fontSize: '0.86rem',
                color: '#4b5563',
              }}
            >
              Confidence 92% · Tidak ditemukan gejala klorosis / nekrosis.
            </div>
            <div
              className="small-text"
              style={{
                marginTop: '0.6rem',
                fontSize: '0.85rem',
                color: '#4b5563',
                lineHeight: 1.6,
              }}
            >
              Rekomendasi: Pertahankan jadwal fertigasi, pantau kelembapan secara berkala.
            </div>
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
                Rekomendasi Tindakan
              </div>
              <div
                className="card-subtitle"
                style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
              >
                Contoh output untuk defisiensi nutrisi
              </div>
            </div>
          </div>
          <div
            className="small-text"
            style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}
          >
            “Defisiensi nitrogen – tambahkan pupuk urea dengan dosis sesuai standar
            varietas Jupiter. Ulangi evaluasi daun setelah 7–10 hari.”
          </div>
        </div>
      </section>

      <section
        className="card card-animate card-animate-delay-3"
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
              Galeri Foto Daun
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Kumpulan citra dari ESP32-CAM
            </div>
          </div>
        </div>
        <div
          className="small-text"
          style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}
        >
          Grid galeri dan detail foto akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default SmartVisionPage

