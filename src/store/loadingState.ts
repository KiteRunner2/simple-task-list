const createLoadingStateSlice = (set: any, get: any) => {
  return {
    isLoading: false,
    setLoading: (loadingState: boolean) => {
      set((state: any) => {
        return { isLoading: loadingState }
      })
    },
  }
}

export default createLoadingStateSlice
