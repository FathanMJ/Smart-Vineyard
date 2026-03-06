function LoginPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #f5f9ff 0%, #eef7f2 50%, #fefefe 100%)',
        padding: '1.5rem',
      }}
    >
      <div
        className="card login-card-enter"
        style={{
          width: '380px',
          maxWidth: '100%',
          borderRadius: '1rem',
          padding: '2rem',
          backgroundColor: '#ffffff',
          border: '1px solid #e3ecf3',
          boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
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
          <div
            className="section-title"
            style={{
              textAlign: 'center',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#111827',
            }}
          >
            Smart Vineyard
          </div>
          <div
            className="section-description"
            style={{
              textAlign: 'center',
              fontSize: '0.86rem',
              color: '#6b7280',
            }}
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
            <label style={{ fontSize: '0.8rem', fontWeight: 500, color: '#374151' }}>
              Email / Username
            </label>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '0.6rem',
              border: '1px solid #d1d5db',
              padding: '0.45rem 0.75rem',
              backgroundColor: '#ffffff',
              transition: 'border-color 0.2s ease',
            }}
          >
            <span
              style={{
                fontSize: '0.95rem',
                marginRight: '0.4rem',
                color: '#6b7280',
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
            <label style={{ fontSize: '0.8rem', fontWeight: 500, color: '#374151' }}>
              Password
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0.6rem',
                border: '1px solid #d1d5db',
                padding: '0.45rem 0.75rem',
                backgroundColor: '#ffffff',
                transition: 'border-color 0.2s ease',
              }}
            >
              <span
                style={{
                  fontSize: '0.95rem',
                  marginRight: '0.4rem',
                  color: '#6b7280',
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
            className="btn-primary"
            style={{
              marginTop: '0.1rem',
              padding: '0.7rem 0.7rem',
              borderRadius: '999px',
              border: 'none',
              background:
                'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
              color: '#f7fff9',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              boxShadow: '0 10px 25px rgba(22, 163, 74, 0.35)',
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
              borderRadius: '999px',
              border: '1px solid #d1d5db',
              background: '#ffffff',
              fontSize: '0.86rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              boxShadow: '0 4px 15px rgba(148, 163, 184, 0.2)',
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

