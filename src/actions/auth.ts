import useStore from "../store"

async function Login({ email, password }: { email: string; password: string }) {
  const data = {
    email,
    password,
  }

  try {
    useStore.setState({ isLoading: true })
    let response: any = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    response = await response.json()
    return response
  } catch (err) {
    return { $error: err }
  } finally {
    useStore.setState({ isLoading: false })
  }
}

async function Register({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const data = {
    email,
    password,
  }

  try {
    useStore.setState({ isLoading: true })
    let response: any = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    response = await response.json()
    useStore.setState({ toast: { shouldShow: true } })
    return response
  } catch (err) {
    useStore.setState({ toast: { shouldShow: true } })
    return { $error: err }
  } finally {
    useStore.setState({ isLoading: false })
  }
}

const actions = {
  Login,
  Register,
}
export default actions
