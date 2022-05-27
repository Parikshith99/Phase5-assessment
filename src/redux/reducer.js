import * as types from "./actionTypes";

const initialState = {
  events: [],
  event: {},
  loading: true,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case types.ADD_EVENT:
      return {
        ...state,
        loading: false,
      };
    case types.SEARCH_EVENT:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case types.GET_SINGLE_EVENT:
      return {
        ...state,
        event: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default eventsReducer;
