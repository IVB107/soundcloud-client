import React, { useContext } from 'react'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'

const Player = () => {
  const { search, dispatch } = useContext(SearchContext)

  return (
    <PlayerContainer>
      <div>
        <img src="" alt=""/>
      </div>
      <div>
        <p>Song Name</p>
        <p>Artist Name</p>
      </div>
      <div>
        <p>Playback Device</p>
        <p>Play/Pause</p>
        <p>Next Track</p>
      </div>
    </PlayerContainer>
  )
}

export default Player

const PlayerContainer = Styled.div`
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  margin: 0;
  padding: 0;
`