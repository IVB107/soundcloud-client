import React, { useContext } from 'react'
import Styled from 'styled-components'
import { Slider } from '@material-ui/core'

import { SearchContext } from '../contexts/SearchContext'

const OptionType = ({ option }) => {
  const { search, dispatch } = useContext(SearchContext)

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

  return (
    <OptionContainer>
      <p>{option.toUpperCase()}</p>
      <Slider
        value={search.options[option]}
        onChange={handleChange}
        color='secondary'
        // valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
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