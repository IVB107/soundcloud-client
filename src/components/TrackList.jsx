import React, { useContext } from 'react'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'
import Track from './Track'

const TrackList = () => {
  const { search, dispatch } = useContext(SearchContext)

  return (
    <TrackListContainer>
      {(search.selected.length > 0 && search.suggested_tracks.length > 0) &&
        <>
          <ListHeader>
            <h2>Tracklist</h2>
            <div>
              <p># of tracks</p>
              <p>45:17</p>
            </div>
          </ListHeader>
          <ListHeader>
            <p>Sort By:</p>
            <div>
              <button>DANCEABILITY</button>
              <button>ENERGY</button>
              <button>TEMPO</button>
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