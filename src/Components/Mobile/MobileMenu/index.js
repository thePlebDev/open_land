import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'

import MobileLinks from '../MobileLinks'
import SecondMenu from '../SecondMenu';

const Container = styled.div`
  position:fixed;
  width:100vw;
  opacity:${({state})=>state ? 1 : 0};
  height:${({state})=>state ? '100%' : '1%'};
  transition:height 0.5s,opacity 0.20s;
  background-color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow-x:hidden;
  z-index:10;
  @media only screen and (min-width: 920px) {
    display:none;
}

`


const MobileMenu =({show})=>{

  return(
    <>
    <Container state={show}>
      <MobileLinks/>
    </Container>
    <SecondMenu/>
    </>
  )
}

const mapStateToProps =(state)=>{
  return{
    show:state.modalReducer.show
  }
}

const ConnectedMobileMenu = connect(mapStateToProps)(MobileMenu)

export default ConnectedMobileMenu
