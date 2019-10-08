import React, { useContext } from 'react'
import Styled from 'styled-components'
import { Select, MenuItem, InputLabel } from '@material-ui/core'

import OptionType from './OptionType'
import { SearchContext } from '../contexts/SearchContext'

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
          <Select 
            onChange={handleChange} 
            value={search.limit}
            // color='secondary'
            style={{width: `100%`}} 
            inputProps={{
              id: 'playlist-length',
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
          {/* <h3>Filter Tracks By:</h3> */}
          {Object.keys(search.options).map(option => (
            <OptionType option={option} key={option}/>
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
  margin: 0 20px 0 10px;
  padding: 10px;
  border-radius: 5px;
  /* border: 2px solid yellow; */

  h3 {
    width: 100%;
    margin: 0 0 10px;
    padding: 2px 0;
    color: #eaf1f7; 
    /* border-bottom: 1px solid #eaf1f7; */
  }
`

// const Option = Styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   border-bottom: 1px solid black;

//   p {
//     margin: 0;
//     padding: 0; 
//   }

//   div {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
//     /* flex-grow: 1; */
//     margin: 0;
//     padding: 0;
//   }
// `