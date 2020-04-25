import { ADD_LABEL, DELETE_LABEL, SET_LABELS, IS_MODAL_OPEN } from "../../constants/action-types";

const setLabels = (labels) => ({
  type: SET_LABELS,
  labels,
});

export const startSetLabels = () => (dispatch) => {
  fetch("http://localhost:8080/labels")
    .then((response) => response.json())
    .then((labels) => {
      dispatch(setLabels(labels));
    });
};

const addLabel = (label) => ({
  type: ADD_LABEL,
  label,
});

export const startAddLabel = (label) => async (dispatch) => {
  await fetch("http://localhost:8080/labels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(label),
  });
  dispatch(addLabel(label));
};

const deleteLabel = (id) => ({
  type: DELETE_LABEL,
  id,
});

export const startDeleteLabel = (id) => async (dispatch) => {
  await fetch(`http://localhost:8080/labels/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(deleteLabel(id));
};

export const setModalOpen = (isOpen) => ({
  type: IS_MODAL_OPEN,
  isOpen,
});
