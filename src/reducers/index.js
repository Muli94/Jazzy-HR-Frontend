import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import GnomeReducer from './gnomeReducer';

const rootReducer = combineReducers({
  gnomes: GnomeReducer,
  form: formReducer,
});

export default rootReducer;
