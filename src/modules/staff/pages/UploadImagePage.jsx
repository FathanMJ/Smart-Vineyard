export default function StaffUploadImagePage() {
  return (
    <div className="page page-with-padding page-shell">
      <section className="card card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Upload Citra Daun</div>
            <div className="card-subtitle card-subtitle-lg">Kirim foto untuk dianalisis AI</div>
          </div>
        </div>
        <div className="small-text text-body">
          Placeholder: upload file + submit ke endpoint <strong>/api/ai/analyze</strong>.
        </div>
      </section>
    </div>
  )
}

