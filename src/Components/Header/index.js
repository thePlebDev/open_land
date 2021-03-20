import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'


import Logo from './Logo'
import Form from './Form';
import MobileMenu from '../Mobile/MobileMenu';
import ScrollContainer from './ScrollContainer'
import TextLinks from './TextLinks'


const Container = styled.div`
  border-bottom:1px solid rgb(229,232,235);
  height:72px;
  top:0px;
  box-shadow:rgb(47 63 78 / 25%) 0px 0px 8px 0px;
  display:flex;
  z-index:9;

`

const HeaderContainer = styled.div`

`


const Header =({show})=>{
  return(
    <HeaderContainer>
      <Container>
        <Logo/>
        <Form/>
        <TextLinks/>
      </Container>
      <ScrollContainer/>
      <MobileMenu/>

    </HeaderContainer>
  )
}

const mapStateToProps=(state)=>{
  return{
    show:state.modalReducer.show
  }
}

const ConnectedHeader = connect(mapStateToProps)(Header)


export default ConnectedHeader
