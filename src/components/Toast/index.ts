import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import useStore from "../../store"

interface ToastProps {
  shouldShowToast: boolean
  title: string
  description: string
  status: "success" | "error"
  duration: number
}
export default function Toast(props: ToastProps) {
  const toast = useToast()
  useEffect(() => {
    if (props.shouldShowToast) {
      toast({
        title: props.title,
        description: props.description,
        status: props.status,
        duration: props.duration,
        isClosable: true,
      })
    }
  }, [props.shouldShowToast])
  return null
}
