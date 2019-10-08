import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'

import { SearchContext } from '../contexts/SearchContext'
import SelectedItem from './SelectedItem'

const SelectionContainer = () => {
  const { search, dispatch } = useContext(SearchContext)
  const spotifyApi = new Spotify()
  let options = {
    min_popularity: search.options.popularity[0],
    max_popularity: search.options.popularity[1],
    min_energy: search.options.energy[0],
    max_energy: search.options.energy[1],
    min_speechiness: search.options.vocals[0],
    max_speechiness: search.options.vocals[1],
    min_tempo: search.options.tempo[0],
    max_tempo: search.options.tempo[1],
    min_danceability: search.options.danceability[0],
    max_danceability: search.options.danceability[1],
    min_valence: search.options.mood[0],
    max_valence: search.options.mood[1],
    min_acousticness: search.options.acoustics[0],
    max_acousticness: search.options.acoustics[1],
  }
  
  const getRecommendations = async () => {
    if (search.selected.length > 0){
      await spotifyApi.getRecommendations(
        search.searchType[0] === 'artist'
          ? {seed_artists: search.selected.map(selection => selection.id), ...options} // search by artist (default)
          : {seed_tracks: search.selected.map(selection => selection.id), ...options} // search by track
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
          ...search,
          // options: search.options,
          suggested_tracks: [],
          current_track: {}
        })
    }
  }

  useEffect(() => {
    getRecommendations()
  }, [search.selected])

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