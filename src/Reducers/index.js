import { combineReducers } from 'redux';
import modalReducer from './ModalReducers'
import hoverModalReducer from './HoverModalReducers'
import testIncrementReducers from './TestIncrementReducers'
import mobileMenuReducer from './MobileMenuReducer'


const rootReducer = combineReducers({
  //THE SLICE REDUCERS WILL GO HERE
  modalReducer,
  hoverModalReducer,
  testIncrementReducers,
  mobileMenuReducer
})

export default rootReducer;
