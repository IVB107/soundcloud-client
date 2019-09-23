import React, { useContext } from 'react'
import uuid from 'uuid'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'

const ResultDropdown = () => {
  const { search, dispatch } = useContext(SearchContext)

  const handleSelectItem = (item) => {
    // Do some stuff
    console.log('Selected: ', item)
    dispatch({
      type: 'MAKE_SELECTION',
      searchType: search.searchType,
      input: '',
      results: [],
      selected: [...search.selected, item]
    })
  }

  return (
    <ResultOptions>
      {search.results.length > 0 && (
        search.results.map(item => (
          <li key={uuid()} onClick={() => handleSelectItem(item)}>
            {search.searchType[0] === 'artist'
              ? <img src={item.images.length > 0 ? item.images[0].url : 'https://image.flaticon.com/icons/png/128/122/122320.png'} alt={item.name} />
              : <img src={item.album.images.length > 0 ? item.album.images[0].url : 'https://image.flaticon.com/icons/png/128/122/122320.png'} alt={item.name} />
            }
            <p>{item.name}</p>
          </li>
        ))
      )}
    </ResultOptions>
  )
}

export default ResultDropdown

const ResultOptions = Styled.ul`
  /* width: 100%; */
  padding: 0;
  margin: 0 20px;
  z-index: 10;
  list-style-type: none;

  li {
    height: 36px;
    background-color: #12262d;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: none;
    padding: 0 10px;
    list-style-type: none;
    cursor: pointer;

    :hover {
      background-color: #e4f489;

      p {
        color: #12262d;
      }
    }

    img, p {
      padding: 0 10px;
    }

    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }

    p {
      color: #eaf1f7;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`