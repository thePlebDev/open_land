import React,{useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import modalActionCreator from '../../../ActionCreators'

const Container = styled.div`
  display:flex;

`

const LogoContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:5px;
  margin:15px 5px;
`
const ArrowLogo = styled(LogoContainer)`
  transition:all 0.3s;

  transform:${({state})=>state?'rotate(0deg)':'rotate(180deg)'};

  @media only screen and (min-width: 920px) {
  display:none;
};
`

const TextLogo = styled(LogoContainer)`
  margin-top:20px;
  margin-right:10px;
  color:${({theme})=>theme.colors.main};
  letter-spacing:1px;
  font-size:20px;
  font-weight:600;
  font-family:Roboto;
  display:none;
  @media only screen and (min-width: 920px) {
  display:block;
};
`



const MountainLogo = styled(LogoContainer)`
  border:${({theme}) => `2px solid ${theme.colors.main}` };
  border-radius:60%;
`


const Logo = ({modalActionCreator})=>{
  const [clicked,setClicked] = useState(true)

  const handleClick =()=>{
    setClicked(!clicked)
    //console.log("THIS IS CLICKED --->" + clicked)
    modalActionCreator(clicked)
  }

  return(
    <Container>
      <MountainLogo>
        <FilterHdrIcon style={{color:'rgb(32, 129, 226)',fontSize:'25px'}}/>
      </MountainLogo>
      <ArrowLogo state={clicked} onClick={()=>{handleClick()}}>
        <ExpandLessIcon style={{color:'rgb(32, 129, 226)'}}/>
      </ArrowLogo>
      <TextLogo>OpenLand</TextLogo>
    </Container>
  )
}


const mapDispatchToProps ={
  modalActionCreator
}


const ConnectedLogo = connect(null,mapDispatchToProps)(Logo)
export default ConnectedLogo
