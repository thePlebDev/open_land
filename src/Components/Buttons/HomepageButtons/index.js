import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    text-align:center;
    font-size:18px;
    font-family:"Roboto";
    font-weight:600;
    background-color:${({theme})=>theme.colors.main};
    background-color:${({main,theme})=>main ? `${theme.colors.main}`: 'white'};
    color:${({main,theme})=>main?'white':`${theme.colors.main}`};
    padding:10px 40px;
    border-radius:4px;
    letter-spacing:1px;
    box-shadow:rgb(47 63 78 / 25%) 0px 0px 8px 0px;
    transition:all 0.35s;
    &:hover{
      transform:scale(1.1);
      cursor:pointer;
    }
`





const HomePageButton =({title,main})=>{

  return(
    <Container main={main}>
      {title}
    </Container>
  )
}


export default HomePageButton
