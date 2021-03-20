import React from 'react';
import styled from 'styled-components';

import HomePageButton from '../Buttons/HomepageButtons'

const Container = styled.div`
  width:100%;
  height:400px;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:325px;
  width:100%;
  background-image: url("https://images.unsplash.com/photo-1495592528496-a143a67931d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
  background-position: 50% 1%;
`
const SubContainer = styled.div`

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
const MainText =styled.h1`
  font-size:29px;
  font-weight:300;
  color:rgb(14,14,14);
  font-family:"Roboto";
  color:white;
  text-align:center;
  @media only screen and (min-width: 600px) {
  font-size:50px;
}
`
const SecondText = styled.h2`
  margin: 20px auto 25px;
  font-size:18px;
  font-family:"Roboto";
  color:rgb(14,14,14);
  opacity:0.7;
  text-align:center;
`
const ButtonContainer = styled.div`
  display:flex;

  width:80%;
  justify-content:space-around;

`


const HomeImage =()=>{

  return(
    <Container>
      <SubContainer>
        <MainText>The worlds largest nothing market</MainText>
        <SecondText>Buy nothing, sell nothing, but with crypto</SecondText>
        <ButtonContainer>
          <HomePageButton title={'Explore'} main={true}/>
          <HomePageButton title={'Create'} main={false}/>

        </ButtonContainer>
      </SubContainer>
    </Container>
  )
}

export default HomeImage
