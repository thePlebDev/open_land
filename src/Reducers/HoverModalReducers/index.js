import types from '../types'
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpIcon from '@material-ui/icons/Help';
import AddCommentIcon from '@material-ui/icons/AddComment';
import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';
import StoreIcon from '@material-ui/icons/Store';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import DescriptionIcon from '@material-ui/icons/Description';

import FaceIcon from '@material-ui/icons/Face';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import RedeemIcon from '@material-ui/icons/Redeem';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

const initialState ={
  show:false,
  right:'',
  data:[{}]
}
const helpData =[
        {name:"Help Center",icon:<QuestionAnswerIcon/>},{name:"Suggestions",icon:<AddCommentIcon/>},
        {name:"FAQ",icon:<HelpIcon/>},{name:"Blog",icon:<BookIcon/>},{name:"Developers",icon:<CodeIcon/>}
      ]

const createData=[
        {name:"My Collections",icon:<StoreIcon/>},
        {name:"Develope with us",icon:<CodeIcon/>},{name:"Submit NFTs",icon:<AssignmentReturnedIcon/>},{name:"Docs",icon:<DescriptionIcon/>}
      ]

const profileData=[
        {name:"My Profile",icon:<FaceIcon/>},{name:"W-ETH Station",icon:<MonetizationOnIcon/>},{name:"Sell",icon:<CreateNewFolderIcon/>},
        {name:"Transfer",icon:<RedeemIcon/>},{name:"Account Settings",icon:<SettingsApplicationsIcon/>}]

const hoverModalReducer = (state=initialState,action)=>{
  switch(action.type){
    case types.modalHelp:{
      return{...state,show:true,right:'30%',data:helpData}
    }
    case types.modalCreate:{
      return{...state,show:true,right:'14%',data:createData}
    }
    case types.modalProfile:{
      return{...state,show:true,right:'4%',data:profileData}
    }
    case types.modalHide:{
      return{...state,show:false}
    }

    default:
    return state
  }
}

export default hoverModalReducer
