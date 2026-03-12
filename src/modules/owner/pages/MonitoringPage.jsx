import React, { useEffect, useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function OwnerMonitoringPage() {
  const [startDate, setStartDate] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() - 7)
    return d.toISOString().slice(0, 10)
  })
  const [endDate, setEndDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [parameter, setParameter] = useState('Soil Moisture')
  const [resolution, setResolution] = useState('Per 1 jam')
  const [dataPoints, setDataPoints] = useState([])

  // sensor status (static for now)
  const sensorStatus = [
    { name: 'Node Sensor 1', status: 'Online', sync: '10 detik' },
    { name: 'Node Sensor 2', status: 'Online', sync: '30 detik' },
    { name: 'ESP32-CAM', status: 'Online', sync: 'Snapshot aktif' },
  ]

  useEffect(() => {
    applyFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function parseResolutionMinutes(res) {
    if (res.includes('10')) return 10
    if (res.includes('30')) return 30
    if (res.includes('1 jam')) return 60
    return 1440 // per hari
  }

  function generateMockValueFor(param) {
    switch (param) {
      case 'Soil Moisture':
        return +(40 + Math.random() * 40).toFixed(1)
      case 'pH Tanah':
        return +(5.5 + Math.random() * 1.5).toFixed(2)
      case 'N':
      case 'P':
      case 'K':
        return +(10 + Math.random() * 40).toFixed(1)
      case 'EC':
        return +(0.2 + Math.random() * 1.6).toFixed(2)
      case 'Suhu Udara':
        return +(18 + Math.random() * 12).toFixed(1)
      case 'Kelembapan Udara':
        return +(40 + Math.random() * 50).toFixed(1)
      default:
        return +(Math.random() * 100).toFixed(1)
    }
  }

  function applyFilter() {
    const s = new Date(startDate)
    const e = new Date(endDate)
    if (isNaN(s) || isNaN(e) || s > e) {
      setDataPoints([])
      return
    }

    const minutes = parseResolutionMinutes(resolution)
    const points = []
    const cur = new Date(s)
    while (cur <= e) {
      const ts = new Date(cur).toISOString()
      const point = {
        timestamp: ts,
        soilMoisture: generateMockValueFor('Soil Moisture'),
        pH: generateMockValueFor('pH Tanah'),
        N: generateMockValueFor('N'),
        P: generateMockValueFor('P'),
        K: generateMockValueFor('K'),
        EC: generateMockValueFor('EC'),
        temp: generateMockValueFor('Suhu Udara'),
        humidity: generateMockValueFor('Kelembapan Udara'),
      }
      points.push(point)
      cur.setMinutes(cur.getMinutes() + minutes)
      // prevent infinite loop on invalid minute value
      if (points.length > 2000) break
    }
    setDataPoints(points)
  }

  const snapshot = useMemo(() => {
    if (!dataPoints || dataPoints.length === 0) return {}
    const avg = (key) => {
      const sum = dataPoints.reduce((acc, p) => acc + (Number(p[key]) || 0), 0)
      return +(sum / dataPoints.length).toFixed(2)
    }
    return {
      soilMoisture: avg('soilMoisture'),
      pH: avg('pH'),
      N: avg('N'),
      P: avg('P'),
      K: avg('K'),
      EC: avg('EC'),
      temp: avg('temp'),
      humidity: avg('humidity'),
    }
  }, [dataPoints])

  // Format data untuk Recharts - konversi timestamp ke format readable
  const formatChartData = useMemo(() => {
    if (!dataPoints || dataPoints.length === 0) return []
    // Ambil max 50 data points untuk chart yang rapi
    const step = Math.max(1, Math.floor(dataPoints.length / 50))
    const filtered = dataPoints.filter((_, i) => i % step === 0)
    return filtered.map((p) => ({
      time: new Date(p.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      soilMoisture: parseFloat(p.soilMoisture),
      pH: parseFloat(p.pH),
      N: parseFloat(p.N),
      P: parseFloat(p.P),
      K: parseFloat(p.K),
      EC: parseFloat(p.EC),
      temp: parseFloat(p.temp),
      humidity: parseFloat(p.humidity),
    }))
  }, [dataPoints])

  // Renderkan chart berdasarkan parameter yang dipilih
  const renderChart = () => {
    if (!formatChartData || formatChartData.length === 0) {
      return <div className="chart-placeholder">Tidak ada data untuk grafik. Coba ubah filter.</div>
    }

    // Map parameter ke warna
    const parameterColors = {
      'Soil Moisture': '#27ae60',
      'pH Tanah': '#e74c3c',
      N: '#3498db',
      P: '#f39c12',
      K: '#9b59b6',
      EC: '#1abc9c',
      'Suhu Udara': '#e67e22',
      'Kelembapan Udara': '#2980b9',
    }

    return (
      <ResponsiveContainer width="100%" height={360}>
        <LineChart data={formatChartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7e3" />
          <XAxis 
            dataKey="time" 
            stroke="#789487"
            style={{ fontSize: '0.8rem' }}
            tick={{ fill: '#789487' }}
          />
          <YAxis 
            stroke="#789487"
            style={{ fontSize: '0.8rem' }}
            tick={{ fill: '#789487' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #27ae60',
              borderRadius: '0.8rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            labelStyle={{ color: '#0f5a3a', fontWeight: 'bold' }}
            formatter={(value) => value.toFixed(2)}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '1rem' }}
            iconType="line"
          />
          
          {parameter === 'Semua Parameter' ? (
            <>
              <Line type="monotone" dataKey="soilMoisture" stroke="#27ae60" name="Soil Moisture (%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="pH" stroke="#e74c3c" name="pH Tanah" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="N" stroke="#3498db" name="N (mg/kg)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="temp" stroke="#e67e22" name="Suhu (°C)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="humidity" stroke="#2980b9" name="Kelembapan (%)" strokeWidth={2} dot={false} />
            </>
          ) : parameter === 'Soil Moisture' ? (
            <Line type="monotone" dataKey="soilMoisture" stroke={parameterColors['Soil Moisture']} name="Soil Moisture (%)" strokeWidth={3} dot={false} />
          ) : parameter === 'pH Tanah' ? (
            <Line type="monotone" dataKey="pH" stroke={parameterColors['pH Tanah']} name="pH Tanah" strokeWidth={3} dot={false} />
          ) : parameter === 'N' ? (
            <Line type="monotone" dataKey="N" stroke={parameterColors['N']} name="N (mg/kg)" strokeWidth={3} dot={false} />
          ) : parameter === 'P' ? (
            <Line type="monotone" dataKey="P" stroke={parameterColors['P']} name="P (mg/kg)" strokeWidth={3} dot={false} />
          ) : parameter === 'K' ? (
            <Line type="monotone" dataKey="K" stroke={parameterColors['K']} name="K (mg/kg)" strokeWidth={3} dot={false} />
          ) : parameter === 'EC' ? (
            <Line type="monotone" dataKey="EC" stroke={parameterColors['EC']} name="EC (mS/cm)" strokeWidth={3} dot={false} />
          ) : parameter === 'Suhu Udara' ? (
            <Line type="monotone" dataKey="temp" stroke={parameterColors['Suhu Udara']} name="Suhu Udara (°C)" strokeWidth={3} dot={false} />
          ) : (
            <Line type="monotone" dataKey="humidity" stroke={parameterColors['Kelembapan Udara']} name="Kelembapan Udara (%)" strokeWidth={3} dot={false} />
          )}
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <div className="page page-with-padding page-shell" style={{ backgroundColor: '#f7fafc' }}>
      {/* Header */}
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Monitoring Sensor</div>
          <div className="page-caption page-caption-lg">
            Lihat tren soil moisture, pH, NPK, EC, suhu, dan kelembapan secara rapi dan terstruktur.
          </div>
        </div>
      </div>

      {/* Filter + Ringkasan cepat */}
      <section className="card-grid-3 u-mb-1" style={{ marginBottom: '30px', gap: '15px' }}>
        <div className="card card-animate card-animate-delay-1 card-elevated card-stretch">
          <div className="card-header card-header-top-md">
            <div>
              <div className="card-title card-title-lg">Filter Data</div>
              <div className="card-subtitle card-subtitle-lg">
                Pilih rentang waktu & parameter yang ingin dianalisis
              </div>
            </div>
          </div>
          <div className="simple-card-list form-grid-2 u-mt-05">
            <div>
              <div className="small-text text-sm-muted">Tanggal Mulai</div>
              <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <div className="small-text text-sm-muted">Tanggal Akhir</div>
              <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
              <div className="small-text text-sm-muted">Parameter</div>
              <select className="form-control" value={parameter} onChange={(e) => setParameter(e.target.value)}>
                <option>Semua Parameter</option>
                <option>Soil Moisture</option>
                <option>pH Tanah</option>
                <option>N</option>
                <option>P</option>
                <option>K</option>
                <option>EC</option>
                <option>Suhu Udara</option>
                <option>Kelembapan Udara</option>
              </select>
            </div>
            <div>
              <div className="small-text text-sm-muted">Resolusi Data</div>
              <select className="form-control" value={resolution} onChange={(e) => setResolution(e.target.value)}>
                <option>Per 10 menit</option>
                <option>Per 30 menit</option>
                <option>Per 1 jam</option>
                <option>Per hari</option>
              </select>
            </div>
          </div>
          <div className="btn-row u-mt-075">
            <button type="button" className="btn-primary btn-pill-primary" onClick={applyFilter}>
              Terapkan Filter
            </button>
            <button type="button" className="btn-pill-outline">
              Reset
            </button>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-2 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Snapshot Lingkungan</div>
              <div className="card-subtitle card-subtitle-lg">
                Gambaran kondisi rata-rata periode terpilih
              </div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <div className="small-stat">
              <div className="small-text text-sm-muted">Soil Moisture</div>
              <div className="big-number">{snapshot.soilMoisture ?? '––'}%</div>
              <div className="small-text text-sm-muted">Rata-rata periode terpilih</div>
            </div>
            <div className="small-stat">
              <div className="small-text text-sm-muted">pH Tanah</div>
              <div className="big-number">{snapshot.pH ?? '––'}</div>
              <div className="small-text text-sm-muted">Rata-rata periode terpilih</div>
            </div>
          </div>
        </div>

        <div className="card card-animate card-animate-delay-3 card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Status Sensor</div>
              <div className="card-subtitle card-subtitle-lg">
                Ringkasan konektivitas node IoT
              </div>
            </div>
          </div>
          <div className="simple-list u-mt-05">
            {sensorStatus.map((s) => (
              <div key={s.name} style={{ fontSize: '0.95rem', marginBottom: 6 }}>
                • {s.name} – <strong>{s.status}</strong> · {s.sync}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grafik historis */}
      <section className="card chart-card card-animate card-animate-delay-4 card-elevated u-mb-1" style={{ marginBottom: '20px' }}>
        <div className="chart-header chart-header-wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div className="card-title card-title-lg">Grafik Historis Sensor</div>
            <div className="card-subtitle card-subtitle-lg">
              Visualisasi tren parameter berdasarkan filter di atas
            </div>
          </div>
          <div className="tag-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {parameter === 'Semua Parameter' ? (
              <>
                <span className="tag-pill tag-pill-success">Semua</span>
              </>
            ) : (
              <>
                <span className="tag-pill tag-pill-info">{parameter}</span>
              </>
            )}
          </div>
        </div>
        <div style={{ width: '100%', padding: 'clamp(0.75rem, 2%, 1.5rem) 0', minHeight: '380px', backgroundColor: '#fafbfc', borderRadius: '8px', marginTop: '15px' }}>
          {renderChart()}
        </div>
      </section>

      {/* Tabel data detail */}
      <section className="card card-animate card-animate-delay-5 card-elevated" style={{ marginTop: '30px' }}>
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Tabel Data Sensor</div>
            <div className="card-subtitle card-subtitle-lg">
              Data mentah per timestamp sesuai filter
            </div>
          </div>
        </div>
        <div className="table-wrapper u-mt-05">
          <table className="table table-compact">
            <thead>
              <tr style={{ borderBottom: '3px solid #27ae60' }}>
                <th style={{ color: '#27ae60' }}>Timestamp</th>
                <th style={{ color: '#27ae60' }}>Soil Moisture</th>
                <th style={{ color: '#27ae60' }}>pH</th>
                <th style={{ color: '#27ae60' }}>N</th>
                <th style={{ color: '#27ae60' }}>P</th>
                <th style={{ color: '#27ae60' }}>K</th>
                <th style={{ color: '#27ae60' }}>EC</th>
                <th style={{ color: '#27ae60' }}>Suhu</th>
                <th style={{ color: '#27ae60' }}>Kelembapan</th>
              </tr>
            </thead>
            <tbody>
              {dataPoints && dataPoints.length > 0 ? (
                dataPoints.slice(0, 20).map((r) => (
                  <tr key={r.timestamp}>
                    <td>{new Date(r.timestamp).toLocaleString()}</td>
                    <td>{r.soilMoisture}</td>
                    <td>{r.pH}</td>
                    <td>{r.N}</td>
                    <td>{r.P}</td>
                    <td>{r.K}</td>
                    <td>{r.EC}</td>
                    <td>{r.temp}</td>
                    <td>{r.humidity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>––</td>
                  <td>––</td>
                  <td>––</td>
                  <td>––</td>
                  <td>––</td>
                  <td>––</td>
                  <td>––</td>
                  <td>––</td>
                  <td>––</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="small-text text-sm-muted u-mt-05" style={{ textAlign: 'center', padding: '12px', color: '#95a5a6' }}>
            Data sensor akan ditampilkan di sini setelah integrasi dengan API / database.
          </div>
        </div>
      </section>
    </div>
  )
}

export default OwnerMonitoringPage
