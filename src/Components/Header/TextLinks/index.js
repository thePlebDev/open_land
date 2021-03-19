import React from 'react';
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {connect} from 'react-redux';

import HoverModals from '../HoverModals';
import hoverModalActionCreators from '../../../ActionCreators/HoverModalActionCreators'


const data = ["Browse","Activity","Rankings","Blog"]

const Container = styled.div`
  display:none;
  position:relative;
  width:50%;
  @media only screen and (min-width: 920px) {
  display:flex;
  };
  align-items:center;
  justify-content:space-around;
  font-weight:500;
  font-family:"Roboto";
  letter-spacing:1px;
  font-size:16px;
  margin-left: auto;
`

const IconContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom: 2px solid white;
  height:100%;
  color:rgba(4, 17, 29, 0.75);
  &:hover{
    cursor:pointer;
    border-bottom:${({theme}) => `2px solid ${theme.colors.main}` };
  }
`

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom:2px solid white;
  height:100%;
  &:hover{
    cursor:pointer;
    border-bottom:${({theme}) => `2px solid ${theme.colors.main}` };
  }
`

const TextLinks =({help,create,profile,hide})=>{

  return(
    <>
    <Container>
      {
        data.map((item,index)=>{
          return <TextContainer key={index}>{item}</TextContainer>
        })
      }
      <TextContainer onMouseEnter={()=>{help()}} onMouseLeave={()=>{hide()}}>Help</TextContainer>
      <TextContainer onMouseEnter={()=>{create()}} onMouseLeave={()=>{hide()}}>Create</TextContainer>

      <IconContainer onMouseEnter={()=>{profile()}} onMouseLeave={()=>{hide()}}>
        <AccountCircleIcon style={{fontSize:'35px'}}/>
      </IconContainer>

      <HoverModals/>
    </Container>

    </>
  )
}

const mapDispatchToProps ={
  help:hoverModalActionCreators.help,
  create:hoverModalActionCreators.create,
  profile:hoverModalActionCreators.profile,
  hide:hoverModalActionCreators.hide
}

const ConnectedTextLinks=connect(null,mapDispatchToProps)(TextLinks)

export default ConnectedTextLinks
