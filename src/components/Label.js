import React from "react";
import { connect } from "react-redux";
import { startDeleteLabel } from "../store/actions/labels";

function Label({ id, name, startDeleteLabel }) {
  return (
    <div className="label d-flex justify-content-between align-items-center border-bottom py-1">
      <div className="label__left">
        <i className="fas fa-tag"></i>
        <span className="label-name mx-2">{name}</span>
      </div>
      <div className="label__right">
        <i className="fas fa-trash" onClick={() => startDeleteLabel(id)}></i>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  startDeleteLabel: (id) => dispatch(startDeleteLabel(id)),
});

export default connect(undefined, mapDispatchToProps)(Label);
