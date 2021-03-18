import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'


import Logo from './Logo'
import Form from './Form';


const Container = styled.div`
  border-bottom:1px solid rgb(229,232,235);
  height:72px;
  position:sticky;
  top:0px;
  box-shadow:rgb(47 63 78 / 25%) 0px 0px 8px 0px;
  display:flex;
`


const Header =({show})=>{

  return(
    <>
      <Container>
        <Logo/>
        <Form/>
      </Container>
      {
        show
          ?
        <h1>modal here need redux</h1>
          :
        <h1>NOT HERE</h1>
      }
    </>
  )
}

const mapStateToProps=(state)=>{
  return{
    show:state.modalReducer.show
  }
}

const ConnectedHeader = connect(mapStateToProps)(Header)


export default ConnectedHeader
