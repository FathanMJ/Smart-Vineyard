function NotificationsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Notifikasi & Alert</div>
          <div className="page-caption">
            Riwayat peringatan sistem: tandon air, kelembapan rendah, sensor offline.
          </div>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Filter Riwayat</div>
            <div className="card-subtitle">Pilih rentang tanggal & tipe alert</div>
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
            <div className="small-text">Tipe Alert</div>
            <select>
              <option>Semua</option>
              <option>Tandon air kosong</option>
              <option>Kelembapan tanah rendah</option>
              <option>Sensor offline</option>
            </select>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Riwayat Notifikasi</div>
            <div className="card-subtitle">
              Daftar alert dengan severity & status penanganan.
            </div>
          </div>
        </div>
        <div className="small-text">
          Tabel riwayat notifikasi akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default NotificationsPage

