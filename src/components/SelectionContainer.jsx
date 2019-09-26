import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'
import uuid from 'uuid'

import { SearchContext } from '../contexts/SearchContext'
import SelectedItem from './SelectedItem'

const SelectionContainer = () => {
  const { search, dispatch } = useContext(SearchContext)
  const spotifyApi = new Spotify()

  const getRecommendations = async () => {
    if (search.selected.length > 0){
      // Get recommended tracks
      await spotifyApi.getRecommendations({
        seed_artists: search.selected.map(selection => selection.id)
      })
      .then(response => {
        console.log('Recommendations: ', response)
        dispatch({
          type: 'UPDATE_SUGGESTED_TRACKS',
          ...search,
          options: search.options,
          suggested_tracks: response.tracks
        })
      })
      .catch(err => {
        console.log('ERROR: ', err)
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
          key={uuid()}
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