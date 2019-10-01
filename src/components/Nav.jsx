import React, { useEffect, useContext } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'

import { AuthContext } from '../contexts/AuthContext'

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
  const { auth, dispatch } = useContext(AuthContext)

  const getPlaybackState = async () => {
    await spotifyApi.getMyCurrentPlaybackState()
      .then(response => {
        console.log('Playback State Object: ', response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getUser = async () => {
    await spotifyApi.getMe()
      .then((response) => {
        console.log('getUser() Response: ', response)
        dispatch({
          type: 'LOG_IN',
          isAuthenticated: true, 
          username: response.display_name,
          user: response
        })
      })
      .catch(err => {
        console.log('ERROR: ', err)
      })
  }
  
  useEffect(() => {
    let params = getHashParams()
    spotifyApi.setAccessToken(params.access_token)
    if (params.access_token && !auth.username){
      getUser()
    }
    console.log('AUTH: ', auth)
  })

  useEffect(() => {
    if (auth.isAuthenticated) getPlaybackState()
  }, [auth.isAuthenticated])

  return (
    <NavContainer>
      <NavLeft><p>AudioPilot</p></NavLeft>
      {auth.username !== null && 
        <UserInfo>
          <div>
            <img src={auth.user.images[0].url} alt={auth.user.display_name}/>
          </div>
          <div>
            <p>User: {auth.username}</p>
            <p>Followers: {auth.user.followers.total}</p>
          </div>
        </UserInfo>
      }
      <NavRight>
        {auth.isAuthenticated ? (
          // ----- MISSING 'LOGOUT' LINK -----
          <a href="http://localhost:8888"><button>Log Out</button></a>
        ) : (
          <a href="http://localhost:8888"><button>Connect with Spotify</button></a>
        )}
      </NavRight>
    </NavContainer>
  )
}

export default Nav

const NavContainer = Styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  border-bottom: 2px solid black;
  justify-content: space-between;

  div {
    /* width: 50%; */
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
    /* color: #ead441; */
    color: #e4f489;
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

const UserInfo = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    margin: 0 6px;
  }

  div img {
    height: 40px;
    width: 40px;
    border: 1px solid black;
    border-radius: 50%;
  }

  div p {
    color: #eaf1f7;
    margin: 0;
    padding: 0;
    font-size: .8rem;
  }
`