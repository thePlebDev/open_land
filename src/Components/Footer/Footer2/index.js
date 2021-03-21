import React from 'react';
import styled from 'styled-components';

import RedditIcon from '@material-ui/icons/Reddit';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import FiberNewIcon from '@material-ui/icons/FiberNew';

const Container = styled.div`
  border-bottom:1px solid rgba(46, 54, 59, 0.2);
  border-top:1px solid rgba(46, 54, 59, 0.2);
  font-size:14px;
  font-weight:400;
  padding:30px 0;
  width:82%;
  margin:40px auto;
  align-items: center;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`
const Title = styled.div`
  color:white;
  line-height:1.5;
  font-family:"Roboto";
`
const SubTitle = styled(Title)`
  margin-top:10px;
`
const IconContainer = styled.div`
  color:white;
  margin-top:20px;
`

const Icon = styled.span`
  opacity:0.6;
  margin:10px;
  cursor:pointer;
  transition:all .25s;
  &:hover{
    opacity:1;

  }
`


const iconData =[
        <RedditIcon style={{fontSize:'50px'}}/>,<InstagramIcon style={{fontSize:'50px'}}/>,
        <FacebookIcon style={{fontSize:'50px'}}/>,<MailIcon style={{fontSize:'50px'}}/>,
        <FiberNewIcon style={{fontSize:'50px'}}/>
      ]

const Footer2 =()=>{

  return(
    <Container>
      <div>
        <Title>Join the OpenLand Community</Title>
        <SubTitle>Stay up-to-date with our features, meet other OpenSea enthusiasts, and learn more!</SubTitle>
      </div>
      <IconContainer>
        {
          iconData.map((item,index)=>{
            return <Icon key={index}>{item}</Icon>
          })
        }
      </IconContainer>
    </Container>
  )
}

export default Footer2;
