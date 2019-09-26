import React, { useContext } from 'react'
import Styled from 'styled-components'

import { SearchContext } from '../contexts/SearchContext'

// This component to render info for each artist the user selects from the search bar
const SelectedItem = ({ item }) => {
  const { search, dispatch } = useContext(SearchContext)

  const handleRemoveItem = () => {
    console.log('Removing selected item...')
    dispatch({
      type: 'REMOVE_SELECTION',
      ...search,
      selected: search.selected.filter(selection => selection.name !== item.name)
    })
  }

  return (
    <Container>
      <ImageContainer>
        {/* Check if API provides an image URL */}
        {search.searchType[0] === 'artist'
          ? <img src={item.images.length > 0 ? item.images[0].url : 'https://image.flaticon.com/icons/png/128/122/122320.png'} alt={item.name} />
          : <img src={item.album.images.length > 0 ? item.album.images[0].url : 'https://image.flaticon.com/icons/png/128/122/122320.png'} alt={item.name} />
        }
      </ImageContainer>
      <p>{item.name}</p>
      <button onClick={handleRemoveItem}>X</button>
    </Container>
  )
}

export default SelectedItem

const Container = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 200px;
  margin-right: 10px;
  padding: 4px;
  border-radius: 30px;
  background-color: rgba(234, 241, 247, .3);
  box-shadow: 0 2px 4px rgb(40, 40, 40);

  p {
    color: #eaf1f7;
    font-weight: 700;
    text-align: center;
  }

  button {
    background: none;
    border: none;
    color: #eaf1f7;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`

const ImageContainer = Styled.div`
  max-height: 100%;

  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`