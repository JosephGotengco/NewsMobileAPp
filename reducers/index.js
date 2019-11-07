// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import newsReducer from "./newsReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
    news: newsReducer
});
// Exports
export default rootReducer;
