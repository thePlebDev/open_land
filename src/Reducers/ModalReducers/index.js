import types from '../types'

const initialState={
  show:false
}

const modalReducer = (state=initialState,action)=>{
  switch(action.type){
    case types.modalShow:{
      return{...state,show:true}
    }

    default:
    return state
  }
}

export default modalReducer
