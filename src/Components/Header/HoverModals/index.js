import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import HoverModalData from '../HoverModalsData';

const Container = styled.div`
  box-shadow: rgb(47 63 78 / 25%) 0px 0px 8px 0px;
  border:1px solid rgb(229, 232, 235);
  background-color: rgb(255, 255, 255);
    width:216px;
    position:absolute;
    top:73px;
    right:${({right})=>right};
    transition: all 0.15s;
    opacity:${({state})=>state? 1: 0};
    visibility:${({state})=>state? 'visible': 'hidden'};
`

const HoverModals =({show,right})=>{

  return(
    <Container state={show} right={right}>
      <HoverModalData/>
    </Container>
  )
}

const mapStateToProps =(state)=>{
  return{
    show:state.hoverModalReducer.show,
    right:state.hoverModalReducer.right
  }

}


const ConnectedModals = connect(mapStateToProps)(HoverModals)

export default ConnectedModals
