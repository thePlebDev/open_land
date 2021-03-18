import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'

import MobileLinks from '../MobileLinks'

const Container = styled.div`
  position:fixed;
  width:100vw;
  opacity:${({state})=>state ? 1 : 0};
  height:${({state})=>state ? '100%' : '1%'};
  transition:height 0.5s,opacity 0.20s;
  background-color:${({theme})=>theme.colors.main};
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow:hidden;

`


const MobileMenu =({show})=>{

  return(
    <Container state={show}>
      <MobileLinks/>
    </Container>
  )
}

const mapStateToProps =(state)=>{
  return{
    show:state.modalReducer.show
  }
}

const ConnectedMobileMenu = connect(mapStateToProps)(MobileMenu)

export default ConnectedMobileMenu
