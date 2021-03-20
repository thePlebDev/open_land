import React,{useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Image from '../ImageContainer';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  transition:${({transition})=>transition ? 'all 0.35s' : 'none'};
  top:${({state})=>`${state}px`};
  @media only screen and (min-width: 720px) {
  top:0;
  flex-direction:row;
  left:${({left})=>`${left}px`};
}

@media only screen and (min-width: 1200px) {
  width:587px;
  height:286px;
  left:${({leftLarge})=>`${leftLarge}px`};
}
`



const Slide =({images,state,transition})=>{


  return(

    <Container state={state * -195} transition={transition} left={state * -360} leftLarge={state * -687}>
      {
        images.map((item,index,)=>{
          return<Image image={item} key={index} alt="future robot" />
        })
      }
    </Container>

  )
}
const mapStateToProps =(state)=>{

  return{
    state:state.testIncrementReducers.index,
    transition:state.testIncrementReducers.transition
  }
}
const ConnectedSlide = connect(mapStateToProps)(Slide)

export default ConnectedSlide
