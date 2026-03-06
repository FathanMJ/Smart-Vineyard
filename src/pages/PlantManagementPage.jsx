function PlantManagementPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Manajemen Tanaman</div>
          <div className="page-caption">
            Atur varietas anggur dan parameter target untuk kontrol otomatis.
          </div>
        </div>
      </div>

      <section className="card card-animate card-animate-delay-1">
        <div className="card-header">
          <div>
            <div className="card-title">Daftar Varietas</div>
            <div className="card-subtitle">Threshold kelembapan & nutrisi</div>
          </div>
        </div>
        <div className="small-text">
          Tabel konfigurasi varietas (Jupiter, dsb) akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default PlantManagementPage

