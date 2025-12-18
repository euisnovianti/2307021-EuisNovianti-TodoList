import { useState } from 'react'
import TodoListForm from './components/TodoListForm'
import TodoList from './components/TodoList'
import Header from './components/Header'


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [todos, setTodos] = useState([])

  const nim ="2307021"
  const nama = "Euis Novianti"

  const addTodo = (todo) => {
    setTodos([...todos,todo])
  }

  return (
      <div className="min-h-screen bg-teal-100">
      <Header 
        nim={nim} 
        nama={nama} 
        onLogout={() => setIsLogin(false)}
        isLoggedIn={isLogin}
      />

       <div className="container mx-auto px-4 py-8 max-w-2xl">
        {!isLogin ? (
          <div className="bg-teal-50 border border-teal-300 rounded p-8 text-center">
            <h2 className="text-xl font-semibold mb-4 text-teal-800">
              Selamat Datang di Praktikum Web
            </h2>
            <p className="text-teal-700 mb-6">
              Silakan login untuk melanjutkan
            </p>
            <button
              onClick={() => setIsLogin(true)}
              className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600 transition font-medium"
            >
              Login
            </button>
          </div>
        ) : (
          <div>
            <TodoListForm addTodo={addTodo} />
            <TodoList todos={todos} />
          </div>
        )}
      </div>

       </div>
  )
}

export default App;
