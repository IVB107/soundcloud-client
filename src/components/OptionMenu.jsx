import React, { useContext } from 'react'
import Styled from 'styled-components'
import clsx from 'clsx'
import { Select, MenuItem, InputLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import OptionType from './OptionType'
import { SearchContext } from '../contexts/SearchContext'

const styles = {
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: "0px solid rgba(0, 0, 0, 0)",
    // borderRadius: 3,
    color: 'white',
    // height: 48,
    padding: '0',
    animationPlayState: "paused",

    "&:before": {
      borderBottom: "0px solid rgba(0, 0, 0, 0)"
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: "2px solid #e4f489",
      animationPlayState: "paused"
    },
    "&:after": {
      borderBottom: "2px solid #e4f489",
      animationPlayState: "paused"
    }
  },
  icon: {
    fill: "#e4f489"
  }
}

const OptionMenu = props => {
  const { search, dispatch } = useContext(SearchContext)
  const { classes, className } = props

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
            disableUnderline={true}  
            className={clsx(classes.root)}
            onChange={handleChange} 
            value={search.limit}
            // color='secondary'
            style={{width: `100%`, color: `#eaf1f7`}} 
            inputProps={{
              classes: {
                icon: classes.icon
              }
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

// export default OptionMenu
export default withStyles(styles)(OptionMenu)

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