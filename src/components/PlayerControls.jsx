import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'

import { PlaybackContext } from '../contexts/PlaybackContext'

const PlayerControls = () => {
  const {playback, dispatch} = useContext(PlaybackContext)
  const spotifyApi = new Spotify()

  return (
    <ControlContainer>
      <p>Playback Device</p>
      <button><i class="fas fa-fast-backward"></i></button>
      <Play><i class="fas fa-play"></i></Play>
      <button><i class="fas fa-fast-forward"></i></button>
    </ControlContainer>
  )
}

export default PlayerControls

const ControlContainer = Styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;

  button {
    margin-left: 10px;
    color: #eaf1f7;
    background: none;
    border: none;
    cursor: pointer;
    transition: .1s;

    :hover {
      transform: scale(1.2, 1.2);
      transition: .1s;
    }

    i {
      margin: none;
      padding: none;
      transition: .1s;
    }
  }
`

const Play = Styled.button`
  padding: 10px 12px;
  color: #eaf1f7;
  border-radius: 50%;
  background-color: green;
  border: 2px solid #e4f489 !important;
`