import React from 'react'
import Styled from 'styled-components'

import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Player from './components/Player'
import Options from './components/Options'
import TrackList from './components/TrackList'
import AuthContextProvider from './contexts/AuthContext'
import SearchContextProvider from './contexts/SearchContext'

const App = () => {

  return (
    <AuthContextProvider >
      <AppContainer>
        <Nav />
        <h1>Discover new music, instantly.</h1>
        <SearchContextProvider >
          <SearchBar />
          <ResultsContainer >
            <TrackList />
            <Options />
          </ResultsContainer>
          <Player />
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