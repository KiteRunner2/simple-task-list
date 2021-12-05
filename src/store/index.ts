import create from "zustand"
import { devtools } from "zustand/middleware"
import toDo from "./todo"

const store = (set: any, get: any) => ({
  ...toDo(set, get),
})

const useStore = create(devtools(store))

export default useStore
