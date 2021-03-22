
//HELP DATA ICONS
import MessageIcon from '@material-ui/icons/Message';
import AddCommentIcon from '@material-ui/icons/AddComment';
import HelpIcon from '@material-ui/icons/Help';
import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';
import FaceIcon from '@material-ui/icons/Face';

//CREATE DATA ICONS
import StoreIcon from '@material-ui/icons/Store';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import DescriptionIcon from '@material-ui/icons/Description';

//ACCOUNT DATA ICONS
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import RedeemIcon from '@material-ui/icons/Redeem';
import InfoIcon from '@material-ui/icons/Info';




const helpData =[
  {icon:<MessageIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Help Center"},
  {icon:<AddCommentIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Suggestions"},
  {icon:<HelpIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"FAQ"},
  {icon:<BookIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Blog"},
  {icon:<CodeIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Developers"},
  {icon:<FaceIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Careers"}
]

const createData =[
  {icon:<StoreIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"My Collections"},
  {icon:<CodeIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Develope with us"},
  {icon:<AssignmentReturnedIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Submit NFTs"},
  {icon:<DescriptionIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Docs"},
]

const accountData =[
  {icon:<FaceIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"My Profile"},
  {icon:<MonetizationOnIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"W-ETH Staion"},
  {icon:<CreateNewFolderIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Sell"},
  {icon:<RedeemIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Transfer"},
  {icon:<InfoIcon style={{fontSize:"25px",margin:'15px'}}/>,name:"Account Settings"},
]



export {helpData,createData,accountData}
