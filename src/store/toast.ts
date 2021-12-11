const createToastSlice = (set: any, get: any) => {
  return {
    toast: {
      shouldShow: false,
    },
    setShouldShowToast: (showState: boolean) => {
      set((state: any) => {
        return { toast: { shouldShow: showState } }
      })
    },
  }
}

export default createToastSlice
