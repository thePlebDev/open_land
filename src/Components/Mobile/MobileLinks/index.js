import React from 'react';
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {connect} from 'react-redux'
import mobileMenuActionCreators from '../../../ActionCreators/MobileMenuActionCreators'

import MobileLinksLogic from '../MoblieLinksLogic'


const linksData = [{name:"Browser"},{name:"Activity"},{name:"Rankings"},{name:"Blog"}]

const Links = styled.div`
    margin:0 auto;
    height:56px;
    font-weight:500;
    width:90%;
    display:flex;
    align-items:center;
    justify-content:space-between;
  `

const Container = styled.div`
  font-size:18px;
  color:rgb(53, 56, 64);
  width:100%;
`

const MobileLinks =({showHelp,showAccount,showCreate})=>{

  return(
    <Container>
    {

      linksData.map((item,index)=>{
      return <MobileLinksLogic item={item} key={index}/>

      })
    }
    <Links onClick={()=>{showHelp()}}>Help<ArrowForwardIosIcon style={{fontSize:'15px'}}/></Links>
    <Links onClick={()=>{showCreate()}}>Create<ArrowForwardIosIcon style={{fontSize:'15px'}}/></Links>
    <Links onClick={()=>{showAccount()}}>Account<ArrowForwardIosIcon style={{fontSize:'15px'}}/></Links>
    </Container>
  )
}
const mapDispatchToProps ={
  showHelp:mobileMenuActionCreators.help,
  showAccount:mobileMenuActionCreators.account,
  showCreate:mobileMenuActionCreators.create,
}

const ConnectedMoblieMenuActionCreators=connect(null,mapDispatchToProps)(MobileLinks)

export default ConnectedMoblieMenuActionCreators
