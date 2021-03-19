import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  transition:all 0.35s;
  opacity:${({state})=>state ? 1:0};
  color:rgba(4, 17, 29, 0.75);
`

const ItemContainer = styled.div`
  font-size:16px;
  margin:15px auto;
  display:flex;

  width:100%;
`

const IconContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:10px;
  margin-right:10px;
`


const HoverModalData =({data,show})=>{
  let another =data[0].icon

  return(
    <Container state={show}>
      {
        data.map((item,index)=>{
          return<ItemContainer key={index}>
                  <IconContainer>{item.icon}</IconContainer>
                  <IconContainer>{item.name}</IconContainer>
                </ItemContainer>
        })
      }
    </Container>
  )
}

const mapStateToProps =(state)=>{
return{
  data:state.hoverModalReducer.data,
  show:state.hoverModalReducer.show
}
}

const ConnectedHoverModalData = connect(mapStateToProps)(HoverModalData)

export default ConnectedHoverModalData
