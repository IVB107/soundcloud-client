import React, { useContext } from 'react'
import Styled from 'styled-components'
import uuid from 'uuid'

import { SearchContext } from '../contexts/SearchContext'
import SelectedItem from './SelectedItem'

const SelectionContainer = () => {
  const { search, dispatch } = useContext(SearchContext)

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
  margin: 0 20px;
  padding: .5rem 0;
  min-height: 3rem;
`