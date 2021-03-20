import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
  display:flex;
  overflow-x:scroll;
  margin-bottom:60px;
  width:100%;
`

const ItemContainer = styled.div`
flex-shrink:0;
  display:flex;
  font-size:20px;
  flex-direction:column;
  width:326px;
  border-radius:4px;
  border:1px solid rgb(229, 232, 235);
  padding:5px;
  margin:5px 22px 20px 1px;
  align-items:center;
  cursor:pointer;
  box-shadow:0 2px 2px 0 rgba(0,0,0,0.5);
  transition:all 0.35s;
  &:hover{
    box-shadow:0 5px 10px 0 rgba(0,0,0,0.25);
    transform:translateY(-3px);
  }

`

const ItemImage = styled.img`
width:100%;
height:230px;
border-radius:5px;
`
const Text = styled.div`
  font-size:20px;
  font-family:"Roboto";
  font-weight:400;
  color:rgb(14,14,14);
  margin:10px 0;
`

const MainTitle = styled.div`
  font-size:16px;
  font-weight:500;
  margin-left:10px;
  font-family:"Roboto";
`
const TitleContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-transform:uppercase;
`



const data =[1,2,3,4,5,6,3,3,3]


const ItemScroller = ({title,icon})=>{

  return(
    <>
    <TitleContainer>
      {icon}
      <MainTitle>{title}</MainTitle>
    </TitleContainer>
    <Container>
      {
        data.map((item,index)=>{
          return(
            <ItemContainer key={index}>
              <ItemImage alt="image" src='https://images.unsplash.com/photo-1452696193712-6cabf5103b63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80'/>
              <Text>Name</Text>
            </ItemContainer>
          )
        })
      }
    </Container>
    </>
  )
}

export default ItemScroller
