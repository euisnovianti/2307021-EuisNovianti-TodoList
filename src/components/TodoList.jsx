import { useState } from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h3>Daftar Tugas:</h3>
      {todos.length === 0 ? <p>Belum ada data.</p> : todos.map(t => (
        <div key={t.id} className="card">
          <strong>{t.judul}</strong>
          <p>{t.deskripsi}</p>
        </div>
      ))}
    </div>
  );
};
export default TodoList;