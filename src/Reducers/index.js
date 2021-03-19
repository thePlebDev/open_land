import { combineReducers } from 'redux';
import modalReducer from './ModalReducers'
import hoverModalReducer from './HoverModalReducers'


const rootReducer = combineReducers({
  //THE SLICE REDUCERS WILL GO HERE
  modalReducer,
  hoverModalReducer
})

export default rootReducer;
