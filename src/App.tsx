import React from "react"
import "./components/TodoList"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import useStore from "./store"
import LoginOrRegister from "./components/Login"
import AppContainer from "./components/AppContainer"

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

  if (!isAuthenticated)
    return (
      <AppContainer>
        <LoginOrRegister />
      </AppContainer>
    )
  if (isLoading) {
    return <div>Loading data...</div>
  }
  return (
    <AppContainer>
      <h1>Simple task list and note taker</h1>
      <div>
        <AddTodo onAddTodo={handleAddToDo} />
        <TodoList todoList={list} />
      </div>
    </AppContainer>
  )
}

export default App
