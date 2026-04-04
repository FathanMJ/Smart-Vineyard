import { useState } from 'react'

function AnalysisPage() {
  const [analysisHistory] = useState([
    {
      id: 1,
      date: '2026-03-12',
      image: 'daun_sehat.jpg',
      disease: 'Tidak Ada Penyakit',
      confidence: '98%',
      status: 'Sehat',
      recommendation: 'Lanjutkan monitoring rutin',
    },
    {
      id: 2,
      date: '2026-03-11',
      image: 'daun_powdery.jpg',
      disease: 'Powdery Mildew',
      confidence: '92%',
      status: 'Terdeteksi',
      recommendation: 'Aplikasikan fungisida sulfur. Kurangi kelembapan.',
    },
    {
      id: 3,
      date: '2026-03-10',
      image: 'daun_downy.jpg',
      disease: 'Downy Mildew',
      confidence: '85%',
      status: 'Terdeteksi',
      recommendation: 'Spray metalaksil. Monitor kelembapan harian.',
    },
  ])

  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Analisis Penyakit Tanaman (AI)</div>
          <div className="page-caption page-caption-lg">
            Hasil analisis AI dari foto daun menggunakan Computer Vision
          </div>
        </div>
      </div>

      {/* Action */}
      <section className="card-grid-2 u-mb-1">
        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Ambil Foto Baru</div>
              <div className="card-subtitle card-subtitle-lg">Gunakan ESP32-CAM untuk capture</div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <button type="button" className="btn-primary btn-pill-primary">
              📷 Capture Foto Daun
            </button>
            <div className="small-text text-sm-muted u-mt-075">
              Foto akan langsung dianalisis oleh AI
            </div>
          </div>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Upload Manual</div>
              <div className="card-subtitle card-subtitle-lg">Atau pilih dari galeri</div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <button type="button" className="btn-pill-outline">
              📁 Pilih File
            </button>
            <div className="small-text text-sm-muted u-mt-075">
              Format: JPG, PNG (max 5MB)
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Results */}
      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Riwayat Analisis</div>
            <div className="card-subtitle card-subtitle-lg">10 analisis terakhir</div>
          </div>
        </div>
        <div className="table-wrapper u-mt-05">
          <table className="table table-compact">
            <thead>
              <tr style={{ borderBottom: '3px solid #27ae60' }}>
                <th style={{ color: '#27ae60' }}>Tanggal</th>
                <th style={{ color: '#27ae60' }}>File</th>
                <th style={{ color: '#27ae60' }}>Penyakit</th>
                <th style={{ color: '#27ae60' }}>Confidence</th>
                <th style={{ color: '#27ae60' }}>Status</th>
                <th style={{ color: '#27ae60' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {analysisHistory.map((result) => (
                <tr key={result.id}>
                  <td>{result.date}</td>
                  <td>{result.image}</td>
                  <td>{result.disease}</td>
                  <td>{result.confidence}</td>
                  <td style={{ fontWeight: 'bold', color: result.status === 'Sehat' ? '#27ae60' : '#e74c3c' }}>
                    {result.status}
                  </td>
                  <td>
                    <button type="button" className="btn-pill-outline" style={{ padding: '4px 8px', fontSize: '0.85rem' }}>
                      Lihat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="small-text text-sm-muted u-mt-05" style={{ textAlign: 'center', padding: '12px', color: '#95a5a6' }}>
            Riwayat analisis AI penyakit
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="card card-animate card-elevated u-mt-1">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Rekomendasi</div>
            <div className="card-subtitle card-subtitle-lg">Berdasarkan analisis terbaru</div>
          </div>
        </div>
        <div className="simple-list u-mt-05">
          {analysisHistory.slice(0, 2).map((result) => (
            <div
              key={result.id}
              style={{
                padding: '12px',
                marginBottom: '12px',
                borderLeft: '4px solid #f39c12',
                backgroundColor: '#fef5e7',
                borderRadius: '4px',
              }}
            >
              <div className="small-text" style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                {result.disease} ({result.date})
              </div>
              <div className="small-text" style={{ fontSize: '0.9rem' }}>
                {result.recommendation}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AnalysisPage
