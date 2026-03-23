import { useState } from 'react';
import * as reportApi from '../services/reportApi';

function ReportsPage() {
  // State untuk menyimpan pilihan user
  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    type: 'Data sensor harian' // Default sesuai <select>
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  const handleExport = async (format) => {
    if (!filter.startDate || !filter.endDate) {
      alert("Harap pilih rentang tanggal terlebih dahulu.");
      return;
    }

    setLoading(true);
    try {
      await reportApi.downloadReport(filter, format);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page page-with-padding page-shell">
      <div className="page-header u-mb-15">
        <div>
          <div className="page-title page-title-lg">Laporan & Analisis</div>
          <div className="page-caption page-caption-lg">
            Download data sensor harian, aktivitas pompa, dan analisis tren.
          </div>
        </div>
      </div>

      <section className="card card-animate card-elevated">
        <div className="card-header card-header-top-md">
          <div>
            <div className="card-title card-title-lg">Generate Laporan</div>
            <div className="card-subtitle card-subtitle-lg">
              Pilih rentang tanggal & jenis laporan
            </div>
          </div>
        </div>
        
        <div className="simple-card-list form-grid-3">
          <div>
            <div className="small-text text-sm-muted">Tanggal Mulai</div>
            <input 
              type="date" 
              name="startDate"
              className="form-control" 
              value={filter.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="small-text text-sm-muted">Tanggal Akhir</div>
            <input 
              type="date" 
              name="endDate"
              className="form-control" 
              value={filter.endDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="small-text text-sm-muted">Jenis Laporan</div>
            <select 
              name="type"
              className="form-control" 
              value={filter.type}
              onChange={handleChange}
            >
              <option value="Data sensor harian">Data sensor harian</option>
              <option value="Aktivitas pompa">Aktivitas pompa</option>
              <option value="Analisis tren">Analisis tren</option>
            </select>
          </div>
        </div>

        <div className="btn-row">
          <button
            type="button"
            className="btn-primary btn-pill-primary"
            disabled={loading}
            onClick={() => handleExport('excel')}
          >
            {loading ? 'Exporting...' : 'Export Excel'}
          </button>
          <button
            type="button"
            className="btn-pill-outline"
            disabled={loading}
            onClick={() => alert("Fitur PDF akan segera hadir!")}
          >
            Export PDF
          </button>
        </div>
      </section>
    </div>
  );
}

export default ReportsPage;