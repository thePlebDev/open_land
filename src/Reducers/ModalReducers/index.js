import types from '../types'

const initialState={
  show:false
}

const modalReducer = (state=initialState,action)=>{
  switch(action.type){
    case types.modalShow:{
      return{...state,show:true}
    }
    case types.modalHide:{
      return{...state,show:false}
    }

    default:
    return state
  }
}

export default modalReducer
