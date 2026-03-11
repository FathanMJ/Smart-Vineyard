function ReportsPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Laporan & Analisis</div>
          <div className="page-caption page-caption-lg">
            Download data sensor harian, aktivitas pompa, dan analisis tren.
          </div>
        </div>
      </div>

      <section
        className="card card-animate card-animate-delay-1 card-elevated"
      >
        <div
          className="card-header card-header-top-md"
        >
          <div>
            <div className="card-title card-title-lg">Generate Laporan</div>
            <div className="card-subtitle card-subtitle-lg">
              Pilih rentang tanggal & jenis laporan
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
            <div className="small-text text-sm-muted">Jenis Laporan</div>
            <select className="form-control">
              <option>Data sensor harian</option>
              <option>Aktivitas pompa</option>
              <option>Analisis tren</option>
            </select>
          </div>
        </div>
        <div className="btn-row">
          <button
            type="button"
            className="btn-primary btn-pill-primary"
          >
            Export Excel
          </button>
          <button
            type="button"
            className="btn-pill-outline"
          >
            Export PDF
          </button>
        </div>
      </section>
    </div>
  )
}

export default ReportsPage

