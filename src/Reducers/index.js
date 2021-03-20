import { combineReducers } from 'redux';
import modalReducer from './ModalReducers'
import hoverModalReducer from './HoverModalReducers'
import testIncrementReducers from './TestIncrementReducers'


const rootReducer = combineReducers({
  //THE SLICE REDUCERS WILL GO HERE
  modalReducer,
  hoverModalReducer,
  testIncrementReducers
})

export default rootReducer;
