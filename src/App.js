import React from 'react'
import Styled from 'styled-components'

import Nav from './components/Nav'
import Search from './components/Search'
import Player from './components/Player'
import Filter from './components/Filter'
import TrackList from './components/TrackList'
import AuthContextProvider from './contexts/AuthContext'

function App() {
  return (
    <AppContainer>
      <AuthContextProvider >
        <Nav />
        <h1>Discover new music, instantly.</h1>
        <Search />
          
        <ResultsContainer >
          <TrackList />
          <Filter />
        </ResultsContainer>
          <Player />
      </AuthContextProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(-30deg, #12262d, #4baa67);
  background-attachment: fixed;

  h1 {
    align-self: flex-start;
    margin: 3rem 0 0;
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