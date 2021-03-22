import React from 'react';
import styled from 'styled-components';

const Links = styled.div`
  margin:0 auto;
  height:56px;
  font-weight:500;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const MobileLinksLogic =({item})=>{


  return(
          <Links>
                {item.name}
          </Links>
  )
}



export default MobileLinksLogic
