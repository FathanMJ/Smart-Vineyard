function SmartVisionPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Smart Vision (AI Diagnosis)</div>
          <div className="page-caption">
            Analisis visual daun anggur untuk mendeteksi kesehatan tanaman.
          </div>
        </div>
      </div>

      <section className="card-grid-2">
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Hasil Analisis Terakhir</div>
              <div className="card-subtitle">Diagnosa AI dari foto terbaru</div>
            </div>
          </div>
          <div className="ai-diagnosis">
            <div className="ai-label">Sehat</div>
            <div className="ai-tagline">
              Confidence 92% · Tidak ditemukan gejala klorosis / nekrosis.
            </div>
            <div className="small-text" style={{ marginTop: '0.4rem' }}>
              Rekomendasi: Pertahankan jadwal fertigasi, pantau kelembapan secara berkala.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Rekomendasi Tindakan</div>
              <div className="card-subtitle">Contoh output untuk defisiensi nutrisi</div>
            </div>
          </div>
          <div className="small-text">
            “Defisiensi nitrogen – tambahkan pupuk urea dengan dosis sesuai standar
            varietas Jupiter. Ulangi evaluasi daun setelah 7–10 hari.”
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Galeri Foto Daun</div>
            <div className="card-subtitle">Kumpulan citra dari ESP32-CAM</div>
          </div>
        </div>
        <div className="small-text">
          Grid galeri dan detail foto akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default SmartVisionPage

