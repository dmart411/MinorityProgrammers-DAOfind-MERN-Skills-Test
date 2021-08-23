import { combineReducers } from "redux";
import daoReducer from "./daoReducer";

export default combineReducers({
  daos: daoReducer,
});
