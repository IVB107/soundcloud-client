import React, { createContext, useReducer } from 'react'
import { playbackReducer } from '../reducers/playbackReducer'

export const PlaybackContext = createContext()

const PlaybackContextProvider = (props) => {
  // Set initial playback state
  const [search, dispatch] = useReducer(playbackReducer, {
    currentDevice: null,
    currentTrack: null,
    isPlaying: false,
    trackDuration: null,
    trackProgress: null,
  })
  return (
    <PlaybackContext.Provider value={{search, dispatch}}>
      {props.children}
    </PlaybackContext.Provider>
  )
}

export default PlaybackContextProvider