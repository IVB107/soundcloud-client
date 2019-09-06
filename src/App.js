import React from 'react'
import Styled from 'styled-components'

import Nav from './components/Nav'
import Search from './components/Search'
import Player from './components/Player'
import Filter from './components/Filter'
import Results from './components/Results'

function App() {
  return (
    <div>
      <Nav />
      <Search />
      <Results />
      <Filter />
      <Player />
    </div>
  );
}

export default App;
