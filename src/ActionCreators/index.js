import types from '../Reducers/types'

const modalActionCreator =(state)=>{

  if(state){
    return{
      type:types.modalShow
    }
  }else{
    return{
      type:types.modalHide
    }
  }

}

export default modalActionCreator
