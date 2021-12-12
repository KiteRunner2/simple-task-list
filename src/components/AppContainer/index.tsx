// import React from "react"
import Toast from "../Toast"
import "./App.css"

interface AppContainerProps {
  children: JSX.Element | JSX.Element[]
}
export default function AppContainer(props: AppContainerProps) {
  return (
    <div className="main-container">
      {props.children}
      <Toast />
    </div>
  )
}
