import { useState, useEffect, useCallback, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

  // Generate chart data - 24-hour mock data
  const chartData = useMemo(() => {
    const data = []
    const now = new Date()
    for (let i = 23; i >= 0; i--) {
      const time = new Date(now)
      time.setHours(time.getHours() - i)
      data.push({
        time: time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        soilMoisture: 40 + Math.random() * 40,
        pH: 6.0 + Math.random() * 1.5,
        N: 20 + Math.random() * 30,
      })
    }
    return data
  }, [])

  return (
    <div className="page page-with-padding page-shell" style={{ backgroundColor: '#f7fafc' }}>
      {/* Header */}
      <div className="page-header u-mb-15" style={{ marginBottom: '25px' }}>
        <div>
          <div className="page-title page-title-lg">Monitoring Sensor</div>
          <div className="page-caption page-caption-lg">
            Lihat tren soil moisture, pH, dan NPK secara real-time.
          </div>
        </div>
      </div>

      {error && (
        <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '12px 15px', borderRadius: '6px', marginBottom: '20px', border: '1px solid #ef5350' }}>
          <strong>⚠️ Peringatan:</strong> {error}
        </div>
      )}

      {/* Filter + Ringkasan cepat */}
      <section className="card-grid-3 u-mb-1" style={{ marginBottom: '30px', gap: '15px' }}>
        
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

      {/* === TABEL DATA SENSOR === */}
      <section className="card card-animate card-animate-delay-5 card-elevated u-mb-1" style={{ marginBottom: '30px' }}>
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

      {/* === GRAFIK HISTORIS === */}
      <section className="card chart-card card-animate card-animate-delay-4 card-elevated u-mb-1" style={{ marginBottom: '30px' }}>
        <div className="chart-header chart-header-wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #eee', gap: '10px' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div className="card-title card-title-lg">Grafik Historis Sensor</div>
            <div className="card-subtitle card-subtitle-lg">Visualisasi tren parameter 24 jam terakhir</div>
          </div>
          {/* Tag Pill dengan nuansa hijau */}
          <div className="tag-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag-pill" style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>Soil Moisture</span>
            <span className="tag-pill" style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>pH</span>
            <span className="tag-pill" style={{ backgroundColor: '#e8f5e9', color: '#1e7e34', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>N</span>
          </div>
        </div>
        <div style={{ width: '100%', padding: 'clamp(0.75rem, 2%, 1.5rem) 0', minHeight: '380px', backgroundColor: '#fafbfc', borderRadius: '8px', marginTop: '15px' }}>
          <ResponsiveContainer width="100%" height={360}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7e3" />
              <XAxis 
                dataKey="time" 
                stroke="#789487"
                style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)' }}
                tick={{ fill: '#789487' }}
              />
              <YAxis 
                stroke="#789487"
                style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)' }}
                tick={{ fill: '#789487' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #27ae60',
                  borderRadius: '0.8rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                }}
                labelStyle={{ color: '#0f5a3a', fontWeight: 'bold' }}
                formatter={(value) => value.toFixed(1)}
              />
              <Legend wrapperStyle={{ paddingTop: '1rem', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)' }} />
              <Line type="monotone" dataKey="soilMoisture" stroke="#27ae60" name="Soil Moisture (%)" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="pH" stroke="#e74c3c" name="pH Tanah" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="N" stroke="#3498db" name="N (mg/kg)" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

    </div>
  );
}

export default MonitoringPage;