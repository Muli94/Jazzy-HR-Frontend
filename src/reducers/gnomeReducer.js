import { FETCH_GNOMES_SUCCESS } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_GNOMES_SUCCESS:
      return [...state, ...action.gnomes];
    default:
      return state;
  }
}
