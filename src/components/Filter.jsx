import React from 'react'
import Styled from 'styled-components'

const Filter = () => {
  return (
    <FilterContainer>
      <Option>
        <p>Max number of tracks</p>
        {/* Some input slider goes here */}
        <div>
          <p>Low</p>
          <p>High</p>
        </div>
      </Option>
    </FilterContainer>
  )
}

export default Filter 

const FilterContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: white;
  width: 100%;
  max-width: 25vw;
  margin: 0 20px 0 10px;
  padding: 10px;
  border: 2px solid yellow;
`

const Option = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid black;

  p {
    margin: 0;
    padding: 0; 
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* flex-grow: 1; */
    margin: 0;
    padding: 0;
  }
`