import React,{useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  transition:${({transition})=>transition ? 'all 0.35s' : 'none'};
  top:${({state})=>`${state}px`}
`
const Image = styled.img`
  height:200px;
  width:287px;
`


const Slide =({images,state,transition})=>{
  if(state === 3){
    //console.log('send the action creators')
  }
  return(

    <Container state={state * -200} transition={transition}>
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
