import React from 'react';
import styled from 'styled-components';


const LinksContainer = styled.div`
  display:flex;
  margin-top:20px;
  flex-direction:column;
  text-align:center;
`

const Links = styled.div`
font-weight:400;
font-family:"Roboto";
margin-top:10px;
font-size:14px;
color:white;
opacity:0.7;
cursor:pointer;

&:hover{
  opacity:1;
}

`


const LinksBox =({data})=>{

  return(
    <LinksContainer>
      {
        data.map((item,index)=>{
          return<Links key={index}>{item}</Links>
        })
      }

    </LinksContainer>
  )
}


export default LinksBox
