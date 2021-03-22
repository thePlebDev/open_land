import React from 'react';
import styled from 'styled-components'

import ConnectedMobileMenuLogic from '../MoblieLinksLogic'


const linksData = [{name:"Browser"},{name:"Activity"},{name:"Rankings"},
                  {name:"Blog"},{name:"Help",extra:true}, {name:"Create",extra:true},{name:"Account",extra:true}]

const Container = styled.div`
  font-size:18px;
  color:rgb(53, 56, 64);
  width:100%;
`

const MobileLinks =({showHelp})=>{

  return(
    <Container>
    {

      linksData.map((item,index)=>{
      return <ConnectedMobileMenuLogic item={item} key={index}/>

      })
    }
    </Container>
  )
}

export default MobileLinks
