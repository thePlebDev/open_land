import React from 'react';
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const data = ["Browse","Activity","Rankings","Blog","Help","Create"]

const Container = styled.div`
  display:none;
  width:45%;
  @media only screen and (min-width: 920px) {
  display:flex;
  };
  align-items:center;
  justify-content:space-around;
  font-weight:500;
  font-family:"Roboto";
  letter-spacing:1px;
  font-size:16px;
`

const IconContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  color:rgba(4, 17, 29, 0.75);
`


const TextLinks =()=>{

  return(
    <>
    <Container>
      {
        data.map((item,index)=>{
          return <div key={index}>{item}</div>
        })
      }
      <IconContainer>
        <AccountCircleIcon style={{fontSize:'35px'}}/>
      </IconContainer>
    </Container>

    </>
  )
}

export default TextLinks
