import types from '../../Reducers/types';

//NEED TO CREATE A CREATE AND ACCOUNT FUNCTION
const mobileMenuActionCreators =(()=>{
  return{
    help(){
      return{
        type:types.showHelp
      }
    },
    create(){
      return{
        type:types.showCreate
      }
    },
    account(){
      return{
        type:types.showAccount
      }
    },
    hideSecond(){
      return{
        type:types.hideSecond
      }
    }
  }
})()

export default mobileMenuActionCreators
