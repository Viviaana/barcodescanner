import {ADD_BARCODE} from "../actions/types"

  const INITIAL_STATE = {
    barcode: " "
  };

  export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
      case ADD_BARCODE:
        return { ...state, barcode: action.payload };
      default:
        return state;
    }
  };