import React from 'react';
import styled from 'styled-components'
import BuyButton from '../BuyButton'

const Container = styled.div`
  position:relative;
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
  width:587px;
  height:286px;
}
@media only screen and (min-width: 1200px) {
  width:587px;
  height:286px;
  margin-left:50px;
  margin-right:50px;
}
`

const ImageContainer = ({image})=>{

  return(
    <Container>
      <Image src={image}/>
      <BuyButton/>
    </Container>
  )
}


export default ImageContainer
