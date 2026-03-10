function LoginPage() {
  return (
    <div className="login-page">
      <div className="card login-card-enter login-card">
        <div className="login-header">
          <div className="login-logo-circle">S</div>
          <div className="section-title login-title">Smart Vineyard</div>
          <div className="section-description login-subtitle">
            Masuk ke Saung Tinanggur Dashboard
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="login-form"
        >
          <div className="login-field">
            <label className="login-label">Email / Username</label>
            <div className="login-input-wrapper">
              <span className="login-input-icon">@</span>
              <input
                type="email"
                placeholder="admin@tinanggur.com"
                className="login-input"
              />
            </div>
          </div>
          <div className="login-field">
            <label className="login-label">Password</label>
            <div className="login-input-wrapper">
              <span className="login-input-icon">🔒</span>
              <input
                type="password"
                placeholder="••••••••"
                className="login-input"
              />
            </div>
          </div>
          <div className="login-remember-row">
            <label className="login-remember-checkbox">
              <input type="checkbox" style={{ accentColor: '#0f7a4a' }} /> Ingat saya
            </label>
            <button type="button" className="login-forgot-btn">
              Lupa password?
            </button>
          </div>
          <button
            type="submit"
            className="btn-primary login-submit-btn"
          >
            Masuk Sistem <span>→</span>
          </button>
          <div className="login-divider-row">
            <div className="login-divider-line" />
            <span>Atau masuk dengan</span>
            <div className="login-divider-line" />
          </div>
          <button
            type="button"
            className="login-google-btn"
          >
            <span className="login-google-icon">G</span>
            <span>Google</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

