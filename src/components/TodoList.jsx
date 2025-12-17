import { useState } from "react";

const TodoListForm = ({ onAddTodo }) => {
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
};

function TodoList({ todos, onDeleteTodo }) {
    const [showAlert, setShowAlert] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleDeleteClick = (todo) => {
        setSelectedTodo(todo);
        setShowAlert(true);
    };

    const confirmDelete = () => {
        if (selectedTodo) {
            onDeleteTodo(selectedTodo.id);
        }
        setShowAlert(false);
        setSelectedTodo(null);
    };

    const cancelDelete = () => {
        setShowAlert(false);
        setSelectedTodo(null);
    };

    if (todos.length === 0) {
        return (
            <div className="mt-6">
                <div className="bg-teal-50 border border-teal-300 rounded p-6">
                    <h2 className="text-lg font-semibold text-teal-800 mb-2">Judul Coding</h2>
                    <p className="text-teal-700">deskripsi: melakukan coding</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-6">
            {showAlert && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
                        <h3 className="text-lg font-semibold mb-2">localhost:3174 says</h3>
                        <p className="text-gray-700 mb-4">
                            Apakah anda ingin menghapus kegiatan ini?<br />
                            Kegiatan yang telah dihapus tidak dapat dikembalikan
                        </p>
                        <div className="flex gap-2 justify-end">
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="bg-teal-50 border border-teal-300 rounded p-4 flex justify-between items-start"
                    >
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-teal-800 mb-1">{todo.judul}</h3>
                            <p className="text-teal-700">deskripsi: {todo.deskripsi}</p>
                        </div>
                        <button
                            onClick={() => handleDeleteClick(todo)}
                            className="ml-4 text-red-500 hover:text-red-700 font-semibold"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;