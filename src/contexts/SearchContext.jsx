import React, { createContext, useReducer } from 'react'
import { searchReducer } from '../reducers/searchReducer'

export const SearchContext = createContext()
export const initialState = {
  searchType: ['artist'],
  input: '',
  results: [],
  selected: [],
  limit: 20,
  options: {
    popularity: [0, 100],
    energy: [0, 100],
    vocals: [0, 100],
    tempo: [0, 100],
    danceability: [0, 100],
    mood: [0, 100],
    acoustics: [0, 100]
  },
  suggested_tracks: [],
  current_track: {},
  sort_by: ''
}

const SearchContextProvider = (props) => {
  // Set initial authentication state
  const [search, dispatch] = useReducer(searchReducer, initialState)
  return (
    <SearchContext.Provider value={{search, dispatch}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider