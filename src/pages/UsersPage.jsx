import { useMemo, useState, useEffect } from 'react';
import * as userApi from '../services/userApi';

const ROLE_LABEL = {
  owner: 'Owner',
  agronomis: 'Agronomis',
  staff: 'Staff',
};

export default function OwnerUsersPage() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('all');
  const [status, setStatus] = useState('all');
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', role: 'staff', status: 'active', password: '' });

  // --- 1. LOAD DATA DARI DB ---
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await userApi.getAllUsers();
      if (res.status === 'success') {
        // PENTING: Mapping nama_lengkap ke name agar tampil di UI
        const normalizedData = res.data.map(u => ({
          id: u.id,
          name: u.nama_lengkap, // Mapping dari field DB
          email: u.email,
          role: u.role ? u.role.toLowerCase() : 'staff',
          status: u.status || 'active'
        }));
        setUsers(normalizedData);
      }
    } catch (err) {
      alert("Gagal mengambil data user: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // --- LOGIKA FILTER ---
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => {
      const matchesQ = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || String(u.id).includes(q);
      const matchesRole = role === 'all' ? true : u.role === role;
      const matchesStatus = status === 'all' ? true : u.status === status;
      return matchesQ && matchesRole && matchesStatus;
    });
  }, [users, query, role, status]);

  // --- ACTION HANDLERS ---
  const startCreate = () => {
    setEditingId('new');
    setForm({ name: '', email: '', role: 'staff', status: 'active', password: '' });
  };

  const startEdit = (u) => {
    setEditingId(u.id);
    setForm({ name: u.name, email: u.email, role: u.role, status: u.status, password: '' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ name: '', email: '', role: 'staff', status: 'active', password: '' });
  };

  const save = async () => {
    if (!form.name || !form.email) return alert("Nama dan Email wajib diisi");

    try {
      const payload = {
        nama_lengkap: form.name,
        email: form.email,
        role: form.role,
        password: form.password || undefined 
      };

      if (editingId === 'new') {
        if (!form.password) return alert("Password wajib untuk user baru");
        await userApi.createUser(payload);
      } else {
        await userApi.updateUser(editingId, payload);
      }
      
      loadData(); // Refresh list
      cancelEdit();
    } catch (err) {
      alert("Simpan gagal: " + (err.message || "Terjadi kesalahan"));
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Hapus pengguna ini?")) return;
    try {
      await userApi.deleteUser(id);
      loadData();
    } catch (err) {
      alert("Gagal hapus: " + (err.message || err));
    }
  };

  if (loading && users.length === 0) return <div className="page u-p-2">Memuat data pengguna...</div>;

  return (
    <div className="page page-with-padding page-shell">
      {/* ... (Tampilan Header & Filter sama seperti kode Anda sebelumnya) ... */}
      <section className="card card-elevated u-mb-15">
        <div className="card-header card-header-top card-header-top-gap">
          <div>
            <div className="card-title card-title-lg">Manajemen Pengguna</div>
            <div className="card-subtitle card-subtitle-lg">Total Database: {users.length} user.</div>
          </div>
          <button className="btn-pill-primary" onClick={startCreate}>+ Tambah Pengguna</button>
        </div>

        {/* INPUT CARI & FILTER */}
        <div className="form-grid-3 u-mb-1">
          <input className="form-control" placeholder="Cari..." value={query} onChange={e => setQuery(e.target.value)} />
          <select className="form-control" value={role} onChange={e => setRole(e.target.value)}>
            <option value="all">Semua Role</option>
            <option value="owner">Owner</option>
            <option value="agronomis">Agronomis</option>
            <option value="staff">Staff</option>
          </select>
          <select className="form-control" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="all">Semua Status</option>
            <option value="active">Aktif</option>
            <option value="disabled">Nonaktif</option>
          </select>
        </div>

        {/* FORM EDIT/TAMBAH */}
        {editingId && (
          <div className="card card-elevated u-mb-1" style={{ border: '1px solid #ddd' }}>
            <div className="card-header">
              <div className="card-title">{editingId === 'new' ? 'User Baru' : 'Edit User'}</div>
              <div className="u-flex u-gap-05">
                <button className="btn-pill-outline" onClick={cancelEdit}>Batal</button>
                <button className="btn-pill-primary" onClick={save}>Simpan</button>
              </div>
            </div>
            <div className="form-grid-3 u-p-1">
              <input className="form-control" placeholder="Nama Lengkap" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input className="form-control" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              <input className="form-control" type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            </div>
          </div>
        )}
      </section>

      {/* LIST USER */}
      <section className="simple-card-list">
        {filtered.length > 0 ? filtered.map((u) => (
          <article key={u.id} className="card card-elevated u-mb-05">
            <div className="u-flex u-justify-between u-align-center u-p-1">
              <div>
                <div className="u-flex u-align-center u-gap-05">
                  <div className="card-title">{u.name}</div>
                  <span className="badge-pill-neutral">{ROLE_LABEL[u.role] || u.role}</span>
                </div>
                <div className="text-body">{u.email}</div>
              </div>
              <div className="u-flex u-gap-05">
                <button className="btn-pill-sm-outline" onClick={() => startEdit(u)}>Edit</button>
                <button className="btn-pill-sm-primary" onClick={() => remove(u.id)}>Hapus</button>
              </div>
            </div>
          </article>
        )) : <div className="u-text-center u-p-2">Data tidak ditemukan.</div>}
      </section>
    </div>
  );
}