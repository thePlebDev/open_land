import React from 'react';
import styled from 'styled-components';

import Links from '../Links'


const Container = styled.div`
    color:white;
    width:99%;
    overflow-wrap: break-word;
    margin:0 auto;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    @media only screen and (min-width: 424px) {
      width:82%;
}

`
const Title = styled.h1`
  font-size:2rem;
  padding-top:15px;
  font-family:"Roboto";
  letter-spacing:2px;
`

const Info = styled.div`
  font-weight:400;
  margin-top:25px;
  font-family:"Roboto";
  line-height:1.5;
  font-size:14px;
`

const LinksContainer = styled.div`
  display:flex;
  justify-content:space-around;
`


const TitleContainer = styled.div`

`
const data1 =["My Account","My Items","My Activity","My Offers","My Referrals","Gift items"]
const data2=["Marketplace","Browse and Discover","Rankings","Recently","Rankings", "Recently Sold"]
const data3=["Company","About","Suggestions","Join the Team", "For Developers","Advertise"]

const FooterOne =()=>{
  return(
    <Container>
      <TitleContainer>
        <Title>OpenLand</Title>
        <Info>
            The world’s largest nothing marketplace for crypto collectibles and non-fungible tokens (NFTs),
            including ERC721 and ERC1155 assets. Buy, sell, and discover exclusive digital nothing.
        </Info>
      </TitleContainer>

      <LinksContainer>
        <Links data={data1}/>
        <Links data={data2}/>
        <Links data={data3}/>
      </LinksContainer>
    </Container>
  )
}


export default FooterOne
