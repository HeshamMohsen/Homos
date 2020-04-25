import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import Modal from "react-modal";
import useFormInput from "./useFormInput";
import useClickOutside from "./useClickOutside";
import useLabels from "./useLabels";
import Label from "./Label";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Labels({ isModalOpen, setModalOpen }) {
  const label = useFormInput("");
  const { labels, onChange: setLabels } = useLabels();
  const [error, setError] = useState("");

  const modalRef = useRef();

  // handle click outside modal
  useClickOutside(modalRef, () => setModalOpen(false));

  const addNewLabelHandler = (e) => {
    e.preventDefault();

    // clear error message
    setError("");

    // catch duplicate label name
    if (labels.find(({ name }) => name === label.value)) {
      return setError("Label already exists.");
    }

    // label object
    const newLabel = {
      id: uuid(),
      name: label.value,
    };

    // submit to add label
    fetch("http://localhost:8080/labels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLabel),
    }).then(() => {
      // clear input after submit
      label.onChange({ target: { value: "" } });
      // push new label to labels array
      setLabels([...labels, newLabel]);
    });
  };

  const deleteLabelHandler = (id) => {
    // submit to add label
    fetch(`http://localhost:8080/labels/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // push new label to labels array
      setLabels(labels.filter((label) => label.id !== id));
    });
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        closeTimeoutMS={200}
        style={{
          overlay: {
            backgroundColor: "rgba(5, 25, 71, 0.61)",
          },
          content: {
            width: "25%",
            height: "400px",
            background: "#fff",
            margin: "auto",
            borderRadius: "10px",
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.45)",
            border: "none",
            padding: "0",
            overflow: "hidden",
          },
        }}
      >
        <div ref={modalRef} className="label-modal h-100 p-3">
          <h6>Labels</h6>

          <div className="py-3">
            <form
              className="d-flex justify-content-between align-items-center"
              onSubmit={addNewLabelHandler}
            >
              <div className="form-group m-0">
                <input
                  type="text"
                  className="form-control"
                  required
                  autoFocus
                  {...label}
                  placeholder="add label name"
                />
                {error && <span className="red-text">{error}</span>}
              </div>
              <button type="submit" className="btn btn-primary rounded-circle">
                <i className="fas fa-check"></i>
              </button>
            </form>
          </div>

          <div className="labels">
            {labels?.map((label) => (
              <Label key={label.id} {...label} deleteLabelHandler={deleteLabelHandler} />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Labels;
