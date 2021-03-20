import React,{useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

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
`
const Image = styled.img`
  height:135px;
  width:276px;
  box-shadow:rgb(0 0 0 / 30%) 1px 2px 4px;
  margin:30px 0;
  border-radius:4px;

  @media only screen and (min-width: 720px) {
  margin-left:20px;
  margin-right:20px;
  width:320px;
  height:239;
}
`


const Slide =({images,state,transition})=>{


  return(

    <Container state={state * -195} transition={transition} left={state * -360}>
      {
        images.map((item,index,)=>{
          return<Image src={item} key={index} alt="future robot" />
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
