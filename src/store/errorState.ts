const createErrorStateSlice = (set: any, get: any) => {
  return {
    isError: false,
    errorMessage: null,
    setError: (msg: string) => {
      set((state: any) => {
        return { isError: true, errorMessage: msg }
      })
    },
    resetError: () => {
      set((state: any) => {
        return { isError: false, errorMessage: null }
      })
    },
  }
}

export default createErrorStateSlice
