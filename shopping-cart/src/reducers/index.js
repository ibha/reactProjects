import { combineReducers } from "redux";
import basketReducers from "./basketReducers";
import searchReducers from "./searchReducers";


export default combineReducers({
    basketState: basketReducers,
    searchState: searchReducers
});