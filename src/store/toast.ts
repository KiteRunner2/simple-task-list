interface ToastParams {
  shouldShow: boolean
  title: string
  description: string
  duration: number
  status: "success" | "error"
}

const initialState: ToastParams = {
  shouldShow: false,
  title: "",
  description: "",
  duration: 3000,
  status: "success",
}
const createToastSlice = (set: any, get: any) => {
  return {
    toast: initialState,
    showToast: (toastParams: ToastParams) => {
      set((state: any) => {
        return { toast: { ...toastParams } }
      })
    },
    hideToast: () => {
      set((state: any) => {
        return { toast: { ...initialState } }
      })
    },
  }
}

export default createToastSlice
