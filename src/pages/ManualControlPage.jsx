function ManualControlPage() {
  return (
    <div className="page page-with-padding page-shell">
      {/* Header */}
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Kontrol Manual Sistem</div>
          <div className="page-caption page-caption-lg">
            Kontrol manual pompa irigasi, sensor, dan komponen sistem secara real-time.
          </div>
        </div>
      </div>

      {/* Control Panels */}
      <section className="card-grid-2 u-mb-1">
        <div className="card card-animate card-elevated card-stretch">
          <div className="card-header card-header-top-md">
            <div>
              <div className="card-title card-title-lg">Pompa Irigasi</div>
              <div className="card-subtitle card-subtitle-lg">Blok A – Kontrol On/Off</div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <div className="small-stat">
              <div className="small-text text-sm-muted">Status Pompa</div>
              <div style={{ color: '#27ae60', fontSize: '1.2rem', fontWeight: 'bold' }}>● MENYALA</div>
              <div className="small-text text-sm-muted">Waktu hidup: 45 menit</div>
            </div>
            <div className="btn-row u-mt-075">
              <button type="button" className="btn-primary btn-pill-primary" style={{ backgroundColor: '#e74c3c' }}>
                Matikan Pompa
              </button>
              <button type="button" className="btn-pill-outline">
                Atur Durasi
              </button>
            </div>
          </div>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top">
            <div>
              <div className="card-title card-title-lg">Pompa Irigasi</div>
              <div className="card-subtitle card-subtitle-lg">Blok B – Kontrol On/Off</div>
            </div>
          </div>
          <div className="simple-card-list u-mt-05">
            <div className="small-stat">
              <div className="small-text text-sm-muted">Status Pompa</div>
              <div style={{ color: '#95a5a6', fontSize: '1.2rem', fontWeight: 'bold' }}>● MATI</div>
              <div className="small-text text-sm-muted">Terakhir hidup: 2 jam lalu</div>
            </div>
            <div className="btn-row u-mt-075">
              <button type="button" className="btn-primary btn-pill-primary">
                Nyalakan Pompa
              </button>
              <button type="button" className="btn-pill-outline">
                Jadwal Ulang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Controls */}
      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Kontrol Lainnya</div>
            <div className="card-subtitle card-subtitle-lg">Sensor & Perangkat Pendukung</div>
          </div>
        </div>
        <div className="simple-card-list u-mt-05">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e0e0e0' }}>
            <div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.9rem' }}>Reset Sensor Blok A</div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.75rem' }}>Kalibrasi ulang pembacaan</div>
            </div>
            <button type="button" className="btn-pill-outline" style={{ padding: '6px 12px' }}>
              Reset
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e0e0e0' }}>
            <div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.9rem' }}>Reset Sensor Blok B</div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.75rem' }}>Kalibrasi ulang pembacaan</div>
            </div>
            <button type="button" className="btn-pill-outline" style={{ padding: '6px 12px' }}>
              Reset
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
            <div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.9rem' }}>Restart Sistem</div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.75rem' }}>Mulai ulang seluruh IoT Hub</div>
            </div>
            <button type="button" className="btn-pill-outline" style={{ padding: '6px 12px', color: '#e74c3c', borderColor: '#e74c3c' }}>
              Restart
            </button>
          </div>
        </div>
      </section>

      {/* Activity Log */}
      <section className="card card-animate card-elevated u-mt-1">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Riwayat Kontrol Manual</div>
            <div className="card-subtitle card-subtitle-lg">5 aksi terbaru</div>
          </div>
        </div>
        <div className="table-wrapper u-mt-05">
          <table className="table table-compact">
            <thead>
              <tr style={{ borderBottom: '3px solid #27ae60' }}>
                <th style={{ color: '#27ae60' }}>Waktu</th>
                <th style={{ color: '#27ae60' }}>Perangkat</th>
                <th style={{ color: '#27ae60' }}>Aksi</th>
                <th style={{ color: '#27ae60' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 Mar 10:30</td>
                <td>Pompa Blok A</td>
                <td>Dimatikan</td>
                <td style={{ color: '#27ae60', fontWeight: 'bold' }}>Sukses</td>
              </tr>
              <tr>
                <td>12 Mar 06:00</td>
                <td>Pompa Blok A</td>
                <td>Dinyalakan (60 menit)</td>
                <td style={{ color: '#27ae60', fontWeight: 'bold' }}>Sukses</td>
              </tr>
              <tr>
                <td>11 Mar 18:45</td>
                <td>Sensor Blok B</td>
                <td>Reset</td>
                <td style={{ color: '#27ae60', fontWeight: 'bold' }}>Sukses</td>
              </tr>
              <tr>
                <td>11 Mar 14:20</td>
                <td>Pompa Blok B</td>
                <td>Dinyalakan (45 menit)</td>
                <td style={{ color: '#27ae60', fontWeight: 'bold' }}>Sukses</td>
              </tr>
              <tr>
                <td>10 Mar 09:00</td>
                <td>Sistem IoT</td>
                <td>Restart</td>
                <td style={{ color: '#27ae60', fontWeight: 'bold' }}>Sukses</td>
              </tr>
            </tbody>
          </table>
          <div className="small-text text-sm-muted u-mt-05" style={{ textAlign: 'center', padding: '12px', color: '#95a5a6' }}>
            Riwayat aksi kontrol manual
          </div>
        </div>
      </section>
    </div>
  )
}

export default ManualControlPage
