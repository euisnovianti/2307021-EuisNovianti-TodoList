import { useState } from "react";

const TodoListForm = ({ addTodo }) => {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (judul && deskripsi) {
      addTodo({ id: Date.now(), judul, deskripsi });
      setJudul(''); setDeskripsi('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Tambah Tugas</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Judul:</label><br/>
        <input style={{ width: '96%', padding: '8px' }} value={judul} onChange={(e) => setJudul(e.target.value)} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Deskripsi:</label><br/>
        <textarea style={{ width: '96%', padding: '8px' }} value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} required />
      </div>
      <button type="submit" className="btn-teal">Tambahkan</button>
    </form>
  );
};
export default TodoListForm;