import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'

import { SearchContext, initialState } from '../contexts/SearchContext'
import SelectedItem from './SelectedItem'

const SelectionContainer = () => {
  const { search, dispatch } = useContext(SearchContext)
  const spotifyApi = new Spotify()
  let apiOptions = {
    min_popularity: search.options.popularity[0],
    max_popularity: search.options.popularity[1],
    min_energy: parseFloat(search.options.energy[0])/100,
    max_energy: parseFloat(search.options.energy[1])/100,
    min_instrumentalness: (1 - parseFloat(search.options.vocals[1])/100),
    max_instrumentalness: (1 - parseFloat(search.options.vocals[0])/100),
    min_tempo: parseInt(search.options.tempo[0]*1.84) + 24,
    max_tempo: parseInt(search.options.tempo[1]*1.84) + 24,
    min_danceability: parseFloat(search.options.danceability[0])/100,
    max_danceability: parseFloat(search.options.danceability[1])/100,
    min_valence: parseFloat(search.options.mood[0])/100,
    max_valence: parseFloat(search.options.mood[1])/100,
    min_acousticness: parseFloat(search.options.acoustics[0])/100,
    max_acousticness: parseFloat(search.options.acoustics[1])/100,
  }
  
  const getRecommendations = async () => {
    if (search.selected.length > 0){
      console.log('FILTERS: ', apiOptions)
      await spotifyApi.getRecommendations(
        search.searchType[0] === 'artist'
          ? {seed_artists: search.selected.map(selection => selection.id), limit: search.limit, ...apiOptions} // search by artist (default)
          : {seed_tracks: search.selected.map(selection => selection.id), limit: search.limit, ...apiOptions} // search by track
        )
        .then(response => {
          console.log('Recommendations: ', response)
          dispatch({
            type: 'UPDATE_SUGGESTED_TRACKS',
            ...search,
            // options: search.options,
            suggested_tracks: response.tracks,
            current_track: response.tracks[0]
          })
        })
        .catch(err => {
          console.log('ERROR: ', err)
        })
      } else {
        dispatch({
          type: 'UPDATE_SUGGESTED_TRACKS',
          ...initialState
        })
    }
  }

  useEffect(() => {
    getRecommendations()
  }, [search.selected, search.limit])

  return (
    <Container>
      {search.selected.map(item => (
        <SelectedItem 
          key={item.id}
          item={item}
        />
      ))}
    </Container>
  )
}

export default SelectionContainer 

const Container = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: .5rem 0;
  min-height: 3rem;
`