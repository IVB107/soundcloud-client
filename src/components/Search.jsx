import React from 'react'
import Styled from 'styled-components'
import SearchResult from './SearchResult'

const Search = () => {
  return (
    <SearchContainer>
      <form>
        <input type="text" placeholder="Search by artist"/>
        <div>
        <p>Artist</p>
        <p>|</p>
        <p>Track</p>
        </div>
      </form>
      <ResultsContainer >
        {/* Map over selected artists & render <SearchResult /> for each */}
        <SearchResult />
      </ResultsContainer>
    </SearchContainer>
  )
}

export default Search

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

const ResultsContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
  padding: .5rem 0;
  min-height: 3rem;
`