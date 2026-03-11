function SmartVisionPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Smart Vision (AI Diagnosis)</div>
          <div className="page-caption page-caption-lg">
            Analisis visual daun anggur untuk mendeteksi kesehatan tanaman.
          </div>
        </div>
      </div>

      <section
        className="card-grid-2 grid-2-wide u-mb-1"
      >
        <div
          className="card card-animate card-animate-delay-1 card-elevated"
        >
          <div
            className="card-header card-header-top"
          >
            <div>
              <div className="card-title card-title-lg">Hasil Analisis Terakhir</div>
              <div className="card-subtitle card-subtitle-lg">
                Diagnosa AI dari foto terbaru
              </div>
            </div>
          </div>
          <div className="ai-diagnosis">
            <div className="ai-label ai-label-pill-success">
              Sehat
            </div>
            <div className="ai-tagline ai-tagline-body">
              Confidence 92% · Tidak ditemukan gejala klorosis / nekrosis.
            </div>
            <div className="small-text text-body u-mt-06">
              Rekomendasi: Pertahankan jadwal fertigasi, pantau kelembapan secara berkala.
            </div>
          </div>
        </div>

        <div
          className="card card-animate card-animate-delay-2 card-elevated"
        >
          <div
            className="card-header card-header-top"
          >
            <div>
              <div className="card-title card-title-lg">Rekomendasi Tindakan</div>
              <div className="card-subtitle card-subtitle-lg">
                Contoh output untuk defisiensi nutrisi
              </div>
            </div>
          </div>
          <div className="small-text text-body">
            “Defisiensi nitrogen – tambahkan pupuk urea dengan dosis sesuai standar
            varietas Jupiter. Ulangi evaluasi daun setelah 7–10 hari.”
          </div>
        </div>
      </section>

      <section
        className="card card-animate card-animate-delay-3 card-elevated"
      >
        <div
          className="card-header card-header-top"
        >
          <div>
            <div className="card-title card-title-lg">Galeri Foto Daun</div>
            <div className="card-subtitle card-subtitle-lg">
              Kumpulan citra dari ESP32-CAM
            </div>
          </div>
        </div>
        <div className="small-text text-body">
          Grid galeri dan detail foto akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default SmartVisionPage

