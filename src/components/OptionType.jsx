import React, { useContext, useEffect } from 'react'
import Styled from 'styled-components'
import { Slider } from '@material-ui/core'

import { SearchContext } from '../contexts/SearchContext'

const OptionType = ({ option }) => {
  const { search, dispatch } = useContext(SearchContext)

  const handleChange = (event, newValue) => {
    console.log('Option Change EVENT: ', event)
    console.log('Option Change NEW VALUE: ', newValue)
    dispatch({
      type: 'UPDATE_OPTIONS',
      ...search,
      options: {
        ...search.options,
        [option]: newValue
      }
    })
  }

  useEffect(() => {
    // Find a way to call getRecommendations() from SelectionContainer.jsx
    // Use setTimeout to wait until slider action is complete before making API call
  }, [search.options])

  return (
    <OptionContainer>
      <p>{option.toUpperCase()}</p>
      <Slider
        value={search.options[option]}
        // onMouseDownCapture={handleChange}
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