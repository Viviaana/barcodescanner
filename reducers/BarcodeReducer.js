import {ADD_BARCODE} from "../actions/types"
import {FETCH_TITLE} from "../actions/types"
import {SET_HISTORY} from "../actions/types"



  const INITIAL_STATE = {
    barcode: " ",
    title: " ",
    history: []
  };

  export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
      case ADD_BARCODE:
        return { ...state, barcode: action.payload };
      case FETCH_TITLE:
        return { ...state, title: action.payload };
      case SET_HISTORY:
          return { ...state, history: state.history.concat(action.payload) };
      default:
        return state;
    }
  };