import React, { useEffect } from 'react'
import Styled from 'styled-components'
import Script from 'react-load-script'

import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Player from './components/Player'
import OptionMenu from './components/OptionMenu'
import TrackList from './components/TrackList'
import AuthContextProvider from './contexts/AuthContext'
import SearchContextProvider from './contexts/SearchContext'
import PlaybackContextProvider from './contexts/PlaybackContext'

const App = () => {

  const handleLoadSuccess = () => {
    // this.setState({ scriptLoaded: true });
    console.log("Script loaded")
    const token = 'BQCNHZ8g8ctJheiTnJZlFA8TsvVv3BGu1kZwJl_o6Yd9zujXMwwizpsd3v8qTgXFi27gGy4uxVOUSPvoPwTCw_sRAvPoUROWUdGRCmWmwZVi8tzzV3GTSzKYe0jRdiLpDdE9xkKaki-utiPEKYWiDzEihIlj8GdjRWBkk50'
    const player = new window.Spotify.Player({
      name: 'AudioPilot Player',
      getOAuthToken: cb => { cb(token) }
    })
    console.log(player)
    // Error handling
    player.addListener('initialization_error', ({ message }) => console.log('Error:', message))
    player.addListener('authentication_error', ({ message }) => console.log('Error:', message))
    player.addListener('account_error', ({ message }) => console.log('Error:', message))
    player.addListener('playback_error', ({ message }) => console.log('Error:', message))
    // Playback status updates
    player.addListener('player_state_changed', state => console.log(state))
    // Ready
    player.addListener('ready', ({ device_id }) => console.log('Ready with Device ID', device_id))
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => console.log('Device ID has gone offline', device_id))
    // Connect to the player!
    player.connect()
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
    <AuthContextProvider >
      <Script 
        url="https://sdk.scdn.co/spotify-player.js"
        onCreate={() => handleScriptCreate()}
        onError={() => handleScriptError()}
        onLoad={() => handleScriptLoad()}
      />
      <AppContainer>
        <Nav />
        <h1>Discover new music, instantly.</h1>
        <SearchContextProvider >
          <SearchBar />
            <ResultsContainer >
              <TrackList />
              <OptionMenu />
            </ResultsContainer>
            <PlaybackContextProvider >
              <Player />
            </PlaybackContextProvider>
        </SearchContextProvider>
      </AppContainer>
    </AuthContextProvider>
  );
}

export default App;

const AppContainer = Styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(-30deg, #12262d, #4baa67);
  background-attachment: fixed;

  h1 {
    align-self: flex-start;
    margin: 1rem 0 0;
    padding: 0 20px;
    font-size: 2rem;
    color: #eaf1f7;
  }
`

const ResultsContainer = Styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
`