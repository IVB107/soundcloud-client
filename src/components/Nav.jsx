import React, { useContext, useEffect, useReducer } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'

import { AuthContext } from '../contexts/AuthContext'
import { authReducer } from '../reducers/authReducer'

const spotifyApi = new Spotify()
// getHashParams() taken from /server/authorization_code/public/index.html
const getHashParams = () => {
  let hashParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g,
  q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

const Nav = () => {
  const [auth, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    username: null
  })
  let user = {}
  // const { dispatch } = useContext(AuthContext)
  const getUser = async () => {
    await spotifyApi.getMe().then((response) => {
      console.log('Response: ', response)
      user = response
      console.log('auth: ', auth)
    })
  }
  
  useEffect(() => {
    let params = getHashParams()
    if (params.access_token && !auth.isAuthenticated){
      spotifyApi.setAccessToken(params.access_token)
      getUser()
      dispatch({
        type: 'LOG_IN', 
        state: {
          isAuthenticated: true, 
          username: user.display_name
        }
      })
    }
  })
  // let user = getUser()
  // console.log('User: ', user)
  return (
    <NavContainer>
      <NavLeft><p>AudioPilot</p></NavLeft>
      <NavRight><a href="http://localhost:8888"><button>Connect with Spotify</button></a></NavRight>
    </NavContainer>
  )
}

export default Nav

const NavContainer = Styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  border-bottom: 2px solid black;

  div {
    width: 50%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
`
const NavLeft = Styled.div`
  justify-content: flex-start;

  p {
    padding: 0 20px;
    font-weight: 900;
    font-size: 2rem;
    color: #ead441;
  }
`
const NavRight = Styled.div`
  justify-content: flex-end;

  button {
    padding: 10px;
    background-color: #eaf1f7;
    font-size: .8rem;
    margin: 0 20px;
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 6px rgb(60, 60, 60);
    cursor: pointer;
  }
`