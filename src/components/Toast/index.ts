import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import useStore from "../../store"

export default function Toast() {
  const toast = useToast()
  const shouldShowToast = useStore((state) => {
    return state.toast.shouldShow
  })
  const hideToast = useStore((state) => {
    return state.hideToast
  })
  const { title, description, duration, status } = useStore((state) => {
    return {
      title: state.toast.title,
      description: state.toast.description,
      duration: state.toast.duration,
      status: state.toast.status,
    }
  })
  useEffect(() => {
    if (shouldShowToast) {
      toast({ title, description, duration, status, isClosable: true })
    }
    hideToast()
  }, [shouldShowToast])
  return null
}
