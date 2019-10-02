import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'
import Spotify from 'spotify-web-api-js'

import { SearchContext } from '../contexts/SearchContext'
import Track from './Track'

const TrackList = () => {
  const { search, dispatch } = useContext(SearchContext)
  const spotifyApi = new Spotify()

  const getAudioFeatures = async () => {
    console.log('Fetching playlist track features...')
    let ids = search.suggested_tracks.map(track => track.id).join(',')
    await spotifyApi.getAudioFeaturesForTracks(ids)
      .then(response => {
        console.log('Playlist track features: ', response)
        let suggested = [...search.suggested_tracks]
        response.audio_features.forEach(track => {
          suggested[response.audio_features.indexOf(track)].danceability = track.danceability
          suggested[response.audio_features.indexOf(track)].energy = track.energy
          suggested[response.audio_features.indexOf(track)].tempo = track.tempo
        })
        console.log('SUGGESTED + FEATURES: ', suggested)
        dispatch({
          type: 'UPDATE_SUGGESTED_TRACKS',
          ...search,
          options: search.options,
          suggested_tracks: suggested,
          current_track: suggested[0]
        })
      })
      .catch(err => {
        console.log('ERROR: ', err)
      })
  }

  const getPlaylistDuration = () => {
    let duration = search.suggested_tracks.map(track => track.duration_ms).reduce((acc, cur) => acc += cur)
    let hours = parseInt(Math.floor((duration/1000)/3600)),
        minutes = parseInt(Math.floor((duration/1000)/60)%60),
        seconds = parseInt(Math.floor((duration/1000)%60))

    if (hours > 0 && minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds
    return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
  }

  const sortBy = type => {
    let sorted = [...search.suggested_tracks.sort((a, b) => a[type] > b[type])]
    dispatch({
      type: 'UPDATE_SUGGESTED_TRACKS',
      ...search,
      options: search.options,
      suggested_tracks: sorted,
      current_track: sorted[0]
    })
  }

  useEffect(() => {
    if (search.suggested_tracks.length > 0) {
      if (!search.suggested_tracks[0].hasOwnProperty('energy')) getAudioFeatures()
    }
  }, [search.current_track])

  return (
    <TrackListContainer>
      {(search.selected.length > 0 && search.suggested_tracks.length > 0) &&
        <>
          <ListHeader>
            <h2>Tracklist</h2>
            <div>
              <p>{`${search.suggested_tracks.length} Tracks`}</p>
              <p>{`${getPlaylistDuration()}`}</p>
            </div>
          </ListHeader>
          <ListHeader>
            <p>Sort By:</p>
            <div>
              <button onClick={() => sortBy('danceability')}>DANCEABILITY</button>
              <button onClick={() => sortBy('energy')}>ENERGY</button>
              <button onClick={() => sortBy('tempo')}>TEMPO</button>
            </div>
          </ListHeader>
          <Tracks>
            {/* Map over returned tracks array and render <Track /> component for each */}
            {search.suggested_tracks.map(track => (
              <Track 
              key={track.id}
              track={track} 
              />
              ))}
          </Tracks>
        </>
      }
      {(search.selected.length > 0 && search.suggested_tracks.length < 1) &&
        <EmptyList>
          <p>{`No suggested tracks for this ${search.searchType[0]}`}</p>
        </EmptyList>
      }
    </TrackListContainer>
  )
}

export default TrackList

const TrackListContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 70vw;
  margin: 0 20px 90px;
  align-self: flex-start;
`

const ListHeader = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 0;

  h2 {
    margin: 0;
    color: #eaf1f7;
  }

  p {
    margin: 0;
    color: #eaf1f7;
    opacity: .7;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      margin: 0 0 0 10px;
      font-size: .8rem;
      color: #eaf1f7;
      opacity: .7;
    }

    button {
      border: 1px solid white;
      background: none;
      color: white;
      margin: 0 0 0 10px;
      padding: 4px 6px;
      cursor: pointer;
    }
  }
`

const Tracks = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  /* max-height: 360px; */
  /* overflow: scroll; */
`

const EmptyList = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    color: #eaf1f7;
    font-weight: 500;
  }
`