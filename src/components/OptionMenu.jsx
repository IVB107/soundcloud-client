import React, { useContext } from 'react'
import Styled from 'styled-components'
// import { Slider } from '@material-ui/core'

import OptionType from './OptionType'
import { SearchContext } from '../contexts/SearchContext'

const OptionMenu = () => {
  const { search, dispatch } = useContext(SearchContext)

  // const handleChange = (event, newValue) => {
  //   console.log('Testing the slider...')
  //   dispatch({
  //     type: 'UPDATE_OPTIONS',
  //     ...search,
  //     options: {
  //       ...search.options,
  //       [test]: newValue
  //     }
  //   })
  // }
  
  return (
    <>
      {search.selected.length > 0 &&
        <OptionsContainer>
          {Object.keys(search.options).map(option => (
            <OptionType option={option} />
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
  /* border: 2px solid yellow; */
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