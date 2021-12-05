import create from "zustand"
import { devtools } from "zustand/middleware"
import toDo from "./todo"
import loadingState from "./loadingState"
import authState from "./authState"

const store = (set: any, get: any) => ({
  ...toDo(set, get),
  ...loadingState(set, get),
  ...authState(set, get),
})

const useStore = create(devtools(store))

export default useStore
