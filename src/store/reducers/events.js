import {
  ADD_EVENT,
  UPDATE_EVENT,
  SET_EVENTS,
  SET_ACTIVE_FILTER,
  SHOW_ADD_EVENT,
} from "../../constants/action-types";

const defaultEvents = {
  events: null,
  activeFilterName: "upcoming",
  showAddEvent: false,
};

export default (state = defaultEvents, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.events,
        filteredEvents: action.events,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.event],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === action.id) {
            return { ...event, ...action.updates };
          } else {
            return event;
          }
        }),
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
