import React from 'react';
import styled from 'styled-components'

import Logo from './Logo'
import Form from './Form';


const Container = styled.div`
  border-bottom:1px solid rgb(229,232,235);
  height:72px;
  position:sticky;
  top:0px;
  box-shadow:rgb(47 63 78 / 25%) 0px 0px 8px 0px;
  display:flex;
`


const Header =()=>{

  return(
    <>
      <Container>
        <Logo/>
        <Form/>
      </Container>
      <h1>modal here need redux</h1>
    </>
  )
}


export default Header
