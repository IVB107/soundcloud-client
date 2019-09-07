import React from 'react'
import Styled from 'styled-components'

const Nav = () => {
  return (
    <NavContainer>
      <NavLeft><p>FoundCloud</p></NavLeft>
      <NavRight><p>Connect with SoundCloud</p></NavRight>
    </NavContainer>
  )
}

export default Nav

const NavContainer = Styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  border-bottom: 2px solid black;

  div {
    width: 50%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
`
const NavLeft = Styled.div`
  justify-content: flex-start;

  p {
    padding: 0 20px;
    font-weight: 900;
    font-size: 2rem;
    color: #ead441;
  }
`
const NavRight = Styled.div`
  justify-content: flex-end;

  p {
    padding: 10px;
    background-color: #eaf1f7;
    font-size: .8rem;
    margin: 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 6px rgb(60, 60, 60);
  }
`