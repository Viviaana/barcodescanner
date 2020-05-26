import { ADD_BARCODE } from "./types";
import { FETCH_TITLE } from "./types";
import { SET_HISTORY } from "./types";

export const addBarcode = (barcode) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BARCODE, payload: barcode,
     }) 
    var title = " "
  fetch(`https://api.barcodelookup.com/v2/products?barcode=${barcode}&formatted=y&key=0ovuymfvykv1nkg6q5jb253pexvakx`)
        .then(response => response.json())
        .then((responseJson) => {
          title = responseJson.products[0].product_name;
         dispatch({
          type: FETCH_TITLE, payload: title
         })
         dispatch({
          type: SET_HISTORY, payload: {key: title}
         }
         );       
        })
        .catch(error => console.log(error))    
  }
  
};

  export const fetchTitle = (payload) => {
    return{
    type: FETCH_TITLE, payload 
  }};

  export const setHistory = (payload) => {
    return{
    type: SET_HISTORY, payload 
  }};



  
