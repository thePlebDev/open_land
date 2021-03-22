import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import mobileMenuActionCreators from '../../../ActionCreators/MobileMenuActionCreators'



const Container = styled.div`
  position:fixed;
  width:100vw;
  right:${({state})=>state ?'-0vw':'-100vw'};
  height:${({show})=>show ? '100%' : '1%'};
  transition:height 0.5s, right 0.35s;

  background-color:white;
  opacity:${({show})=>show ? 1 : 0};
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow-x:hidden;
  z-index:11;
  @media only screen and (min-width: 920px) {
    display:none;
}

`

const TitleContainer = styled.div`
  color:rgb(53, 56, 64);
  display:flex;
  font-size: 18px;
  font-weight:400;
  font-family:"Roboto";
  border-bottom: 1px solid rgb(229, 232, 235);
  padding:10px 0;
  width:100%;
  align-items:center;
`
const LinksContainer = styled(TitleContainer)`
  border-bottom:none;
  display:flex;
  flex-direction:column;
  align-items:start;
  font-size:17px;
`
const Links = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`



const SecondMenu =({showMenu,data,hideSecond,title,show})=>{


  return(
    <Container state={showMenu} show={show}>
        <TitleContainer onClick={()=>hideSecond()}>
          <ArrowBackIosIcon style={{fontSize:"16px",marginLeft:'15px'}}/>
          <div>{title}</div>
        </TitleContainer>
        <LinksContainer>
            {
              data.map((item,index)=>{
                return <Links key={index}>{item.icon}{item.name} </Links>
              })
            }
        </LinksContainer>
    </Container>
  )
}


const mapStateToProps =(state)=>{
  return{
    showMenu:state.mobileMenuReducer.showSecond,
    data:state.mobileMenuReducer.data,
    title:state.mobileMenuReducer.title,
    show:state.modalReducer.show
  }
}

const mapDispatchToProps = {
  hideSecond:mobileMenuActionCreators.hideSecond
}

const ConnectedSecondMenu = connect(mapStateToProps,mapDispatchToProps)(SecondMenu)

export default ConnectedSecondMenu
