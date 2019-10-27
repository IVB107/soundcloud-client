import React, { createContext, useReducer } from 'react'
import { authReducer } from '../reducers/authReducer'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  // Set initial authentication state
  const [auth, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    playerConnected: false,
    username: null,
    user: null
  })
  return (
    <AuthContext.Provider value={{auth, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider