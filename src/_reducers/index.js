import { combineReducers } from 'redux';
import user_reducer from './user_reducer';

const RootReducer = combineReducers({
  user_reducer,
});

export default RootReducer;
