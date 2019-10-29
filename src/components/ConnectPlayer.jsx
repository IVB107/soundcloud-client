import React, { useContext, useEffect } from 'react'
import Script from 'react-load-script'

import { AuthContext } from '../contexts/AuthContext'

const ConnectPlayer = () => {
  const { auth, dispatch } = useContext(AuthContext)
  const handleLoadSuccess = async () => {
    // this.setState({ scriptLoaded: true });
    console.log("Script loaded")
    // While access token is in URL string, grab it from there
    // NOTE: TOKENS NEED TO BE KEPT SECRET & STORED ON SERVER
    let token = window.location.toString().split('access_token=')[1].split('&')[0]
    const player = new window.Spotify.Player({
      name: 'AudioPilot Player',
      getOAuthToken: cb => { cb(token) }
    })
    console.log(player)
    // Error handling
    player.addListener('initialization_error', ({ message }) => console.log('Error:', message))
    player.addListener('authentication_error', ({ message }) => {
      console.log('Error:', message)
      dispatch({
        type: 'WEB_PLAYER_DISCONNECTED'
      })
    })
    player.addListener('account_error', ({ message }) => console.log('Error:', message))
    player.addListener('playback_error', ({ message }) => console.log('Error:', message))
    // Playback status updates
    player.addListener('player_state_changed', state => console.log('Player State Changed:', state))
    // Ready
    player.addListener('ready', ({ device_id }) => console.log('Ready with Device ID', device_id))
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => console.log('Device ID has gone offline', device_id))
    // Connect to the player!
    await player.connect()
      .then(res => {
        dispatch({
          type: 'WEB_PLAYER_CONNECTED'
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: 'WEB_PLAYER_DISCONNECTED'
        })
      })
  }

  const cb = (token) => {
    return(token);
  }

  const handleScriptCreate = () => {
    // this.setState({ scriptLoaded: false });
    console.log("Script created");
  }

  const handleScriptError = () => {
    // this.setState({ scriptError: true });
    console.log("Script error");
  }

  const handleScriptLoad = () => {
    // this.setState({ scriptLoaded: true});
    console.log("Script loaded");
  }

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      handleLoadSuccess()
    }
  }, [])


  return (
    <>
      <Script 
        url="https://sdk.scdn.co/spotify-player.js"
        onCreate={() => handleScriptCreate()}
        onError={() => handleScriptError()}
        onLoad={() => handleScriptLoad()}
      />
    </>
  )
}

export default ConnectPlayer