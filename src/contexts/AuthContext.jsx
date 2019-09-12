import React, { createContext, Component } from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
    username: '',
  }

  render() {
    return (
      <AuthContext.Provider value={{...this.state}}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider