import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Slider } from '@material-ui/core'

const StyledSlider = withStyles({
  root: {
    color: "#e4f489",
    // height: 8
  },

  // Additional styles to maybe play around with...

  // thumb: {
  //   height: 24,
  //   width: 24,
  //   backgroundColor: "#fff",
  //   border: "2px solid currentColor",
  //   marginTop: -8,
  //   marginLeft: -12,
  //   "&:focus,&:hover,&$active": {
  //     boxShadow: "inherit"
  //   }
  // },
  // active: {},
  // valueLabel: {
  //   left: "calc(-50% + 4px)"
  // },
  // track: {
  //   height: 8,
  //   borderRadius: 4
  // },
  // rail: {
  //   height: 8,
  //   borderRadius: 4
  // }
})(Slider)

const CustomSlider = ({ value, onChangeCommitted, onChange }) => {
  return (
    <StyledSlider 
      value={value}
      onChangeCommitted={onChangeCommitted}
      onChange={onChange}
      // color='secondary'
      // valueLabelDisplay="auto"
      // aria-labelledby="range-slider"
      // getAriaValueText={valuetext}
    />
  )
}

export default CustomSlider 