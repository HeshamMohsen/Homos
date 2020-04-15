import React from "react";

export default function Label({ id, name, deleteLabelHandler }) {
  return (
    <div className="label d-flex justify-content-between align-items-center border-bottom py-1">
      <div className="label__left">
        <i className="fas fa-tag"></i>
        <span className="label-name mx-2">{name}</span>
      </div>
      <div className="label__right">
        <i className="fas fa-trash" onClick={() => deleteLabelHandler(id)}></i>
      </div>
    </div>
  );
}
