import React from 'react';
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const linksData = [{name:"Browser"},{name:"Activity"},{name:"Rankings"},
                  {name:"Blog"},{name:"Help",extra:true}, {name:"Create",extra:true},{name:"Account",extra:true}]

const Container = styled.div`
  font-size:18px;
  color:rgba(4, 17, 29, 0.75);
  width:100%;
`
const Links = styled.div`
  margin:0 auto;
  height:56px;
  font-weight:500;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const MobileLinks =()=>{

  return(
    <Container>
    {

      linksData.map((item,index)=>{
      return <Links key={index}>
                  {item.name}
                  {
                    item.extra
                      ?
                      <div>
                        <ArrowForwardIosIcon style={{fontSize:'15px'}}/>
                      </div>
                      :
                      <div/>
                  }

                  </Links>
      })
    }
    </Container>
  )
}

export default MobileLinks
