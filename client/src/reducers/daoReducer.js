import { ADD_DAO } from "../actions/types";

const daoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DAO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default daoReducer;