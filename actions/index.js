import { ADD_BARCODE } from "./types";

export function addBarcode(payload) {
    return (dispatch) => {
    dispatch({ type: ADD_BARCODE, payload })
  }};

