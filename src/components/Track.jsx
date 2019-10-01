import React, { useContext } from 'react'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'

const Track = ({ track }) => {
  const { search, dispatch } = useContext(SearchContext)

  const getDuration = (length) => {
    let minutes = parseInt(Math.floor((length/1000)/60))
    let seconds = parseInt(Math.floor((length/1000)%60))
    if (seconds < 10) seconds = '0' + seconds
    return `${minutes}:${seconds}`
  }

  const chooseTrack = track => {
    console.log('Switching current track...')
    dispatch({
      type: 'UPDATE_CURRENT_TRACK',
      ...search,
      current_track: track
    })
  }

  return (
    <TrackContainer onClick={() => chooseTrack(track)}>
      <TrackDetails>
        <AlbumArt alt={track.name} id="artwork" style={{backgroundImage: `URL(${track.album.images[0].url})`}}>
          {/* Play button to appear on :hover over album artwork */}
          {/* <img src="" alt=""/> */}
        </AlbumArt>
        <Titles>
          <TrackName>
            <p id="track">{track.name}</p>
            {track.explicit === true 
              ? <Explicit>EXPLICIT</Explicit>
              : null
            }
          </TrackName>
          <ArtistName>
            <p id="artist">{track.artists.map(artist => artist.name).join(', ')}</p>
          </ArtistName>
        </Titles>
      </TrackDetails>
      <TrackLength>
        <p id="length">{getDuration(track.duration_ms)}</p>
      </TrackLength>
    </TrackContainer>
  )
}

export default Track

const TrackContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 0;
  transition: .2s ease;

  :hover {
    background-color: rgba(234, 241, 247, .3);
    transition: .2s ease;
    cursor: pointer;
  }
  :hover #artwork {
    transition: .2s ease;
    transform: scale(1.2, 1.2);
  }
  :hover #track, :hover #artist, :hover #length {
    /* color: #12262d; */
    /* transition: .2s ease; */
  }
`

const TrackDetails = Styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const AlbumArt = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-height: 60px;
  width: 60px;
  min-width: 60px;
  border-radius: 4px;
  transition: .2s ease;
  background-size: contain;
`

const Titles = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const TrackName = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  p {
    margin: 0 0 0 20px;
    font-weight: 600;
    color: #eaf1f7;
  }
`

const ArtistName = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    margin: 0 0 0 20px;
    font-size: .8rem;
    color: #eaf1f7;
  }
`

const TrackLength = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    font-size: .9rem;
    color: #eaf1f7;
    margin: 0 10px;
  }
`

const Explicit = Styled.div`
  font-size: .7rem;
  border: 1px solid #e4f489;
  color: #e4f489;
  padding: 1px 3px;
  margin: 0 6px;
`