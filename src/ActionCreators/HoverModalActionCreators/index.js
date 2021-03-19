import types from '../../Reducers/types'

const hoverModalActionCreators =(()=>{

  return{
    help(){

      return{
        type:types.modalHelp
      }
    },
    create(){
      return{
        type:types.modalCreate
      }
    },
    profile(){
      return{
        type:types.modalProfile
      }
    },
    hide(){
      return{
        type:types.modalHide
      }
    }
  }

})()

export default hoverModalActionCreators
