import { useState, useMemo, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getLatestSensorData } from '../services/sensorApi' // Sesuaikan path

function DashboardPage() {
  const [pumpOn, setPumpOn] = useState(false)
  const [injectOn, setInjectOn] = useState(false)
  const [sensorData, setSensorData] = useState([])
  const [loading, setLoading] = useState(true)

  const DEVICE_ID = "ESP32-MAC-A001"; // ID Perangkat Utama

  // Fetch Data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLatestSensorData(DEVICE_ID);
        if (response.status === 'success') {
          // Data dari API (DESC) dibalik agar grafik berjalan dari kiri ke kanan (ASC)
          setSensorData([...response.data].reverse());
        }
      } catch (error) {
        console.error("Gagal load data dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 15000); // Auto refresh 15 detik
    return () => clearInterval(interval);
  }, []);

  // Ambil data paling baru untuk tampilan angka (Snapshot)
  const latest = sensorData.length > 0 ? sensorData[sensorData.length - 1] : null;

  // Format data untuk Recharts
  const chartData = useMemo(() => {
    return sensorData.map(item => ({
      time: new Date(item.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      soilMoisture: item.moisture_val,
      N: item.n_val,
      P: item.p_val,
      K: item.k_val,
      pH: item.ph_val
    }));
  }, [sensorData]);

  return (
    <div className="page page-with-padding page-shell">
      <section className="card-grid-3 u-mb-1">
        {/* Card NPK - Dinamis */}
        <div className="card card-animate card-animate-delay-1 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Nutrisi Tanah (NPK)</div>
              <div className="card-subtitle card-subtitle-lg">Kandungan nutrisi terkini</div>
            </div>
            <span className={`badge ${latest?.n_val > 30 ? 'badge-success' : 'badge-critical'}`}>
               {latest?.n_val > 30 ? 'Optimal' : 'Rendah'}
            </span>
          </div>
          <div className="npk-values">
            <div className="npk-item">
              <span className="npk-label">N</span>
              <span className="npk-value">{latest ? latest.n_val : '--'}</span>
            </div>
            <div className="npk-item">
              <span className="npk-label">P</span>
              <span className="npk-value">{latest ? latest.p_val : '--'}</span>
            </div>
            <div className="npk-item">
              <span className="npk-label">K</span>
              <span className="npk-value">{latest ? latest.k_val : '--'}</span>
            </div>
          </div>
          <div className="npk-footer">
            <span>pH Tanah: <strong>{latest ? latest.ph_val : '--'}</strong></span>
            <span className="muted">ID: {DEVICE_ID}</span>
          </div>
        </div>

        {/* Kondisi Lingkungan - Dinamis */}
        <div className="card card-animate card-animate-delay-2 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Kondisi Lingkungan</div>
              <div className="card-subtitle card-subtitle-lg">Status kelembapan area akar</div>
            </div>
          </div>
          <div className="u-mt-04">
            <span className="big-number">{latest ? latest.moisture_val : '--'}%</span>{' '}
            <span className="muted">Kelembapan tanah</span>
          </div>
        </div>

        {/* Stok Air (Statik sementara) */}
        <div className="card card-animate card-animate-delay-3 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Stok Air & Nutrisi</div>
              <div className="card-subtitle card-subtitle-lg">Tandon utama & pupuk cair</div>
            </div>
          </div>
          <div className="tank-list">
            <div className="tank-row">
              <span>Air Baku (Tandon Utama)</span>
              <span className="small-text">85%</span>
            </div>
            <div className="tank-row"><div className="progress-track"><div className="progress-bar-primary" style={{width: '85%'}} /></div></div>
            <div className="tank-row">
              <span>Pupuk Cair (Pekat)</span>
              <span className="small-text">40%</span>
            </div>
            <div className="tank-row"><div className="progress-track"><div className="progress-bar-accent" style={{width: '40%'}} /></div></div>
          </div>
        </div>
      </section>

      {/* Kontrol Manual & AI Diagnosis */}
      <section className="card-grid-2 u-mb-1">
        <div className="card card-animate card-animate-delay-4 card-elevated">
          <div className="card-header card-header-top">
            <div><div className="card-title card-title-lg">AI Diagnosis (Visual)</div></div>
          </div>
          <div className="ai-diagnosis">
             <div className="ai-label">Normal</div>
             <div className="ai-tagline">Belum ada gejala penyakit terdeteksi pada daun.</div>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-5 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Kontrol Fertigasi Manual</div>
              <div className="card-subtitle card-subtitle-lg">Pompa & injeksi nutrisi</div>
            </div>
            <span className="badge badge-pill-neutral">Mode Manual</span>
          </div>
          {/* Switch Pompa */}
          <div className="control-row u-mt-025">
            <div>
              <div className="card-title">Pompa Irigasi</div>
              <div className="small-text">Status: {pumpOn ? 'MENYIRAM' : 'STANDBY'}</div>
            </div>
            <button className={`switch ${pumpOn ? 'switch-on' : ''}`} onClick={() => setPumpOn(!pumpOn)}>
              <div className="switch-knob" />
            </button>
          </div>
        </div>
      </section>

      {/* Grafik Tren - Dinamis */}
      <section className="card chart-card card-animate card-animate-delay-9 card-elevated">
        <div className="chart-header chart-header-wrap">
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div className="card-title card-title-lg">Tren Real-Time (Data Terakhir)</div>
            <div className="card-subtitle card-subtitle-lg">Visualisasi fluktuasi sensor tanah</div>
          </div>
        </div>
        <div style={{ width: '100%', minHeight: '380px', padding: '15px 0', backgroundColor: '#fafbfc', borderRadius: '8px', marginTop: '15px' }}>
          <ResponsiveContainer width="100%" height={360}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7e3" />
              <XAxis dataKey="time" stroke="#789487" tick={{ fill: '#789487' }} />
              <YAxis stroke="#789487" tick={{ fill: '#789487' }} />
              <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #27ae60', borderRadius: '0.8rem' }} />
              <Legend wrapperStyle={{ paddingTop: '1rem' }} />
              <Line type="monotone" dataKey="soilMoisture" stroke="#27ae60" name="Moisture (%)" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="N" stroke="#3498db" name="Nitrogen" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="pH" stroke="#e74c3c" name="pH" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  )
}

export default DashboardPage