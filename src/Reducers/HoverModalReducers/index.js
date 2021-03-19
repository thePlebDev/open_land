import types from '../types'

const initialState ={
  show:false,
  right:'',
  data:{}
}

const hoverModalReducer = (state=initialState,action)=>{
  switch(action.type){
    case types.modalHelp:{
      return{...state,show:true,right:'228px'}
    }
    case types.modalCreate:{
      return{...state,show:true,right:'118px'}
    }
    case types.modalProfile:{
      return{...state,show:true,right:'28px'}
    }
    case types.modalHide:{
      return{...state,show:false}
    }

    default:
    return state
  }
}

export default hoverModalReducer
