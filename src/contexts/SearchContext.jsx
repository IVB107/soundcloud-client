import React, { createContext, useReducer } from 'react'
import { searchReducer } from '../reducers/searchReducer'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
  // Set initial authentication state
  const [search, dispatch] = useReducer(searchReducer, {
    searchType: ['artist'],
    input: '',
    results: [],
    selected: [],
    options: {},
    suggested_tracks: [],
    current_track: {}
  })
  return (
    <SearchContext.Provider value={{search, dispatch}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider