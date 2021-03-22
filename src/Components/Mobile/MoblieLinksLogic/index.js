import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {connect} from 'react-redux'
import mobileMenuActionCreators from '../../../ActionCreators/MobileMenuActionCreators'

const Links = styled.div`
  margin:0 auto;
  height:56px;
  font-weight:500;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const MobileLinksLogic =({item,showHelp})=>{


  return(
    <div>
        {
          item.extra
              ?
          <Links onClick={()=>showHelp()}>
                  {item.name}
                  <ArrowForwardIosIcon style={{fontSize:'15px'}}/>
          </Links>
            :
          <Links>
                {item.name}
          </Links>
              }
    </div>
  )
}

const mapDispatchToProps ={
  showHelp:mobileMenuActionCreators.help
}

const ConnectedMobileMenuLogic = connect(null,mapDispatchToProps)(MobileLinksLogic)

export default ConnectedMobileMenuLogic
