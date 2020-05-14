import {combineReducers} from 'redux';
import AddBarcodeReducer from './BarcodeReducer'

export default combineReducers({
    showBarcode: AddBarcodeReducer,
})