const createAuthStateSlice = (set: any, get: any) => {
  return {
    isAuthenticated: false,
    isRegistering: false,
    isRegisteringSuccessfull: false,
    user: {},
    setAuthenticated: (authState: boolean) => {
      set((state: any) => {
        return { isAuthenticated: authState }
      })
    },
    setIsRegistering: (registeringState: boolean) => {
      set((state: any) => {
        return { isRegistering: registeringState }
      })
    },
    setIsRegisteringSuccessful: (registeringState: boolean) => {
      set((state: any) => {
        return { isRegisteringSuccessfull: registeringState }
      })
    },
  }
}

export default createAuthStateSlice
