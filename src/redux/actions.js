import * as types from "./actionTypes";
import axios from "axios";

const getEvents = (events) => ({
  type: types.GET_EVENTS,
  payload: events,
});

const getEvent = (event) => ({
  type: types.GET_SINGLE_EVENT,
  payload: event,
});

const searchResults = (search) => ({
  type: types.SEARCH_EVENT,
  payload: search,
});

const eventAdded = (events) => ({
  type: types.ADD_EVENT,
  payload: events,
});

export const loadEvents = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getEvents(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const addEvents = (event) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, event)
      .then((res) => {
        console.log("res", res);
        dispatch(eventAdded(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const searchEvents = (search) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}?q=${search}`)
      .then((res) => {
        console.log("res", res);
        dispatch(searchResults(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleEvent = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getEvent(res.data));
      })
      .catch((error) => console.log(error));
  };
};
