import React from 'react';
import styled from 'styled-components'

import AutomatedScroller from '../AutomatedScroller'
import HomeImage from '../HomeImage';

const Container = styled.div`
  max-width:1470px;
  margin:0 auto;

`

const Home =()=>{

  return(
    <Container>
      <HomeImage/>
      <AutomatedScroller/>
    </Container>
  )
}


export default Home
