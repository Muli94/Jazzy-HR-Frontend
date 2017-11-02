import { FETCH_GNOMES_SUCCESS, EDIT_GNOME_DISPLAY } from '../actions'

export default function(state=[], action){
    switch(action.type){
    case FETCH_GNOMES_SUCCESS:
        return action.gnomes
    default:
        return state
    }
}