import types from '../types'
import {helpData,createData,accountData} from './mobileIcons'


const initialState = {
  showSecond:false,
  data:helpData,
  title:""

}

const mobileMenuReducer =(state=initialState,action)=>{
  switch (action.type) {
    case types.showHelp:
      return{...state,showSecond:true,title:"Community"}

    case types.showCreate:
      return{...state,showSecond:true,data:createData,title:"Create"}

    case types.showAccount:
      return{...state,showSecond:true,data:accountData,title:"Account"}

    case types.hideSecond:
          return{...state,showSecond:false}

    default:
      return state;

  }
}


export default mobileMenuReducer
