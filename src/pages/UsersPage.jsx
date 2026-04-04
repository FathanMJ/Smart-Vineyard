import { useState, useMemo } from 'react'

const ROLE_LABEL = {
  owner: 'Owner',
  agronomis: 'Agronomis',
  staff: 'Staff',
}

const seedUsers = [
  { id: 'U-001', name: 'Fathan', email: 'admin@tinanggur.com', role: 'owner', status: 'active' },
  { id: 'U-002', name: 'Nadia', email: 'nadia@tinanggur.com', role: 'agronomis', status: 'active' },
  { id: 'U-003', name: 'Rizky', email: 'rizky@tinanggur.com', role: 'staff', status: 'active' },
  { id: 'U-004', name: 'Dina', email: 'dina@tinanggur.com', role: 'staff', status: 'disabled' },
]

export default function UsersPage() {
  const [users, setUsers] = useState(seedUsers)
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('all')
  const [status, setStatus] = useState('all')

  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', role: 'staff', status: 'active' })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter((u) => {
      const matchesQ =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.id.toLowerCase().includes(q)
      const matchesRole = role === 'all' ? true : u.role === role
      const matchesStatus = status === 'all' ? true : u.status === status
      return matchesQ && matchesRole && matchesStatus
    })
  }, [users, query, role, status])

  const startCreate = () => {
    setEditingId('new')
    setForm({ name: '', email: '', role: 'staff', status: 'active' })
  }

  const startEdit = (u) => {
    setEditingId(u.id)
    setForm({ name: u.name, email: u.email, role: u.role, status: u.status })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setForm({ name: '', email: '', role: 'staff', status: 'active' })
  }

  const save = () => {
    const name = form.name.trim()
    const email = form.email.trim()
    if (!name || !email) return

    if (editingId === 'new') {
      const nextId = `U-${String(users.length + 1).padStart(3, '0')}`
      setUsers((prev) => [...prev, { id: nextId, name, email, role: form.role, status: form.status }])
    } else {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingId ? { ...u, name, email, role: form.role, status: form.status } : u,
        ),
      )
    }
    cancelEdit()
  }

  const remove = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
    if (editingId === id) cancelEdit()
  }

  return (
    <div className="page page-with-padding page-shell">
      <section className="card card-elevated u-mb-15">
        <div className="card-header card-header-top card-header-top-gap">
          <div>
            <div className="card-title card-title-lg">Manajemen Pengguna</div>
            <div className="card-subtitle card-subtitle-lg">
              Tambah, edit, nonaktifkan akun (dummy UI — siap dihubungkan ke API).
            </div>
          </div>
          <div className="u-flex u-gap-075 u-flex-wrap">
            <button type="button" className="btn-pill-primary" onClick={startCreate}>
              + Tambah Pengguna
            </button>
          </div>
        </div>

        <div className="form-grid-3 u-mb-1">
          <div>
            <div className="text-sm-muted">Cari</div>
            <input
              className="form-control"
              placeholder="Nama / email / ID"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <div className="text-sm-muted">Role</div>
            <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="all">Semua</option>
              <option value="owner">Owner</option>
              <option value="agronomis">Agronomis</option>
              <option value="staff">Staff</option>
            </select>
          </div>
          <div>
            <div className="text-sm-muted">Status</div>
            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">Semua</option>
              <option value="active">Aktif</option>
              <option value="disabled">Nonaktif</option>
            </select>
          </div>
        </div>

        {editingId ? (
          <div className="card card-elevated">
            <div className="card-header card-header-top">
              <div>
                <div className="card-title card-title-lg">
                  {editingId === 'new' ? 'Tambah Pengguna' : `Edit Pengguna (${editingId})`}
                </div>
                <div className="card-subtitle card-subtitle-lg">
                  Isi data di bawah, lalu simpan.
                </div>
              </div>
              <div className="u-flex u-gap-075 u-flex-wrap">
                <button type="button" className="btn-pill-outline" onClick={cancelEdit}>
                  Batal
                </button>
                <button type="button" className="btn-pill-primary" onClick={save}>
                  Simpan
                </button>
              </div>
            </div>

            <div className="form-grid-3">
              <div>
                <div className="text-sm-muted">Nama</div>
                <input
                  className="form-control"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <div className="text-sm-muted">Email</div>
                <input
                  className="form-control"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="email@domain.com"
                />
              </div>
              <div>
                <div className="text-sm-muted">Role</div>
                <select
                  className="form-control"
                  value={form.role}
                  onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
                >
                  <option value="owner">Owner</option>
                  <option value="agronomis">Agronomis</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div>
                <div className="text-sm-muted">Status</div>
                <select
                  className="form-control"
                  value={form.status}
                  onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                >
                  <option value="active">Aktif</option>
                  <option value="disabled">Nonaktif</option>
                </select>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      <section className="card card-elevated">
        <div className="card-header card-header-top">
          <div>
            <div className="card-title card-title-lg">Daftar Pengguna</div>
            <div className="card-subtitle card-subtitle-lg">
              Total: <strong>{filtered.length}</strong>
            </div>
          </div>
        </div>

        <div className="simple-card-list">
          {filtered.map((u) => (
            <article key={u.id} className="card card-elevated">
              <div className="u-flex u-justify-between u-align-start u-gap-1">
                <div>
                  <div className="u-flex u-align-center u-gap-075 u-flex-wrap">
                    <div className="card-title card-title-lg">{u.name}</div>
                    <span className={u.status === 'active' ? 'badge-pill-success' : 'badge-pill-neutral'}>
                      {u.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
                    <span className="badge-pill-neutral">{ROLE_LABEL[u.role] ?? u.role}</span>
                  </div>
                  <div className="text-body u-mt-025">{u.email}</div>
                  <div className="text-sm-muted u-mt-025">ID: {u.id}</div>
                </div>
                <div className="u-flex u-gap-05 u-flex-wrap">
                  <button type="button" className="btn-pill-sm-outline" onClick={() => startEdit(u)}>
                    Edit
                  </button>
                  <button type="button" className="btn-pill-sm-primary" onClick={() => remove(u.id)}>
                    Hapus
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
