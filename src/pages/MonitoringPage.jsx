import { useState, useEffect, useCallback } from 'react';
import { getLatestSensorData } from '../services/sensorApi'; // Sesuaikan path ini dengan struktur folder Anda!

function MonitoringPage() {
  // === STATE MANAGEMENT ===
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  
  // State untuk form filter (bisa dikembangkan nanti)
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedParam, setSelectedParam] = useState('Semua Parameter');
  
  const DEVICE_ID = "ESP32-MAC-A001"; // ID Perangkat

  // === FUNGSI TARIK DATA & RETRY LOGIC ===
  const fetchData = useCallback(async () => {
    try {
      const response = await getLatestSensorData(DEVICE_ID);
      setSensorData(response.data);
      setError(''); 
      setRetryCount(0); 
    } catch (err) {
      console.error("🔴 Gagal menarik data:", err);
      if (retryCount < 3) {
        setRetryCount(prev => prev + 1);
      } else {
        setError('Sistem gagal menghubungi server setelah 3 kali percobaan (API Error).');
      }
    } finally {
      setLoading(false);
    }
  }, [retryCount]);

  // === TRIGGER: AUTO REFRESH ===
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 15000); 
    return () => clearInterval(intervalId);
  }, [fetchData]);

  const latestData = sensorData.length > 0 ? sensorData[0] : null;

  return (
    <div className="page page-with-padding page-shell">
      {/* Header */}
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Monitoring Sensor</div>
          <div className="page-caption page-caption-lg">
            Lihat tren soil moisture, pH, NPK, dan suhu secara real-time.
          </div>
        </div>
      </div>

      {error && (
        <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
          <strong>⚠️ Peringatan:</strong> {error}
        </div>
      )}

      {/* Filter + Ringkasan cepat */}
      <section className="card-grid-3 u-mb-1">
        
        {/* === KOTAK FILTER DATA (DIKEMBALIKAN) === */}
        <div className="card card-animate card-animate-delay-1 card-elevated card-stretch">
          <div className="card-header card-header-top-md">
            <div>
              <div className="card-title card-title-lg">Filter Data</div>
              <div className="card-subtitle card-subtitle-lg">Pilih rentang waktu & parameter</div>
            </div>
          </div>
          <div className="simple-card-list form-grid-2 u-mt-05">
            <div>
              <div className="small-text text-sm-muted">Tanggal Mulai</div>
              <input 
                type="date" 
                className="form-control" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                style={{ width: '100%', padding: '5px' }}
              />
            </div>
            <div>
              <div className="small-text text-sm-muted">Tanggal Akhir</div>
              <input 
                type="date" 
                className="form-control" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)} 
                style={{ width: '100%', padding: '5px' }}
              />
            </div>
            <div>
              <div className="small-text text-sm-muted" style={{ marginTop: '10px' }}>Parameter</div>
              <select 
                className="form-control" 
                value={selectedParam} 
                onChange={(e) => setSelectedParam(e.target.value)}
                style={{ width: '100%', padding: '5px' }}
              >
                <option>Semua Parameter</option>
                <option>Soil Moisture</option>
                <option>pH Tanah</option>
                <option>NPK</option>
              </select>
            </div>
          </div>
          <div className="btn-row u-mt-075" style={{ marginTop: '15px' }}>
            {/* Tombol diberi style warna hijau */}
            <button type="button" className="btn-primary btn-pill-primary" style={{ backgroundColor: '#1e7e34', borderColor: '#1e7e34', color: '#fff', marginRight: '10px', padding: '5px 15px', borderRadius: '4px' }}>
              Terapkan Filter
            </button>
            <button type="button" className="btn-pill-outline" style={{ padding: '5px 15px', borderRadius: '4px', border: '1px solid #ccc' }} onClick={() => { setStartDate(''); setEndDate(''); setSelectedParam('Semua Parameter'); }}>
              Reset
            </button>
          </div>
        </div>

{/* SNAPSHOT LINGKUNGAN */}
        <div className="card card-animate card-animate-delay-2 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Snapshot Lingkungan</div>
              <div className="card-subtitle card-subtitle-lg">
                Kondisi terkini dari lahan
              </div>
            </div>
          </div>
          
          <div className="simple-card-list u-mt-05">
            {/* === KETERANGAN LOKASI SENSOR === */}
            <div style={{ paddingBottom: '10px', borderBottom: '1px dashed #eee', marginBottom: '10px' }}>
              <span className="small-text text-sm-muted">Sumber Data: </span>
              <span style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                📍 Blok A ({DEVICE_ID})
              </span>
            </div>

            {loading ? (
              <div className="small-text">Memuat data terkini...</div>
            ) : latestData ? (
              <>
                <div className="small-stat">
                  <div className="small-text text-sm-muted">Soil Moisture</div>
                  <div className="big-number" style={{ color: '#1e7e34' }}>{latestData.moisture_val}%</div>
                  <div className="small-text text-sm-muted">Rata-rata kelembapan akar</div>
                </div>
                <div className="small-stat">
                  <div className="small-text text-sm-muted">pH Tanah</div>
                  <div className="big-number" style={{ color: '#1e7e34' }}>{latestData.ph_val}</div>
                  <div className="small-text text-sm-muted">Tingkat keasaman tanah</div>
                </div>
              </>
            ) : (
              <div className="small-text text-sm-muted">Data Tidak Tersedia</div>
            )}
          </div>
        </div>
        
        {/* STATUS SENSOR */}
        <div className="card card-animate card-animate-delay-3 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Status Sensor</div>
              <div className="card-subtitle card-subtitle-lg">Ringkasan konektivitas node IoT</div>
            </div>
          </div>
          <div className="simple-list u-mt-05">
            <div className="small-text">
              • Node {DEVICE_ID} – <strong style={{ color: error ? 'red' : '#1e7e34' }}>
                {error ? 'Offline' : 'Online'}
              </strong> 
            </div>
          </div>
        </div>
      </section>

      {/* === TABEL DATA SENSOR (PINDAH KE ATAS GRAFIK) === */}
      <section className="card card-animate card-animate-delay-5 card-elevated u-mb-1">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Tabel Data Sensor</div>
            <div className="card-subtitle card-subtitle-lg">
              Data mentah riwayat pembacaan
            </div>
          </div>
        </div>
        <div className="table-wrapper u-mt-05" style={{ overflowX: 'auto' }}>
          <table className="table table-compact" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              {/* Header tabel diwarnai hijau muda */}
              <tr style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', borderBottom: '2px solid #1e7e34' }}>
                <th style={{ padding: '10px' }}>Waktu (Timestamp)</th>
                {/* === KOLOM BARU UNTUK LOKASI SENSOR === */}
                <th style={{ padding: '10px' }}>Lokasi Sensor</th>
                <th style={{ padding: '10px' }}>Soil Moisture (%)</th>
                <th style={{ padding: '10px' }}>pH</th>
                <th style={{ padding: '10px' }}>N (mg/kg)</th>
                <th style={{ padding: '10px' }}>P (mg/kg)</th>
                <th style={{ padding: '10px' }}>K (mg/kg)</th>
              </tr>
            </thead>
            <tbody>
              {loading && sensorData.length === 0 ? (
                // ColSpan diubah dari 6 menjadi 7 karena ada tambahan 1 kolom
                <tr><td colSpan="7" style={{ padding: '10px' }}>Memuat data...</td></tr>
              ) : sensorData.length > 0 ? (
                sensorData.map((row, index) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <td style={{ padding: '10px' }}>{new Date(row.timestamp).toLocaleString('id-ID')}</td>
                    
                    {/* === ISI DATA LOKASI SENSOR === */}
                    <td style={{ padding: '10px' }}>
                      <span style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                        Blok A
                      </span>
                    </td>

                    <td style={{ padding: '10px' }}>{row.moisture_val}</td>
                    <td style={{ padding: '10px' }}>{row.ph_val}</td>
                    <td style={{ padding: '10px' }}>{row.n_val}</td>
                    <td style={{ padding: '10px' }}>{row.p_val}</td>
                    <td style={{ padding: '10px' }}>{row.k_val}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  {/* ColSpan diubah dari 6 menjadi 7 */}
                  <td colSpan="7" style={{ textAlign: 'center', padding: '10px' }}>Tidak ada data tersedia</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* === GRAFIK HISTORIS (SEKARANG DI BAWAH) === */}
      <section className="card chart-card card-animate card-animate-delay-4 card-elevated u-mb-1">
        <div className="chart-header chart-header-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
          <div>
            <div className="card-title card-title-lg">Grafik Historis Sensor</div>
            <div className="card-subtitle card-subtitle-lg">Visualisasi tren parameter</div>
          </div>
          {/* Tag Pill dengan nuansa hijau */}
          <div className="tag-row">
            <span className="tag-pill" style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', marginRight: '5px' }}>Soil Moisture</span>
            <span className="tag-pill" style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', marginRight: '5px' }}>NPK</span>
            <span className="tag-pill" style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>pH</span>
          </div>
        </div>
        <div className="chart-placeholder placeholder-striped" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', marginTop: '15px', border: '1px dashed #ccc', borderRadius: '8px' }}>
          Area Grafik (Menunggu Integrasi Library)
        </div>
      </section>

    </div>
  );
}

export default MonitoringPage;