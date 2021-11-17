import React from "react"

import "./index.css"

function TodoList(props: { todoList: { id: string; text: string }[] }) {
  return (
    <div>
      {props.todoList.map((item) => {
        return (
          <div className="todo-list__container">
            <div className="todo-list__item">
              {item.text}
              <button>-</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
