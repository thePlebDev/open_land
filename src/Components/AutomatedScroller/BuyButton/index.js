import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Container = styled.div`
  background-color:white;
  color:${({theme})=>theme.colors.main};
  height:40px;
  text-align:center;
  width:auto;
  position:absolute;
  bottom:0;
  left:10%;
  border-radius:4px;
  text-transform:uppercase;
  font-family:"Roboto";
  font-weight:600;
  letter-spacing:1px;
  padding:2px 20px;
  padding-right:25px;
  font-size:12px;
  display:none;
  @media only screen and (min-width: 1200px) {
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:9999;

  }
  &:hover{
    cursor:pointer;
  }
`

const IconContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  right:5px;
`


const BuyButton =()=>{

  return(
    <Container>
      <div>Buy now</div>
      <IconContainer>
        <ArrowForwardIosIcon style={{fontSize:'16px'}}/>
      </IconContainer>

    </Container>
  )
}

export default BuyButton;
