import types from '../types'
import {helpData,createData,accountData} from './mobileIcons'


const initialState = {
  showSecond:false,
  data:helpData,

}

const mobileMenuReducer =(state=initialState,action)=>{
  switch (action.type) {
    case types.showHelp:
      return{...state,showSecond:true}

    case types.showCreate:
      return{...state,showSecond:true,data:createData}

    case types.showAccount:
      return{...state,showSecond:true,data:accountData}

    case types.hideSecond:
          return{...state,showSecond:false}

    default:
      return state;

  }
}


export default mobileMenuReducer
