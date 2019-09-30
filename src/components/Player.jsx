import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'

const Player = () => {
  const { search, dispatch } = useContext(SearchContext)
  const current = search.current_track

  useEffect(() => {
    console.log('CURRENT TRACK: ', current)
  }, [search.current_track])

  return (
    <>
      {current.album &&
        <PlayerContainer>
          <ArtworkContainer>
            <img src={current.album.images[0].url} alt={current.name}/>
          </ArtworkContainer>
          <div>
            <p>{current.name}</p>
            <p>{current.artists[0].name}</p>
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
  /* border: 1px solid red; */
  background-color: #e4f489;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 80px;
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

const ArtworkContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  
  img {
    height: 80px;
    width: 80px;
    margin: 0;
    padding: 0;
  }
`