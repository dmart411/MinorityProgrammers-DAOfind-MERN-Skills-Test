import api from "../api";
import {
  ADD_DAO,
  FETCH_DAOS,
  FETCH_DAO,
  UPDATE_DAO,
  FILTER_DAOS,
  SEARCH_DAOS,
} from "./types";

export const searchDaos = (text) => async (dispatch) => {
  const res = await api.get("/daos");
  const filteredData = res.data.filter((dao) => {
    return dao.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  });
  dispatch({
    type: SEARCH_DAOS,
    payload: filteredData,
  });
};

export const filterDaos =
  (property, ascending = true) =>
  (dispatch, getState) => {
    let filteredData = getState().daos;
    filteredData = filteredData.map((dao) => {
      dao.aum = dao.aum === "N/A" ? 0 : dao.aum;
      return dao;
    });
    if (
      property === "name" ||
      property === "category" ||
      property === "foundDate"
    ) {
      if (ascending) {
        filteredData = filteredData.sort((a, b) =>
          a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1
        );
      } else {
        filteredData = filteredData.sort((a, b) =>
          a[property].toLowerCase() < b[property].toLowerCase() ? 1 : -1
        );
      }
    } else if (property === "aum" || property === "twl") {
      if (ascending) {
        filteredData = filteredData.sort((a, b) =>
          parseInt(a[property]) > parseInt(b[property]) ? 1 : -1
        );
      } else {
        filteredData = filteredData.sort((a, b) =>
          parseInt(a[property]) < parseInt(b[property]) ? 1 : -1
        );
      }
    }
    dispatch({
      type: FILTER_DAOS,
      payload: filteredData,
    });
  };

export const fetchDaos = () => async (dispatch) => {
  const res = await api.get("/daos");
  dispatch({
    type: FETCH_DAOS,
    payload: res.data,
  });
};

export const fetchDao = (id) => async (dispatch) => {
  const res = await api.get(`/daos/${id}`);
  dispatch({
    type: FETCH_DAO,
    payload: res.data,
  });
};

export const updateDao = (dao) => async (dispatch) => {
  const res = await api.patch(`/daos/${dao.id}`, dao);
  dispatch({
    type: UPDATE_DAO,
    payload: res.data,
  });
};

export const addDao = (dao) => async (dispatch) => {
  const newDao = { ...dao, id: Math.random() * 10000 };
  const res = await api.post("/daos", newDao);
  dispatch({
    type: ADD_DAO,
    payload: res.data,
  });
};
