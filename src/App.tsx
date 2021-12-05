import React from "react"
import "./App.css"
import "./components/TodoList"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import useStore from "./store"
import LoginOrRegister from "./components/Login"

function App() {
  const { list, addTodo } = useStore((state) => {
    return { list: state.todoList, addTodo: state.addTodo }
  })
  const { isLoading, setLoading } = useStore((state) => {
    return { isLoading: state.isLoading, setLoading: state.setLoading }
  })

  const isAuthenticated = useStore((state) => {
    return state.isAuthenticated
  })

  const handleAddToDo = (text: string) => {
    addTodo({ id: Math.random().toString(), text })
  }

  if (!isAuthenticated) return <LoginOrRegister />
  if (isLoading) {
    return <div>Loading data...</div>
  }
  return (
    <div className="App">
      <h1>Simple task list and note taker</h1>
      <div>
        <AddTodo onAddTodo={handleAddToDo} />
        <TodoList todoList={list} />
      </div>
    </div>
  )
}

export default App
