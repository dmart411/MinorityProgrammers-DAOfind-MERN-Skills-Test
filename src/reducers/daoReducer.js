import _ from "lodash";
import {
  ADD_DAO,
  FETCH_DAO,
  FETCH_DAOS,
  FILTER_DAOS,
  UPDATE_DAO,
  SEARCH_DAOS
} from "../actions/types";

const daoReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_DAOS: 
      return action.payload;
    case FILTER_DAOS:
      return action.payload;
    case FETCH_DAO:
      return _.uniqBy([action.payload, ...state], "id");
    case FETCH_DAOS:
      return action.payload;
    case UPDATE_DAO:
      return _.uniqBy([action.payload, ...state], "id");
    case ADD_DAO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default daoReducer;
