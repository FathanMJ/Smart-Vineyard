function MonitoringPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Monitoring Sensor</div>
          <div className="page-caption page-caption-lg">
            Lihat detail data soil moisture, pH, NPK, EC, suhu, dan kelembapan.
          </div>
        </div>
      </div>

      <section
        className="card card-animate card-animate-delay-1 card-elevated u-mb-1"
      >
        <div
          className="card-header card-header-top-md"
        >
          <div>
            <div className="card-title card-title-lg">Filter Data</div>
            <div className="card-subtitle card-subtitle-lg">
              Pilih rentang waktu & parameter
            </div>
          </div>
        </div>
        <div className="simple-card-list form-grid-3">
          <div>
            <div className="small-text text-sm-muted">Tanggal Mulai</div>
            <input type="date" className="form-control" />
          </div>
          <div>
            <div className="small-text text-sm-muted">Tanggal Akhir</div>
            <input type="date" className="form-control" />
          </div>
          <div>
            <div className="small-text text-sm-muted">Parameter</div>
            <select className="form-control">
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

      <section
        className="card chart-card card-animate card-animate-delay-2 card-elevated u-mb-1"
      >
        <div className="chart-header u-mb-06">
          <div>
            <div className="card-title card-title-lg">Grafik Historis Sensor</div>
            <div className="card-subtitle card-subtitle-lg">
              Visualisasi tren parameter terpilih
            </div>
          </div>
        </div>
        <div className="chart-placeholder placeholder-striped">
          Area Grafik Historis (integrasi chart nanti)
        </div>
      </section>

      <section
        className="card card-animate card-animate-delay-3 card-elevated"
      >
        <div
          className="card-header card-header-top"
        >
          <div>
            <div className="card-title card-title-lg">Tabel Data Sensor</div>
            <div className="card-subtitle card-subtitle-lg">
              Data mentah per timestamp
            </div>
          </div>
        </div>
        <div className="small-text text-body">
          Tabel data sensor akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default MonitoringPage

