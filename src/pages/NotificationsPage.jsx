function NotificationsPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Notifikasi & Alert</div>
          <div className="page-caption page-caption-lg">
            Riwayat peringatan sistem: tandon air, kelembapan rendah, sensor offline.
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
            <div className="card-title card-title-lg">Filter Riwayat</div>
            <div className="card-subtitle card-subtitle-lg">
              Pilih rentang tanggal & tipe alert
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
            <div className="small-text text-sm-muted">Tipe Alert</div>
            <select className="form-control">
              <option>Semua</option>
              <option>Tandon air kosong</option>
              <option>Kelembapan tanah rendah</option>
              <option>Sensor offline</option>
            </select>
          </div>
        </div>
      </section>

      <section
        className="card card-animate card-animate-delay-2 card-elevated"
      >
        <div
          className="card-header card-header-top"
        >
          <div>
            <div className="card-title card-title-lg">Riwayat Notifikasi</div>
            <div className="card-subtitle card-subtitle-lg">
              Daftar alert dengan severity & status penanganan.
            </div>
          </div>
        </div>
        <div className="small-text text-body">
          Tabel riwayat notifikasi akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default NotificationsPage

