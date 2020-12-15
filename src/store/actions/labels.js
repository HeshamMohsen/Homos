import { ADD_LABEL, DELETE_LABEL, IS_MODAL_OPEN } from "../../constants/action-types";

export const addLabel = (label) => ({
  type: ADD_LABEL,
  label,
});

export const deleteLabel = (id) => ({
  type: DELETE_LABEL,
  id,
});

export const setModalOpen = (isOpen) => ({
  type: IS_MODAL_OPEN,
  isOpen,
});
