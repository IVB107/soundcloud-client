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
      <p><i class="fas fa-play"></i></p>
      <p>Next Track</p>
    </ControlContainer>
  )
}

export default PlayerControls

const ControlContainer = Styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;

  p {
    margin-left: 6px;
    border: 1px solid white;
    color: #eaf1f7;
  }
`