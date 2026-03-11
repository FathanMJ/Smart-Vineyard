function DeviceManagementPage() {
  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Manajemen Perangkat IoT</div>
          <div className="page-caption page-caption-lg">
            Pantau status ESP32, kamera, dan sensor di kebun.
          </div>
        </div>
      </div>

      <section
        className="card card-animate card-animate-delay-1 card-elevated"
      >
        <div
          className="card-header card-header-top card-header-top-gap"
        >
          <div>
            <div className="card-title card-title-lg">Status Perangkat</div>
            <div className="card-subtitle card-subtitle-lg">
              Online / Offline, RSSI WiFi, terakhir update
            </div>
          </div>

          <div
            className="u-flex u-gap-05 u-flex-wrap"
          >
            <button
              type="button"
              className="btn-pill-sm-primary"
            >
              Restart Perangkat
            </button>
            <button
              type="button"
              className="btn-pill-sm-outline"
            >
              Kalibrasi Sensor
            </button>
          </div>
        </div>

        <div
          className="small-text text-body u-mt-11"
        >
          Tabel perangkat beserta tombol restart & kalibrasi sensor akan ditampilkan di
          sini.
        </div>
      </section>
    </div>
  )
}

export default DeviceManagementPage

