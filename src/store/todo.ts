type todoItem = { id: string; text: string }

const createTodoSlice = (set: any, get: any) => {
  return {
    todoList: [],
    addTodo: (newTodo: todoItem) => {
      set((state: any) => {
        return { todoList: [...state.todoList, newTodo] }
      })
    },
  }
}

export default createTodoSlice
