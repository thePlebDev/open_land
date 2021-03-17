import { combineReducers } from 'redux';
import modalReducer from './ModalReducers'


const rootReducer = combineReducers({
  //THE SLICE REDUCERS WILL GO HERE
  modalReducer
})

export default rootReducer;
