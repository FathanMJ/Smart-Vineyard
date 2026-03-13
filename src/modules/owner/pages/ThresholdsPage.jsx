import { useState, useEffect } from 'react'
import { getAllVarietas, updateVarietas } from '../../../services/varietasApi' // Sesuaikan path ini

function OwnerThresholdsPage() {
  const [varietasList, setVarietasList] = useState([])
  const [selectedVarietas, setSelectedVarietas] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load data varietas dari database saat halaman dibuka
  useEffect(() => {
    const fetchVarietas = async () => {
      try {
        const response = await getAllVarietas()
        if (response.status === 'success') {
          setVarietasList(response.data)
          // Set varietas pertama sebagai default jika ada
          if (response.data.length > 0) setSelectedVarietas(response.data[0])
        }
      } catch (error) {
        console.error("Gagal load varietas:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchVarietas()
  }, [])

  // Fungsi untuk update nilai ke database
  const handleSave = async (id, updatedData) => {
    try {
      const response = await updateVarietas(id, updatedData)
      if (response.status === 'success') {
        alert(`Threshold ${updatedData.nama_varietas} berhasil diperbarui!`)
      }
    } catch (error) {
      alert("Gagal menyimpan: " + error.message)
    }
  }

  if (loading) return <div className="page page-with-padding">Memuat Konfigurasi...</div>

  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Pengaturan Threshold Varietas</div>
          <div className="page-caption page-caption-lg">
            Sesuaikan ambang batas berdasarkan kebutuhan spesifik varietas anggur yang ditanam.
          </div>
        </div>
      </div>

      {/* Selector Varietas (Jika ada lebih dari satu) */}
      <section className="u-mb-1">
        <div className="small-text text-sm-muted">Pilih Varietas untuk Diedit:</div>
        <select 
          className="form-control" 
          style={{ maxWidth: '300px' }}
          onChange={(e) => setSelectedVarietas(varietasList.find(v => v.id === e.target.value))}
        >
          {varietasList.map(v => (
            <option key={v.id} value={v.id}>{v.nama_varietas}</option>
          ))}
        </select>
      </section>

      {selectedVarietas && (
        <section className="card-grid-2 u-mb-1">
          {/* Card Moisture & pH */}
          <div className="card card-animate card-elevated">
            <div className="card-header card-header-top">
              <div>
                <div className="card-title card-title-lg">Fisik Tanah</div>
                <div className="card-subtitle card-subtitle-lg">Moisture & Keasaman</div>
              </div>
            </div>
            <div className="simple-card-list u-mt-05">
              <div>
                <div className="small-text text-sm-muted">Min Moisture (%) - Trigger Pompa</div>
                <input
                  type="number"
                  className="form-control u-mt-05"
                  value={selectedVarietas.min_moisture}
                  onChange={(e) => setSelectedVarietas({...selectedVarietas, min_moisture: parseFloat(e.target.value)})}
                />
              </div>
              <div className="form-grid-2 u-mt-05">
                <div>
                  <div className="small-text text-sm-muted">Min pH</div>
                  <input
                    type="number"
                    step="0.1"
                    className="form-control"
                    value={selectedVarietas.min_ph}
                    onChange={(e) => setSelectedVarietas({...selectedVarietas, min_ph: parseFloat(e.target.value)})}
                  />
                </div>
                <div>
                  <div className="small-text text-sm-muted">Max pH</div>
                  <input
                    type="number"
                    step="0.1"
                    className="form-control"
                    value={selectedVarietas.max_ph}
                    onChange={(e) => setSelectedVarietas({...selectedVarietas, max_ph: parseFloat(e.target.value)})}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card Nutrisi (NPK) */}
          <div className="card card-animate card-elevated">
            <div className="card-header card-header-top">
              <div>
                <div className="card-title card-title-lg">Nutrisi Makro (Min)</div>
                <div className="card-subtitle card-subtitle-lg">Ambang batas peringatan pemupukan</div>
              </div>
            </div>
            <div className="simple-card-list u-mt-05 form-grid-3">
              <div>
                <div className="small-text text-sm-muted">Min N</div>
                <input
                  type="number"
                  className="form-control"
                  value={selectedVarietas.min_n}
                  onChange={(e) => setSelectedVarietas({...selectedVarietas, min_n: parseFloat(e.target.value)})}
                />
              </div>
              <div>
                <div className="small-text text-sm-muted">Min P</div>
                <input
                  type="number"
                  className="form-control"
                  value={selectedVarietas.min_p}
                  onChange={(e) => setSelectedVarietas({...selectedVarietas, min_p: parseFloat(e.target.value)})}
                />
              </div>
              <div>
                <div className="small-text text-sm-muted">Min K</div>
                <input
                  type="number"
                  className="form-control"
                  value={selectedVarietas.min_k}
                  onChange={(e) => setSelectedVarietas({...selectedVarietas, min_k: parseFloat(e.target.value)})}
                />
              </div>
            </div>
            <button 
              type="button" 
              className="btn-primary btn-pill-primary u-mt-1"
              onClick={() => handleSave(selectedVarietas.id, selectedVarietas)}
            >
              Simpan Threshold {selectedVarietas.nama_varietas}
            </button>
          </div>
        </section>
      )}

      {/* Info & Guidelines */}
      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Panduan Threshold Anggur</div>
            <div className="card-subtitle card-subtitle-lg">Rekomendasi nilai ideal</div>
          </div>
        </div>
        <div className="simple-list u-mt-05">
          <div className="small-text" style={{ paddingBottom: '8px', borderBottom: '1px solid #f0f0f0' }}>
            <strong>Moisture:</strong> {selectedVarietas?.min_moisture}% – Batas bawah sebelum pompa aktif.
          </div>
          <div className="small-text" style={{ paddingBottom: '8px', borderBottom: '1px solid #f0f0f0' }}>
            <strong>Nutrisi:</strong> Pastikan nilai NPK tidak di bawah standar agar fase vegetatif tidak terganggu.
          </div>
        </div>
      </section>
    </div>
  )
}

export default OwnerThresholdsPage