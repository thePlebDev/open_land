import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color:rgba(0,0,0,.87);
  font-size:14px;
  font-weight:500;
  font-family: 'Roboto';
  width:100%;
  padding:10px 0;

  display:flex;
  align-items:center;
  overflow-x:auto;

  white-space:nowrap;
  border:1px solid rgb(229, 232, 235);

`

const data = ["New","Art","Domain Names","Virtual Worlds","Trading Cards","Collectibles","Sports","Utility"]

const ListItems = styled.div`
  white-space:nowrap;
  height:100%;
  padding:2px 20px;
  margin:auto;
  border-bottom:1px solid white;

  &:hover{
    border-bottom:1px solid red;
  }
`


const ScrollContainer =()=>{

  return(
    <Container>
        {
          data.map((item,index)=>{
            return<ListItems key={index}>{item}</ListItems>
          })
        }
    </Container>
  )
}

export default ScrollContainer
