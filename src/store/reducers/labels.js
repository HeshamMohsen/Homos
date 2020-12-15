import { ADD_LABEL, DELETE_LABEL, IS_MODAL_OPEN } from "../../constants/action-types";

const defaultLabels = {
  labels: [],
  isModalOpen: false,
};

export default (state = defaultLabels, action) => {
  switch (action.type) {
    case ADD_LABEL:
      return {
        ...state,
        labels: [...state.labels, action.label],
      };
    case DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter((label) => label.id !== action.id),
      };
    case IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.isOpen,
      };
    default:
      return state;
  }
};
