import create from "zustand"
import { devtools } from "zustand/middleware"
import toDo from "./todo"
import loadingState from "./loadingState"
import authState from "./authState"
import createErrorStateSlice from "./errorState"

const store = (set: any, get: any) => ({
  ...toDo(set, get),
  ...loadingState(set, get),
  ...authState(set, get),
  ...createErrorStateSlice(set, get),
})

const useStore = create(devtools(store))

export default useStore
