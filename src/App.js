import React from 'react'
import Styled from 'styled-components'

import Nav from './components/Nav'
import Search from './components/Search'
import Player from './components/Player'
import Filter from './components/Filter'
import Results from './components/Results'

function App() {
  return (
    <AppContainer>
      <Nav />
      <Search />
      <Results />
      <Filter />
      <Player />
    </AppContainer>
  );
}

export default App;

const AppContainer = Styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  background-image: linear-gradient(-30deg, #12262d, #4baa67);
  background-attachment: fixed;
`