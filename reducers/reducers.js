import { combineReducers } from 'redux';
import AddBarcodeReducer from './BarcodeReducer'
import FetchTitleReducer from './BarcodeReducer'
import SetHistoryReducer from './BarcodeReducer'



export default combineReducers({
    showBarcode: AddBarcodeReducer,
    showTitle: FetchTitleReducer,
    addHistory: SetHistoryReducer,
})