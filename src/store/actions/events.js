import {
  ADD_EVENT,
  UPDATE_EVENT,
  SET_ACTIVE_FILTER,
  SHOW_ADD_EVENT,
} from "../../constants/action-types";

export const addEvent = (event) => ({
  type: ADD_EVENT,
  event,
});

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
