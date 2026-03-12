import { useEffect, useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function AgronomisMonitoringPage() {
  const [startDate, setStartDate] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() - 7)
    return d.toISOString().slice(0, 10)
  })
  const [endDate, setEndDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [parameter, setParameter] = useState('Soil Moisture')
  const [resolution, setResolution] = useState('Per 1 jam')
  const [dataPoints, setDataPoints] = useState([])

  useEffect(() => {
    applyFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function parseResolutionMinutes(res) {
    if (res.includes('10')) return 10
    if (res.includes('30')) return 30
    if (res.includes('1 jam')) return 60
    return 1440
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
    }
  }, [dataPoints])

  const formatChartData = useMemo(() => {
    if (!dataPoints || dataPoints.length === 0) return []
    const step = Math.max(1, Math.floor(dataPoints.length / 50))
    const filtered = dataPoints.filter((_, i) => i % step === 0)
    return filtered.map((p) => ({
      time: new Date(p.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      soilMoisture: parseFloat(p.soilMoisture),
      pH: parseFloat(p.pH),
      EC: parseFloat(p.EC),
      temp: parseFloat(p.temp),
    }))
  }, [dataPoints])

  const renderChart = () => {
    if (!formatChartData || formatChartData.length === 0) {
      return <div style={{ textAlign: 'center', padding: '40px', color: '#95a5a6' }}>Tidak ada data untuk grafik. Coba ubah filter.</div>
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
          <Legend wrapperStyle={{ paddingTop: '1rem' }} />
          {parameter === 'Soil Moisture' && <Line type="monotone" dataKey="soilMoisture" stroke="#27ae60" name="Soil Moisture (%)" strokeWidth={3} dot={false} />}
          {parameter === 'pH Tanah' && <Line type="monotone" dataKey="pH" stroke="#e74c3c" name="pH Tanah" strokeWidth={3} dot={false} />}
          {parameter === 'EC' && <Line type="monotone" dataKey="EC" stroke="#1abc9c" name="EC (mS/cm)" strokeWidth={3} dot={false} />}
          <Line type="monotone" dataKey="temp" stroke="#e67e22" name="Suhu (°C)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <div className="page page-with-padding page-shell" style={{ backgroundColor: '#f7fafc' }}>
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Monitoring Parameter</div>
          <div className="page-caption page-caption-lg">
            Pantau tren lingkungan untuk analisis dan rekomendasi
          </div>
        </div>
      </div>

      <section className="card-grid-3 u-mb-1" style={{ marginBottom: '30px', gap: '15px' }}>
        <div className="card card-animate card-elevated card-stretch">
          <div className="card-header card-header-top-md">
            <div>
              <div className="card-title card-title-lg">Filter Data</div>
            </div>
          </div>
          <div className="simple-card-list form-grid-2 u-mt-05">
            <div>
              <div className="small-text text-sm-muted">Dari</div>
              <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <div className="small-text text-sm-muted">Sampai</div>
              <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
              <div className="small-text text-sm-muted">Parameter</div>
              <select className="form-control" value={parameter} onChange={(e) => setParameter(e.target.value)}>
                <option>Soil Moisture</option>
                <option>pH Tanah</option>
                <option>EC</option>
              </select>
            </div>
            <div>
              <div className="small-text text-sm-muted">Resolusi</div>
              <select className="form-control" value={resolution} onChange={(e) => setResolution(e.target.value)}>
                <option>Per 1 jam</option>
                <option>Per hari</option>
              </select>
            </div>
          </div>
          <button type="button" className="btn-primary btn-pill-primary u-mt-075" onClick={applyFilter}>
            Terapkan
          </button>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Ringkasan</div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <div className="small-stat">
              <div className="small-text text-sm-muted">Soil Moisture Rata-rata</div>
              <div className="big-number">{snapshot.soilMoisture ?? '––'}%</div>
            </div>
            <div className="small-stat">
              <div className="small-text text-sm-muted">pH Rata-rata</div>
              <div className="big-number">{snapshot.pH ?? '––'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart */}
      <section className="card card-animate card-elevated u-mb-1" style={{ marginBottom: '30px' }}>
        <div className="chart-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div className="card-title card-title-lg">Grafik Monitoring Parameter</div>
            <div className="card-subtitle card-subtitle-lg">
              Visualisasi tren parameter berdasarkan filter
            </div>
          </div>
        </div>
        <div style={{ width: '100%', padding: 'clamp(0.75rem, 2%, 1.5rem) 0', minHeight: '380px', backgroundColor: '#fafbfc', borderRadius: '8px', marginTop: '15px' }}>
          {renderChart()}
        </div>
      </section>

      {/* Table */}
      <section className="card card-animate card-elevated u-mb-1" style={{ marginTop: '30px' }}>
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Data Historis</div>
          </div>
        </div>
        <div className="table-wrapper u-mt-05">
          <table className="table table-compact">
            <thead>
              <tr style={{ borderBottom: '3px solid #27ae60' }}>
                <th style={{ color: '#27ae60' }}>Waktu</th>
                <th style={{ color: '#27ae60' }}>Soil Moisture</th>
                <th style={{ color: '#27ae60' }}>pH</th>
                <th style={{ color: '#27ae60' }}>EC</th>
                <th style={{ color: '#27ae60' }}>Suhu</th>
              </tr>
            </thead>
            <tbody>
              {dataPoints && dataPoints.length > 0 ? (
                dataPoints.slice(0, 10).map((r) => (
                  <tr key={r.timestamp}>
                    <td>{new Date(r.timestamp).toLocaleString()}</td>
                    <td>{r.soilMoisture}</td>
                    <td>{r.pH}</td>
                    <td>{r.EC}</td>
                    <td>{r.temp}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Tidak ada data</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="small-text text-sm-muted u-mt-05" style={{ textAlign: 'center', padding: '12px', color: '#95a5a6' }}>
            Data monitoring parameter
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgronomisMonitoringPage
