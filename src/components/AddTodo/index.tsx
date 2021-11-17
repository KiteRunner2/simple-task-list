import React, { useRef } from "react"

interface Props {
  onAddTodo: (text: string) => void
}

function AddTodo(props: Props) {
  const textInput = useRef<HTMLInputElement>(null)
  const handleAddTodo = () => {
    props.onAddTodo(textInput.current!.value)
  }
  return (
    <div>
      <input type="text" ref={textInput} />
      <button onClick={handleAddTodo}>+</button>
    </div>
  )
}

export default AddTodo
