import React, { useContext } from 'react'
import Spotify from 'spotify-web-api-js'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'
import CustomSlider from './CustomSlider'

const OptionType = ({ option }) => {
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

  const handleChange = (event, newValue) => {
    dispatch({
      type: 'UPDATE_OPTIONS',
      ...search,
      options: {
        ...search.options,
        [option]: newValue
      }
    })
  }

  const updateRecommendations = async () => {
    console.log('FILTERS: ', apiOptions)
    await spotifyApi.getRecommendations(
      search.searchType[0] === 'artist'
        ? {seed_artists: search.selected.map(selection => selection.id), ...apiOptions} // search by artist (default)
        : {seed_tracks: search.selected.map(selection => selection.id), ...apiOptions} // search by track
      )
      .then(response => {
        console.log('Recommendations: ', response)
        dispatch({
          type: 'UPDATE_SUGGESTED_TRACKS',
          ...search,
          suggested_tracks: response.tracks,
          current_track: response.tracks[0]
        })
      })
      .catch(err => {
        console.log('ERROR: ', err)
      })
  }

  const sliderCommitted = () => {
    updateRecommendations()
  }

  return (
    <OptionContainer>
      <p>{option.toUpperCase()}</p>
      <CustomSlider 
        value={search.options[option]}
        onChangeCommitted={sliderCommitted}
        onChange={handleChange}
        color='secondary'
      />
    </OptionContainer>
  )
}

export default OptionType

const OptionContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 2px 0;
  padding: 10px 0 0;
  border-top: 1px solid #eaf1f7;

  p {
    margin: 0;
    font-size: .8rem;
    font-weight: 600;
    color: #eaf1f7;
  }
`