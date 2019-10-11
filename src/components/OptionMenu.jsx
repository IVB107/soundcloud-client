import React, { useContext } from 'react'
import Styled from 'styled-components'
import { Select, MenuItem, InputLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import OptionType from './OptionType'
import { SearchContext } from '../contexts/SearchContext'

const StyledSelect = withStyles({
  root: {
    background: "0px solid rgba(0, 0, 0, 0)",
    width: `100%`, 
    color: `#e4f489`,
    padding: '6px 0',
  },
  icon: {
    fill: "#e4f489"
  }
})(Select)

const OptionMenu = () => {
  const { search, dispatch } = useContext(SearchContext)

  const handleChange = (event, newValue) => {
    // console.log('LIMIT: ', newValue.props.value)
    dispatch({
      type: 'UPDATE_SUGGESTED_TRACKS',
      ...search,
      limit: newValue.props.value
    })
  }
  
  return (
    <>
      {search.selected.length > 0 &&
        <OptionsContainer>
          <InputLabel 
            htmlFor='playlist-length' 
            style={{color: `#eaf1f7`, fontSize: `.8rem`, fontWeight: `600`}}
          >
            PLAYLIST LENGTH
          </InputLabel>
          <StyledSelect 
            disableUnderline={true}  
            onChange={handleChange} 
            value={search.limit}
            style={{width: `100%`, color: `#e4f489`}} 
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </StyledSelect>
          {Object.keys(search.options).map(option => (
            <OptionType 
              option={option} 
              key={option}
            />
          ))}
        </OptionsContainer>
      }
    </>
  )
}

export default OptionMenu

const OptionsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #12262d;
  width: 100%;
  max-width: 25vw;
  margin: 0 20px 90px 10px;
  padding: 10px;
  border-radius: 5px;

  h3 {
    width: 100%;
    margin: 0 0 10px;
    padding: 2px 0;
    color: #eaf1f7; 
  }
`