function MonitoringPage() {
  return (
    <div
      className="page page-with-padding"
      style={{
        minHeight: '100vh',
        padding: '1.5rem',
        background:
          'linear-gradient(135deg, #f5f9ff 0%, #eef7f2 50%, #fefefe 100%)',
      }}
    >
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <div
            className="page-title"
            style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b2733' }}
          >
            Monitoring Sensor
          </div>
          <div
            className="page-caption"
            style={{ marginTop: '0.25rem', color: '#5f6c7b', fontSize: '0.95rem' }}
          >
            Lihat detail data soil moisture, pH, NPK, EC, suhu, dan kelembapan.
          </div>
        </div>
      </div>

      <section
        className="card card-animate card-animate-delay-1"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '1.25rem 1.5rem',
          border: '1px solid #e3ecf3',
          boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
          marginBottom: '1rem',
        }}
      >
        <div
          className="card-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '0.8rem',
          }}
        >
          <div>
            <div
              className="card-title"
              style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
            >
              Filter Data
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Pilih rentang waktu & parameter
            </div>
          </div>
        </div>
        <div
          className="simple-card-list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '0.9rem',
          }}
        >
          <div>
            <div className="small-text" style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              Tanggal Mulai
            </div>
            <input
              type="date"
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.45rem 0.6rem',
                borderRadius: '0.7rem',
                border: '1px solid #d1d5db',
                fontSize: '0.85rem',
              }}
            />
          </div>
          <div>
            <div className="small-text" style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              Tanggal Akhir
            </div>
            <input
              type="date"
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.45rem 0.6rem',
                borderRadius: '0.7rem',
                border: '1px solid #d1d5db',
                fontSize: '0.85rem',
              }}
            />
          </div>
          <div>
            <div className="small-text" style={{ fontSize: '0.8rem', color: '#6b7280' }}>
              Parameter
            </div>
            <select
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.45rem 0.6rem',
                borderRadius: '0.7rem',
                border: '1px solid #d1d5db',
                fontSize: '0.85rem',
                backgroundColor: '#ffffff',
              }}
            >
              <option>Semua Parameter</option>
              <option>Soil Moisture</option>
              <option>pH Tanah</option>
              <option>NPK</option>
              <option>EC</option>
              <option>Suhu Udara</option>
              <option>Kelembapan Udara</option>
            </select>
          </div>
        </div>
      </section>

      <section
        className="card chart-card card-animate card-animate-delay-2"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '1.25rem 1.5rem',
          border: '1px solid #e3ecf3',
          boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
          marginBottom: '1rem',
        }}
      >
        <div className="chart-header" style={{ marginBottom: '0.6rem' }}>
          <div>
            <div
              className="card-title"
              style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
            >
              Grafik Historis Sensor
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Visualisasi tren parameter terpilih
            </div>
          </div>
        </div>
        <div
          className="chart-placeholder"
          style={{
            borderRadius: '0.9rem',
            border: '1px dashed #cbd5e1',
            background:
              'repeating-linear-gradient(135deg, #f9fafb, #f9fafb 8px, #f3f4f6 8px, #f3f4f6 16px)',
            padding: '2.5rem 1rem',
            fontSize: '0.86rem',
            color: '#6b7280',
            textAlign: 'center',
          }}
        >
          Area Grafik Historis (integrasi chart nanti)
        </div>
      </section>

      <section
        className="card card-animate card-animate-delay-3"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '1.25rem 1.5rem',
          border: '1px solid #e3ecf3',
          boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
        }}
      >
        <div
          className="card-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '0.6rem',
          }}
        >
          <div>
            <div
              className="card-title"
              style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}
            >
              Tabel Data Sensor
            </div>
            <div
              className="card-subtitle"
              style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#6b7280' }}
            >
              Data mentah per timestamp
            </div>
          </div>
        </div>
        <div
          className="small-text"
          style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}
        >
          Tabel data sensor akan ditampilkan di sini.
        </div>
      </section>
    </div>
  )
}

export default MonitoringPage

