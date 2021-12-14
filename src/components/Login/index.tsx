import React, { useState } from "react"
import "./index.css"
import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"
import useStore from "../../store"
import authActions from "../../actions/auth"

function SignUpNotice() {
  const setIsRegistering = useStore((state) => state.setIsRegistering)
  const isRegistering = useStore((state) => state.isRegistering)

  const handleSignUpClick = () => {
    setIsRegistering(!isRegistering)
  }
  return (
    <span className="signup-notice__click-text" onClick={handleSignUpClick}>
      {isRegistering
        ? " or Sign in if you have account"
        : " or click here to Sign up"}
    </span>
  )
}

function LoginOrRegister() {
  const [input, setInput] = useState({ email: "", password: "" })
  const isRegistering = useStore((state) => state.isRegistering)

  const { openToast } = useStore((state) => {
    return { openToast: state.showToast }
  })
  const { isLoading } = useStore((state) => {
    return { isLoading: state.isLoading, setLoading: state.setLoading }
  })
  const { setError, resetError } = useStore((state) => {
    return {
      setError: state.setError,
      resetError: state.resetError,
    }
  })

  const handleLogin = async () => {
    const response = await authActions.Login({
      email: input["email"],
      password: input["password"],
    })
    if (response.$data) {
      console.log("success")
    } else {
      setError("error during login")
    }
  }

  const handleRegister = async () => {
    const response = await authActions.Register({
      email: input["email"],
      password: input["password"],
    })
    if (response.$error) {
      openToast({
        shouldShow: true,
        title: "Error",
        description: response.$error.message,
        duration: 3000,
        status: "error",
      })
    } else {
      openToast({
        shouldShow: true,
        title: "Account created",
        description: "Your account was created. You can sign in now.",
        duration: 3000,
        status: "success",
      })
    }
  }
  const handleButtonClick = () => {
    if (isRegistering) {
      return handleRegister()
    }
    return handleLogin()
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <Input
          marginBottom="5px"
          placeholder="email"
          value={input["email"]}
          name="email"
          onChange={handleInputChange}
        />
        <Input
          marginBottom="5px"
          placeholder="password"
          type="password"
          value={input["password"]}
          name="password"
          onChange={handleInputChange}
        />
        <Button
          colorScheme="blue"
          onClick={handleButtonClick}
          isLoading={isLoading}
          loadingText="Logging you in..."
        >
          {isRegistering ? "Sign up" : "Sign in"}
        </Button>
        <span></span>
        <SignUpNotice />
      </div>
    </div>
  )
}

export default LoginOrRegister
