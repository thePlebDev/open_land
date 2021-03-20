import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import incrementialActionCreators from '../../ActionCreators/TestIncrementActionCreator'
import Slide from './Slide'

const Container = styled.div`
  position:relative;
  width:276px;
  height:195px;
  margin:0 auto;
  display:flex;
  overflow:hidden;

  @media only screen and (min-width: 720px) {
  width:340px;
  height:239;

}
@media only screen and (min-width: 1200px) {
width:640px;
height:350px;

}
`
const images =[
  'https://images.unsplash.com/photo-1513049560516-4924f003b501?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
  'https://images.unsplash.com/photo-1598348341635-33a3f4205d32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
  'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2380&q=80',
  'https://images.unsplash.com/photo-1513049560516-4924f003b501?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
]

const AutomatedScroller = ({increment,decrement,infiniteFalse,state})=>{


  useEffect(()=>{
    const interval = setInterval(()=>{
      increment()
    },4000)
    return()=> clearInterval(interval);
  },[increment])

  useEffect(()=>{
    if(state===3){

    }
  },[state,infiniteFalse])



  return(
    <>
      <Container>
        <Slide images={images} />
      </Container>
      <button onClick={()=>{increment()}}>NEXT</button>
      <button onClick={()=>{decrement()}}>previous</button>
    </>
  )
}


const mapDispatchToProps ={
  increment:incrementialActionCreators.testIncrement,
  decrement:incrementialActionCreators.testDecrement,
  infiniteFalse:incrementialActionCreators.testInfiniteFalse
}

const mapStateToProps=(state)=>{
  return{
    state:state.testIncrementReducers.index,
  }
}


const ConnectedAutomatedScroller = connect(mapStateToProps,mapDispatchToProps)(AutomatedScroller)

export default ConnectedAutomatedScroller
