const createAuthStateSlice = (set: any, get: any) => {
  return {
    isAuthenticated: false,
    user: {},
    setAuthenticated: (authState: boolean) => {
      set((state: any) => {
        return { isAuthenticated: authState }
      })
    },
  }
}

export default createAuthStateSlice
