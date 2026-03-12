import { useState } from 'react'

function OwnerThresholdsPage() {
  const [thresholds, setThresholds] = useState({
    soilMoisture: { min: 40, max: 70, unit: '%' },
    ph: { min: 5.5, max: 7.0, unit: 'pH' },
    ec: { min: 0.5, max: 1.5, unit: 'dS/m' },
  })

  return (
    <div className="page page-with-padding page-shell">
      {/* Header */}
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Pengaturan Threshold Parameter</div>
          <div className="page-caption page-caption-lg">
            Atur nilai minimum dan maksimum parameter sensor untuk trigger notifikasi & irigasi otomatis.
          </div>
        </div>
      </div>

      {/* Threshold Cards */}
      <section className="card-grid-2 u-mb-1">
        {Object.entries(thresholds).map(([key, value]) => {
          const labels = {
            soilMoisture: 'Soil Moisture',
            ph: 'pH Tanah',
            ec: 'Electrical Conductivity',
          }
          return (
            <div key={key} className="card card-animate card-elevated">
              <div className="card-header card-header-top">
                <div>
                  <div className="card-title card-title-lg">{labels[key]}</div>
                  <div className="card-subtitle card-subtitle-lg">Satuan: {value.unit}</div>
                </div>
              </div>
              <div className="simple-card-list u-mt-05">
                <div>
                  <div className="small-text text-sm-muted">Nilai Minimum</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: '8px 0' }}>
                    <input
                      type="number"
                      className="form-control"
                      value={value.min}
                      onChange={(e) =>
                        setThresholds({
                          ...thresholds,
                          [key]: { ...value, min: parseFloat(e.target.value) },
                        })
                      }
                      style={{ flex: 1 }}
                    />
                    <span>{value.unit}</span>
                  </div>
                </div>
                <div>
                  <div className="small-text text-sm-muted">Nilai Maksimum</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: '8px 0' }}>
                    <input
                      type="number"
                      className="form-control"
                      value={value.max}
                      onChange={(e) =>
                        setThresholds({
                          ...thresholds,
                          [key]: { ...value, max: parseFloat(e.target.value) },
                        })
                      }
                      style={{ flex: 1 }}
                    />
                    <span>{value.unit}</span>
                  </div>
                </div>
                <button type="button" className="btn-primary btn-pill-primary u-mt-05">
                  Simpan
                </button>
              </div>
            </div>
          )
        })}
      </section>

      {/* Info & Guidelines */}
      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Panduan Threshold untuk Anggur</div>
            <div className="card-subtitle card-subtitle-lg">Rekomendasi nilai berdasarkan kondisi ideal tanaman anggur</div>
          </div>
        </div>
        <div className="simple-list u-mt-05">
          <div className="small-text" style={{ paddingBottom: '8px', borderBottom: '1px solid #f0f0f0' }}>
            <strong>Soil Moisture:</strong> 40–70% – Tanah tidak terlalu kering atau basah
          </div>
          <div className="small-text" style={{ paddingBottom: '8px', borderBottom: '1px solid #f0f0f0' }}>
            <strong>pH Tanah:</strong> 5.5–7.0 – Ideal untuk penyerapan nutrisi anggur
          </div>
          <div className="small-text" style={{ paddingBottom: '8px', borderBottom: '1px solid #f0f0f0' }}>
            <strong>EC (Salinitas):</strong> 0.5–1.5 dS/m – Konsentrasi nutrisi optimal
          </div>
        </div>
      </section>
    </div>
  )
}

export default OwnerThresholdsPage
