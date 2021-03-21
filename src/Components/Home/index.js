import React from 'react';
import styled from 'styled-components'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BrushIcon from '@material-ui/icons/Brush';
import PublicIcon from '@material-ui/icons/Public';
import BathtubIcon from '@material-ui/icons/Bathtub';

import AutomatedScroller from '../AutomatedScroller'
import HomeImage from '../HomeImage';
import ItemScroller from '../ItemScrollers';
import Footer from '../Footer'


const Container = styled.div`
  max-width:1500px;
  margin:0 auto;

`
const BodyContainer = styled.div`
  max-width:80%;
  margin:0 auto;
`


const Home =()=>{

  return(
    <Container>
      <HomeImage/>
      <BodyContainer>
        <AutomatedScroller/>
        <ItemScroller title="Trending collections" icon={<TrendingUpIcon/>}/>
        <ItemScroller title="Digital art" icon={<BrushIcon/>}/>
        <ItemScroller title="Virtual worlds" icon={<PublicIcon/>}/>
        <ItemScroller title="collectibles" icon={<BathtubIcon/>}/>
      </BodyContainer>
      <Footer/>
    </Container>
  )
}


export default Home
