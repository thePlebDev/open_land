import types from '../types'

const initialState ={
  index:0,
  transition:true
}

const testIncrementReducres =(state=initialState,action)=>{
  //I can create a new state based on the obld state and an action.
  //just make sure I use the ...state to copy everything first
  switch(action.type){
    case types.increment:

      if(state.index === 3){
        return {...state,index:0,transition:false}
      }

      else{
        return{...state,index:state.index + 1,transition:true}
      }


    case types.decrement:
      if(state.index === 0 ){
      return {...state,index:3,transition:false}

    }else{
      return{...state,index:state.index - 1,transition:true}
    }

    case types.false:
      return {...state,transition:false}

    default:
      return state
  }

}


export default testIncrementReducres
