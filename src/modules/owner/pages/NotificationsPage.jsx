import { useState } from 'react'

function OwnerNotificationsPage() {
  const [notifications] = useState([
    {
      id: 1,
      time: '2026-03-12 10:30',
      type: 'warning',
      title: 'Kelembapan Kritical',
      message: 'Kelembapan Blok A turun di bawah 40%. Pompa irigasi akan diaktifkan otomatis dalam 5 menit.',
    },
    {
      id: 2,
      time: '2026-03-12 08:15',
      type: 'info',
      title: 'Irigasi Otomatis Selesai',
      message: 'Pompa Blok B selesai irigasi. Total durasi: 60 menit, volume: 3,000 liter.',
    },
    {
      id: 3,
      time: '2026-03-11 22:45',
      type: 'critical',
      title: 'Sensor Error',
      message: 'Sensor pH Blok A tidak merespons. Silakan periksa koneksi atau lakukan reset.',
    },
    {
      id: 4,
      time: '2026-03-11 15:20',
      type: 'success',
      title: 'Analisis AI Selesai',
      message: 'Analisis kesehatan tanaman Blok C selesai. Tidak ada anomali terdeteksi. Status: Normal.',
    },
    {
      id: 5,
      time: '2026-03-11 09:00',
      type: 'warning',
      title: 'Threshold Terlampaui',
      message: 'EC (salinitas) Blok B mencapai 1.6 dS/m. Rekomendasi: lakukan irigasi dengan air tawar.',
    },
  ])

  const typeColor = {
    info: '#2b8aef',
    warning: '#f39c12',
    critical: '#e74c3c',
    success: '#27ae60',
  }

  const typeLabel = {
    info: '📢',
    warning: '⚠️',
    critical: '🔴',
    success: '✓',
  }

  return (
    <div className="page page-with-padding page-shell">
      {/* Header */}
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Pusat Notifikasi</div>
          <div className="page-caption page-caption-lg">
            Pantau semua peringatan, informasi, dan status sistem dalam satu tempat.
          </div>
        </div>
      </div>

      {/* Notification Stats */}
      <section className="card-grid-4 u-mb-1">
        <div className="card card-animate card-elevated card-stretch">
          <div className="card-header card-header-top-sm">
            <div className="card-title card-title-sm">Total Notifikasi</div>
          </div>
          <div className="big-number" style={{ textAlign: 'center', padding: '20px' }}>
            24
          </div>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top-sm">
            <div className="card-title card-title-sm">Kritis</div>
          </div>
          <div className="big-number" style={{ textAlign: 'center', padding: '20px', color: '#e74c3c' }}>
            2
          </div>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top-sm">
            <div className="card-title card-title-sm">Peringatan</div>
          </div>
          <div className="big-number" style={{ textAlign: 'center', padding: '20px', color: '#f39c12' }}>
            5
          </div>
        </div>

        <div className="card card-animate card-elevated">
          <div className="card-header card-header-top-sm">
            <div className="card-title card-title-sm">Unread</div>
          </div>
          <div className="big-number" style={{ textAlign: 'center', padding: '20px', color: '#2b8aef' }}>
            8
          </div>
        </div>
      </section>

      {/* Notifications List */}
      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Notifikasi Terbaru</div>
            <div className="card-subtitle card-subtitle-lg">Semua aktivitas sistem 30 hari terakhir</div>
          </div>
        </div>
        <div className="simple-list u-mt-05">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              style={{
                padding: '12px',
                marginBottom: '12px',
                borderLeft: `4px solid ${typeColor[notif.type]}`,
                backgroundColor: '#f9f9f9',
                borderRadius: '4px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div
                    className="small-text"
                    style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '4px' }}
                  >
                    {typeLabel[notif.type]} {notif.title}
                  </div>
                  <div className="small-text" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>
                    {notif.message}
                  </div>
                  <div className="small-text text-sm-muted" style={{ fontSize: '0.8rem' }}>
                    {notif.time}
                  </div>
                </div>
                <button type="button" className="btn-pill-outline" style={{ padding: '6px 12px', height: 'fit-content' }}>
                  Baca
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notification Settings */}
      <section className="card card-animate card-elevated u-mt-1">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Preferensi Notifikasi</div>
            <div className="card-subtitle card-subtitle-lg">Pilih jenis notifikasi yang ingin diterima</div>
          </div>
        </div>
        <div className="simple-list u-mt-05">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e0e0e0' }}>
            <div>
              <div className="small-text text-sm-muted">Notifikasi Email</div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.8rem' }}>Terima alert penting via email</div>
            </div>
            <input type="checkbox" defaultChecked />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e0e0e0' }}>
            <div>
              <div className="small-text text-sm-muted">Notifikasi SMS</div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.8rem' }}>Peringatan kritis hanya via SMS</div>
            </div>
            <input type="checkbox" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
            <div>
              <div className="small-text text-sm-muted">Sound Alert</div>
              <div className="small-text text-sm-muted" style={{ fontSize: '0.8rem' }}>Nyalakan suara untuk alert kritis</div>
            </div>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OwnerNotificationsPage
