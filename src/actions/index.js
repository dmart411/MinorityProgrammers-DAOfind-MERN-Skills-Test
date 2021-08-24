import api from "../api";
import { ADD_DAO, FETCH_DAOS, FETCH_DAO, UPDATE_DAO } from "./types";

export const fetchDaos = () => async (dispatch) => {
  const res = await api.get("/daos");
  return {
    type: FETCH_DAOS,
    payload: res.data,
  };
};

export const fetchDao = (id) => async (dispatch) => {
  const res = await api.get(`{}/daos/${id}`);
  return {
    type: FETCH_DAO,
    payload: res.data,
  };

}

export const updateDao = (dao) => async (dispatch) => {
  const res = await api.patch(`/daos/${dao.id}`, dao);
  return {
    type: UPDATE_DAO,
    payload: res.data,
  };
}

export const addDao = (dao) => async (dispatch) => {
  const res = await api.post("/daos", dao);
  return {
    type: ADD_DAO,
    payload: res.data,
  };
};


