import types from '../../Reducers/types'



const testincrementialActionCreators = (()=>{
  return{
    testIncrement(){
      return{
        type:types.increment
      }
    },
    testDecrement(){
      return{
        type:types.decrement
      }
    },
    testInfiniteFalse(){
      return{
        type:types.false
      }
    }
  }
})()


export default testincrementialActionCreators
