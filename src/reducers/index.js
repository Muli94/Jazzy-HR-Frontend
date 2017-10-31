import { combineReducers } from 'redux'
import GnomeReducer from './gnomeReducer'

const rootReducer = combineReducers({
    gnomes: GnomeReducer
})

export default rootReducer
