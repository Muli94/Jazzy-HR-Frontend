import { combineReducers } from 'redux'
import GnomeReducer from './gnomeReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    gnomes: GnomeReducer,
    form: formReducer
})

export default rootReducer
