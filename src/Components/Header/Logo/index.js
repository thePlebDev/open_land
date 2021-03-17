import React,{useState} from 'react'
import styled from 'styled-components'

import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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

  transform:${({state})=>state?'rotate(180deg)':'rotate(0deg)'};
`



const MountainLogo = styled(LogoContainer)`
  border:${({theme}) => `2px solid ${theme.colors.main}` };
  border-radius:60%;
`


const Logo = ()=>{
  const [clicked,setClicked] = useState(false)

  return(
    <Container>
      <MountainLogo>
        <FilterHdrIcon style={{color:'rgb(32, 129, 226)',fontSize:'25px'}}/>
      </MountainLogo>
      <ArrowLogo state={clicked} onClick={()=>{setClicked(!clicked)}}>
        <ExpandLessIcon style={{color:'rgb(32, 129, 226)'}}/>
      </ArrowLogo>

    </Container>
  )
}

export default Logo
