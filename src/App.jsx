import { useState } from 'react'
import TodoListForm from './components/TodoListForm'
import TodoList from './components/TodoList'
import Header from './components/Header'


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos,todo])
  }

  return (
      <div>
        <Header/>

       <button onClick={() => setIsLogin  (!isLogin)}>
        {isLogin ? "Logout" : "Login"}
       </button>

       {isLogin && (
        <>
        <TodoListForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
        </>
       )}
       </div>
  )
}

export default App;
