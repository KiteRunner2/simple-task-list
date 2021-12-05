import React from "react"
import "./App.css"
import "./components/TodoList"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import useStore from "./store"

function App() {
  const { list, addTodo } = useStore((state) => {
    return { list: state.todoList, addTodo: state.addTodo }
  })

  const handleAddToDo = (text: string) => {
    addTodo({ id: Math.random().toString(), text })
  }
  return (
    <div className="App">
      <h1>Simple note taker</h1>
      <div>
        <AddTodo onAddTodo={handleAddToDo} />
        <TodoList todoList={list} />
      </div>
    </div>
  )
}

export default App
