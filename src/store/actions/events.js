import {
  ADD_EVENT,
  UPDATE_EVENT,
  SET_EVENTS,
  SET_ACTIVE_FILTER,
  SHOW_ADD_EVENT,
} from "../../constants/action-types";

const setEvents = (events) => ({
  type: SET_EVENTS,
  events,
});

export const startSetEvents = () => (dispatch) => {
  fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/events")
    .then((response) => response.json())
    .then((events) => {
      dispatch(setEvents(events));
    });
};

const addEvent = (event) => ({
  type: ADD_EVENT,
  event,
});

export const startAddEvent = (event) => async (dispatch) => {
  await fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  dispatch(addEvent(event));
};

export const updateEvent = (id, updates) => ({
  type: UPDATE_EVENT,
  id,
  updates,
});

export const setActiveFilterName = (name) => ({
  type: SET_ACTIVE_FILTER,
  name,
});

export const setShowAddEvent = (state) => ({
  type: SHOW_ADD_EVENT,
  state,
});
