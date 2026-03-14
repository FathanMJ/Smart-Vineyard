import { useState, useEffect } from 'react';
import { getLatestDiagnosis, getDiagnosisHistory } from '../services/diagnosisApi';

function SmartVisionPage() {
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const DEVICE_ID = "ESP32-MAC-A001"; 
  const BASE_URL = "http://localhost:5000"; // Sesuaikan dengan port backend Anda

  useEffect(() => {
    const fetchAIStatus = async () => {
      try {
        const res = await getLatestDiagnosis(DEVICE_ID);
        if (res.status === 'success') setLatest(res.data);
        
        const resHistory = await getDiagnosisHistory(DEVICE_ID);
        if (resHistory.status === 'success') setHistory(resHistory.data);
      } catch (err) {
        console.error("Gagal ambil data AI:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAIStatus();
  }, []);

  if (loading) return <div className="page page-with-padding">Menganalisis Data AI...</div>;

  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Smart Vision (AI Diagnosis)</div>
          <div className="page-caption page-caption-lg">Analisis visual daun anggur via Roboflow AI.</div>
        </div>
      </div>

      <section className="card-grid-2 grid-2-wide u-mb-1">
        {/* HASIL ANALISIS DINAMIS DENGAN GAMBAR */}
        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Hasil Analisis Terakhir</div>
              <div className="card-subtitle card-subtitle-lg">
                {latest ? new Date(latest.createdAt).toLocaleString('id-ID') : 'Tidak ada data'}
              </div>
            </div>
          </div>
          
          {/* TAMPILAN GAMBAR UTAMA */}
          <div className="u-p-1 u-text-center">
            {latest?.image_url ? (
              <img 
                src={`${BASE_URL}${latest.image_url}`} 
                alt="Diagnosis Daun" 
                className="u-img-fluid"
                style={{ maxHeight: '250px', borderRadius: '12px', objectFit: 'cover', border: '1px solid #ddd' }}
              />
            ) : (
              <div style={{ height: '200px', backgroundColor: '#f0f0f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="small-text">Foto tidak tersedia</span>
              </div>
            )}
          </div>

          <div className="ai-diagnosis u-mt-05">
            <div className={`ai-label ${latest?.hasil_diagnosis === 'Sehat' ? 'ai-label-pill-success' : 'ai-label-pill-critical'}`}>
              {latest ? latest.hasil_diagnosis : 'Belum Ada Data'}
            </div>
            <div className="ai-tagline ai-tagline-body u-mt-05">
              Confidence: <strong>{latest ? (latest.confidence_score * 100).toFixed(2) : 0}%</strong>
            </div>
          </div>
        </div>

        {/* REKOMENDASI TINDAKAN */}
        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Rekomendasi Tindakan</div>
              <div className="card-subtitle card-subtitle-lg">Berdasarkan hasil diagnosa AI</div>
            </div>
          </div>
          <div className="small-text text-body" style={{ padding: '15px', lineHeight: '1.6' }}>
            {latest ? latest.saran_tindakan : "Silakan ambil foto daun menggunakan ESP32-CAM untuk memulai analisis."}
          </div>
        </div>
      </section>

      {/* GALERI RIWAYAT DIAGNOSIS */}
      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top u-mb-1">
          <div>
            <div className="card-title card-title-lg">Riwayat Diagnosa AI</div>
            <div className="card-subtitle card-subtitle-lg">Daftar deteksi penyakit sebelumnya</div>
          </div>
        </div>
        <div className="u-mt-1 u-overflow-x">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Foto</th>
                <th style={{ padding: '12px' }}>Waktu</th>
                <th style={{ padding: '12px' }}>Hasil Diagnosis</th>
                <th style={{ padding: '12px' }}>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 ? history.map((log) => (
                <tr key={log.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                  <td style={{ padding: '12px' }}>
                    <img 
                      src={`${BASE_URL}${log.image_url}`} 
                      alt="thumb" 
                      style={{ width: '50px', height: '50px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #eee' }}
                      onError={(e) => { e.target.src = "https://via.placeholder.com/50?text=NA" }}
                    />
                  </td>
                  <td style={{ padding: '12px' }}>{new Date(log.createdAt).toLocaleString('id-ID')}</td>
                  <td style={{ padding: '12px' }}>
                    <span className={`u-text-bold ${log.hasil_diagnosis === 'Sehat' ? 'u-text-success' : 'u-text-danger'}`}>
                      {log.hasil_diagnosis}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>{(log.confidence_score * 100).toFixed(1)}%</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>Belum ada riwayat analisis.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default SmartVisionPage;