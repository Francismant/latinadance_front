import { useContext } from "react";
import { AuthContext } from "../../../context";
import { Navigate } from "react-router-dom";

export function ProtectedProfileRoute({ children }) {
    const {user} = useContext(AuthContext)
  return (
    user ? children : <Navigate to="/login"/>
  )
}

export function ProtectedRegisterRoute({ children }) {
  const email = new URLSearchParams(window.location.search).get("email")
  return (
    email ? children : <Navigate to="/createAccount"/>
  )
}

export function ProtectedPasswordRoute({ children }) {
  const email = new URLSearchParams(window.location.search).get("email")
  return (
    email ? children : <Navigate to="/forgotPassword"/>
  )
}

