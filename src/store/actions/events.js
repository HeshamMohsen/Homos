import {
  ADD_EVENT,
  UPDATE_EVENT,
  SET_EVENTS,
  SET_FILTER,
  SET_SEARCH_TEXT,
  SET_ACTIVE_FILTER,
  SHOW_ADD_EVENT,
} from "../../constants/action-types";

const setEvents = (events) => ({
  type: SET_EVENTS,
  events,
});

export const startSetEvents = (signal) => (dispatch, getState) => {
  fetch(
    `http://localhost:8080/events${getState().events.filter}&q=${getState().events.searchText}`,
    {
      signal: signal,
    }
  )
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
  await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  dispatch(addEvent(event));
};

const updateEvent = (id) => ({
  type: UPDATE_EVENT,
  id,
});

export const startUpdateEvent = (id, updates) => async (dispatch) => {
  await fetch(`http://localhost:8080/events/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  dispatch(updateEvent(id));
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const setSearchText = (text) => ({
  type: SET_SEARCH_TEXT,
  text,
});

export const setActiveFilterName = (name) => ({
  type: SET_ACTIVE_FILTER,
  name,
});

export const setShowAddEvent = (state) => ({
  type: SHOW_ADD_EVENT,
  state,
});
