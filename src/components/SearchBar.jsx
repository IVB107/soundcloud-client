import React, { useState, useReducer, useEffect } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'

import SearchResult from './SearchResult'
import { searchReducer } from '../reducers/searchReducer'

const spotifyApi = new Spotify()

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')

  const [search, dispatch] = useReducer(searchReducer, {
    searchType: ['artist'],
    input: '',
    results: []
  })

  const inputSearch = async (input) => {
    // Pass search string to state to update input value first
    dispatch({
      type: 'ON_CHANGE',
      searchType: search.searchType,
      input: input,
      results: []
    })
    if (input !== ''){
      console.log('Searching...')
      await spotifyApi.search(input, search.searchType)
        .then(response => {
          console.log('Input Search Results: ', response)
          dispatch({
            type: 'ON_CHANGE',
            searchType: search.searchType,
            input: input,
            results: response.artists.items.splice(0, 5)
          })
        })
        .catch(err => {
          console.log('ERROR: ', err)
        })
    }
  }

  const searchType = type => {
    if (search.searchType[0] !== type){
      console.log('switching search type...')
      dispatch({
        type: 'SWITCH_TYPE',
        searchType: [type],
        input: search.input,
        results: search.results
      })
    }
  }

  useEffect(() => {
    console.log('RESULTS: ', search.results)
    console.log('Search Type: ', search.searchType)
  })

  return (
    <SearchContainer>
      <form>
      <input type="text" value={search.input} onChange={e => inputSearch(e.target.value)} placeholder={`Search by ${search.searchType[0]}`}/>
        {/* <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Search by artist"/> */}
        <div>
          <SearchType 
            style={search.searchType[0] === 'artist' ? {color: `#eaf1f7`} : null} 
            onClick={() => searchType('artist')}
          >
            Artist
          </SearchType>
          <p>|</p>
          <SearchType 
            style={search.searchType[0] === 'track' ? {color: `#eaf1f7`} : null}
            onClick={() => searchType('track')}
          >
            Track
          </SearchType>
        </div>
      </form>
      <ResultsContainer >
        {/* Map over selected artists & render <SearchResult /> for each */}
        <SearchResult />
      </ResultsContainer>
    </SearchContainer>
  )
}

export default SearchBar

const SearchContainer = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: space-between;
  justify-content: center;

  form {
    display: flex;
    flex-grow: 1;
    align-items: center;
    border-bottom: 1px solid #eaf1f7;
    margin: 0 20px;

    input {
      flex-grow: 1;
      border: none;
      background: none;
      /* padding: 20px 0 6px; */
      padding: 6px 0;
      font-size: 1.4rem;
      color: #eaf1f7;
      height: 1.4rem;
    }

    input::placeholder {
      font-size: 1.4rem;
      font-weight: 500;
      color: rgba(234, 241, 247, .7);
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin: 0;

      p {
        font-size: .8rem;
        margin: 0 4px;
      }
    }
  }
`

const SearchType = Styled.p`
  cursor: pointer;
  /* color: #eaf1f7;  */
`

const ResultsContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
  padding: .5rem 0;
  min-height: 3rem;
`