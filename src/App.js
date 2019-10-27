import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'
// import Script from 'react-load-script'

import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Player from './components/Player'
import OptionMenu from './components/OptionMenu'
import TrackList from './components/TrackList'
import AuthContextProvider, { AuthContext } from './contexts/AuthContext'
import SearchContextProvider from './contexts/SearchContext'
import PlaybackContextProvider from './contexts/PlaybackContext'
import ConnectPlayer from './components/ConnectPlayer'

const App = () => {
  return (
    <AuthContextProvider >
      <ConnectPlayer />
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