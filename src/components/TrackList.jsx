import React from 'react'
import Styled from 'styled-components'

const TrackList = () => {
  return (
    <TrackContainer>
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
    </TrackContainer>
  )
}

export default TrackList

const TrackContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 70vw;
  margin: 0 20px;
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
    }
  }
`