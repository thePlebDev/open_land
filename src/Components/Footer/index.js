import React from 'react';
import styled from 'styled-components'

import FooterOne from './Footer1';
import FooterTwo from './Footer2';

const Container = styled.div`
  overflow-x:hidden;
  height:750px;
  background-color:rgb(21, 178, 229);
  width:100%;
  @media only screen and (min-width: 700px) {
    height:500px;
}
`


const Footer =()=>{
  return(
    <Container>
      <FooterOne/>
      <FooterTwo/>
    </Container>
  )
}

export default Footer
