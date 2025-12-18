import { useState } from 'react';
import Header from './components/Header';
import TodoListForm from './components/TodoListForm';
import TodoList from './components/TodoList';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [todos, setTodos] = useState([]);
  const nim = "2307021"; // NIM Anda
  const nama = "Euis Novianti"; // Nama Anda

  return (
    <div>
      <Header nim={nim} nama={nama} isLoggedIn={isLogin} onLogout={() => setIsLogin(false)} />
      <div className="container">
        {!isLogin ? (
          <div className="card" style={{ textAlign: 'center' }}>
            <h2>Selamat Datang</h2>
            <p> Euis Novianti </p>
            <p>2307021</p>
            <button onClick={() => setIsLogin(true)} className="btn-blue">Login</button>
          </div>
        ) : (
          <>
            <TodoListForm addTodo={(t) => setTodos([...todos, t])} />
            <TodoList todos={todos} />
          </>
        )}
      </div>
    </div>
  );
}
export default App;