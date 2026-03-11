function PlantManagementPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Manajemen Tanaman</div>
          <div className="page-caption page-caption-lg">
            Atur varietas anggur dan parameter target untuk kontrol otomatis.
          </div>
        </div>
      </div>

      <section
        className="card card-animate card-animate-delay-1 card-elevated"
      >
        <div
          className="card-header card-header-top"
        >
          <div>
            <div className="card-title card-title-lg">Daftar Varietas</div>
            <div className="card-subtitle card-subtitle-lg">
              Threshold kelembapan & nutrisi
            </div>
          </div>
        </div>
        <div className="small-text text-body">
          Tabel konfigurasi varietas (Jupiter, dsb) akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default PlantManagementPage

