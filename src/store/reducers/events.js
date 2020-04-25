import {
  ADD_EVENT,
  UPDATE_EVENT,
  SET_EVENTS,
  SET_FILTER,
  SET_SEARCH_TEXT,
  SET_ACTIVE_FILTER,
  SHOW_ADD_EVENT,
} from "../../constants/action-types";

const defaultEvents = {
  events: null,
  searchText: "",
  activeFilterName: "upcoming",
  filter: "?is_deleted=false&started=false",
  showAddEvent: false,
};

export default (state = defaultEvents, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.event],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.id),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text,
      };
    case SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilterName: action.name,
      };
    case SHOW_ADD_EVENT:
      return {
        ...state,
        showAddEvent: action.state,
      };
    default:
      return state;
  }
};
