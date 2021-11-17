import React, { useState } from "react"
import "./App.css"
import "./components/TodoList"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

type todoItem = { id: string; text: string }

function App() {
  const [todoList, setTodoList] = useState<todoItem[]>([])

  const handleAddToDo = (text: string) => {
    setTodoList([...todoList, { id: Math.random().toString(), text }])
  }
  return (
    <div className="App">
      <h1>Simple note taker</h1>
      <div>
        <AddTodo onAddTodo={handleAddToDo} />
        <TodoList todoList={todoList} />
      </div>
    </div>
  )
}

export default App
