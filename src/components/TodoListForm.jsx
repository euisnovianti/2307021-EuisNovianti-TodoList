import { useState } from "react";

const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = () => {
    if (judul.trim() && deskripsi.trim()) {
      onAddTodo({
        id: Date.now(),
        judul: judul,
        deskripsi: deskripsi,
        tanggal: new Date().toLocaleString('id-ID')
      });
      
      setJudul('');
      setDeskripsi('');
    }
  };

  return (
    <div className="bg-teal-50 p-6 rounded border border-teal-300">
      <div className="mb-3">
        <label className="block text-teal-800 text-sm mb-1">Judul</label>
        <input
          type="text"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full px-3 py-2 border border-teal-300 rounded bg-white focus:outline-none focus:border-teal-500"
          placeholder="Judul kegiatan"
        />
      </div>
      
      <div className="mb-3">
        <label className="block text-teal-800 text-sm mb-1">Deskripsi</label>
        <textarea
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          className="w-full px-3 py-2 border border-teal-300 rounded bg-white focus:outline-none focus:border-teal-500"
          placeholder="Deskripsi kegiatan"
          rows="3"
        />
      </div>
      
      <button
        onClick={handleSubmit}
        className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
      >
        Tambahkan
      </button>
    </div>
  );

export default TodoListForm;