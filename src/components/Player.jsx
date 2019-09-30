import React, { useContext } from 'react'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'

const Player = () => {
  const { search, dispatch } = useContext(SearchContext)

  return (
    <>
      {search.selected.length > 0 &&
        <PlayerContainer>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <p>Song Name</p>
            <p>Artist Name</p>
          </div>
          <PlayerControls>
            <p>Playback Device</p>
            <p>Play/Pause</p>
            <p>Next Track</p>
          </PlayerControls>
        </PlayerContainer>
      }
    </>
  )
}

export default Player

const PlayerContainer = Styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 60px;
  bottom: 0;
`

const PlayerControls = Styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  /* justify-content: flex-end; */

  p {
    margin-left: 6px;
    border: 1px solid white;
  }
`