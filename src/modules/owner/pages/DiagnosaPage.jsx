import { useState } from 'react'

function OwnerDiagnosaPage() {
  const [diagnosisResults] = useState([
    {
      id: 1,
      date: '2026-03-12',
      blok: 'Blok A',
      disease: 'Powdery Mildew',
      severity: 'Tinggi',
      confidence: '92%',
      recommendation: 'Aplikasikan fungisida sulfur. Tingkatkan ventilasi & kurangi kelembapan.',
      status: 'Terdeteksi',
    },
    {
      id: 2,
      date: '2026-03-11',
      blok: 'Blok B',
      disease: 'Downy Mildew',
      severity: 'Sedang',
      confidence: '78%',
      recommendation: 'Spray dengan metalaksil. Monitor kelembapan harian.',
      status: 'Monitoring',
    },
    {
      id: 3,
      date: '2026-03-10',
      blok: 'Blok C',
      disease: 'Black Rot',
      severity: 'Rendah',
      confidence: '64%',
      recommendation: 'Observasi lebih lanjut. Jangan ada tanda risiko tinggi.',
      status: 'Stabil',
    },
  ])

  return (
    <div className="page page-with-padding page-shell">
      {/* Header */}
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Diagnosa Penyakit Tanaman</div>
          <div className="page-caption page-caption-lg">
            Deteksi otomatis penyakit menggunakan AI vision dari foto daun & analisis parameter lingkungan.
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <section className="card-grid-3 u-mb-1">
        <div className="card card-animate card-elevated card-stretch">
          <div className="card-header card-header-top-md">
            <div>
              <div className="card-title card-title-lg">Status Kesehatan</div>
              <div className="card-subtitle card-subtitle-lg">Keseluruhan semua blok</div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <div className="small-stat">
              <div className="small-text text-sm-muted">Penyakit Terdeteksi</div>
              <div className="big-number" style={{ color: '#e74c3c' }}>3</div>
              <div className="small-text text-sm-muted">Perlu penanganan</div>
            </div>
            <div className="small-stat">
              <div className="small-text text-sm-muted">Tanaman Sehat</div>
              <div className="big-number" style={{ color: '#27ae60' }}>12</div>
              <div className="small-text text-sm-muted">Tidak ada anomali</div>
            </div>
          </div>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">AI Vision Score</div>
              <div className="card-subtitle card-subtitle-lg">Akurasi deteksi minggu ini</div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <div className="small-stat">
              <div className="small-text text-sm-muted">Akurasi Deteksi</div>
              <div className="big-number">87%</div>
              <div className="small-text text-sm-muted">Berdasarkan 24 sampel</div>
            </div>
          </div>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Tindakan Cepat</div>
              <div className="card-subtitle card-subtitle-lg">Aksi paling mendesak</div>
            </div>
          </div>
          <div className="simple-list u-mt-05">
            <div className="small-text" style={{ color: '#e74c3c', fontWeight: 'bold', marginBottom: '8px' }}>
              🚨 Aplikasikan Fungisida
            </div>
            <div className="small-text" style={{ fontSize: '0.85rem' }}>
              Powdery Mildew Blok A – Tinggi (92% confidence)
            </div>
            <button type="button" className="btn-primary btn-pill-primary u-mt-075">
              Lihat Detail
            </button>
          </div>
        </div>
      </section>

      {/* Diagnosis History Table */}
      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Riwayat Diagnosa</div>
            <div className="card-subtitle card-subtitle-lg">Deteksi penyakit terbaru dari AI Vision</div>
          </div>
        </div>
        <div className="table-wrapper u-mt-05">
          <table className="table table-compact">
            <thead>
              <tr style={{ borderBottom: '3px solid #27ae60' }}>
                <th style={{ color: '#27ae60' }}>Tanggal</th>
                <th style={{ color: '#27ae60' }}>Blok</th>
                <th style={{ color: '#27ae60' }}>Penyakit</th>
                <th style={{ color: '#27ae60' }}>Severity</th>
                <th style={{ color: '#27ae60' }}>Confidence</th>
                <th style={{ color: '#27ae60' }}>Status</th>
                <th style={{ color: '#27ae60' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {diagnosisResults.map((result) => (
                <tr key={result.id}>
                  <td>{result.date}</td>
                  <td>{result.blok}</td>
                  <td>{result.disease}</td>
                  <td style={{ color: result.severity === 'Tinggi' ? '#e74c3c' : result.severity === 'Sedang' ? '#f39c12' : '#27ae60', fontWeight: 'bold' }}>
                    {result.severity}
                  </td>
                  <td>{result.confidence}</td>
                  <td style={{ fontWeight: 'bold' }}>{result.status}</td>
                  <td>
                    <button type="button" className="btn-pill-outline" style={{ padding: '4px 8px', fontSize: '0.85rem' }}>
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="small-text text-sm-muted u-mt-05" style={{ textAlign: 'center', padding: '12px', color: '#95a5a6' }}>
            Riwayat diagnosa penyakit tanaman
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="card card-animate card-elevated u-mt-1">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Rekomendasi Penanganan</div>
            <div className="card-subtitle card-subtitle-lg">Saran dari sistem AI berdasarkan diagnosis</div>
          </div>
        </div>
        <div className="simple-list u-mt-05">
          {diagnosisResults.map((result) => (
            <div
              key={result.id}
              style={{
                padding: '12px',
                marginBottom: '12px',
                borderLeft: '4px solid #2b8aef',
                backgroundColor: '#f0f8ff',
                borderRadius: '4px',
              }}
            >
              <div className="small-text" style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                {result.blok} – {result.disease} ({result.severity})
              </div>
              <div className="small-text" style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
                {result.recommendation}
              </div>
              <button type="button" className="btn-pill-outline" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                Tandai Selesai
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OwnerDiagnosaPage
