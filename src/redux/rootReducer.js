import { combineReducers } from "redux";
import eventsReducer from "./reducer";
const rootReducer = combineReducers({
  reducer: eventsReducer,
});
export default rootReducer;
