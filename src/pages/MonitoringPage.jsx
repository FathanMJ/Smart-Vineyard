function MonitoringPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Monitoring Sensor</div>
          <div className="page-caption">
            Lihat detail data soil moisture, pH, NPK, EC, suhu, dan kelembapan.
          </div>
        </div>
      </div>

      <section className="card card-animate card-animate-delay-1">
        <div className="card-header">
          <div>
            <div className="card-title">Filter Data</div>
            <div className="card-subtitle">Pilih rentang waktu & parameter</div>
          </div>
        </div>
        <div className="simple-card-list">
          <div>
            <div className="small-text">Tanggal Mulai</div>
            <input type="date" />
          </div>
          <div>
            <div className="small-text">Tanggal Akhir</div>
            <input type="date" />
          </div>
          <div>
            <div className="small-text">Parameter</div>
            <select>
              <option>Semua Parameter</option>
              <option>Soil Moisture</option>
              <option>pH Tanah</option>
              <option>NPK</option>
              <option>EC</option>
              <option>Suhu Udara</option>
              <option>Kelembapan Udara</option>
            </select>
          </div>
        </div>
      </section>

      <section className="card chart-card card-animate card-animate-delay-2">
        <div className="chart-header">
          <div>
            <div className="card-title">Grafik Historis Sensor</div>
            <div className="card-subtitle">Visualisasi tren parameter terpilih</div>
          </div>
        </div>
        <div className="chart-placeholder">
          Area Grafik Historis (integrasi chart nanti)
        </div>
      </section>

      <section className="card card-animate card-animate-delay-3">
        <div className="card-header">
          <div>
            <div className="card-title">Tabel Data Sensor</div>
            <div className="card-subtitle">Data mentah per timestamp</div>
          </div>
        </div>
        <div className="small-text">Tabel data sensor akan ditampilkan di sini.</div>
      </section>
    </div>
  )
}

export default MonitoringPage

