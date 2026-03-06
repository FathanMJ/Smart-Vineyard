function LoginPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f3f6f9',
        padding: '1.5rem',
      }}
    >
      <div
        className="card"
        style={{
          width: '380px',
          maxWidth: '100%',
          borderRadius: '1.2rem',
          boxShadow: '0 18px 45px rgba(12, 55, 40, 0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.25rem',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '999px',
              background:
                'radial-gradient(circle at 30% 20%, #e9f9f1 0, #c4e4cf 60%, #0f7a4a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.3rem',
            }}
          >
            S
          </div>
          <div className="section-title" style={{ textAlign: 'center' }}>
            Smart Vineyard
          </div>
          <div
            className="section-description"
            style={{ textAlign: 'center', fontSize: '0.86rem' }}
          >
            Masuk ke Saung Tinanggur Dashboard
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label style={{ fontSize: '0.8rem' }}>Email / Username</label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0.7rem',
                border: '1px solid #dde6ee',
                padding: '0.2rem 0.65rem',
                backgroundColor: '#fdfefe',
              }}
            >
              <span
                style={{
                  fontSize: '0.95rem',
                  marginRight: '0.4rem',
                  color: '#8ca0b0',
                }}
              >
                @
              </span>
              <input
                type="email"
                placeholder="admin@tinanggur.com"
                style={{
                  border: 'none',
                  outline: 'none',
                  flex: 1,
                  padding: '0.45rem 0',
                  fontSize: '0.86rem',
                  background: 'transparent',
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label style={{ fontSize: '0.8rem' }}>Password</label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0.7rem',
                border: '1px solid #dde6ee',
                padding: '0.2rem 0.65rem',
                backgroundColor: '#fdfefe',
              }}
            >
              <span
                style={{
                  fontSize: '0.95rem',
                  marginRight: '0.4rem',
                  color: '#8ca0b0',
                }}
              >
                🔒
              </span>
              <input
                type="password"
                placeholder="••••••••"
                style={{
                  border: 'none',
                  outline: 'none',
                  flex: 1,
                  padding: '0.45rem 0',
                  fontSize: '0.86rem',
                  background: 'transparent',
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '0.1rem',
              marginBottom: '0.2rem',
              fontSize: '0.8rem',
            }}
          >
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <input type="checkbox" style={{ accentColor: '#0f7a4a' }} /> Ingat saya
            </label>
            <button
              type="button"
              style={{
                border: 'none',
                background: 'none',
                color: '#0f7a4a',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              Lupa password?
            </button>
          </div>
          <button
            type="submit"
            style={{
              marginTop: '0.1rem',
              padding: '0.7rem 0.7rem',
              borderRadius: '0.8rem',
              border: 'none',
              background:
                'linear-gradient(135deg, #1fb766 0%, #109150 55%, #0b6f3d 100%)',
              color: '#f7fff9',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
            }}
          >
            Masuk Sistem <span>→</span>
          </button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0.6rem 0 0.3rem',
              fontSize: '0.8rem',
              color: '#8ca0b0',
            }}
          >
            <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
            <span>Atau masuk dengan</span>
            <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
          </div>
          <button
            type="button"
            style={{
              padding: '0.6rem 0.7rem',
              borderRadius: '0.8rem',
              border: '1px solid #dde6ee',
              background: '#ffffff',
              fontSize: '0.86rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
            }}
          >
            <span style={{ fontSize: '1rem' }}>G</span>
            <span>Google</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

