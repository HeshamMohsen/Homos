import React from "react";

function Navigation(props) {
  return (
    <div className="navigation">
      <div className="navigation__upper d-flex justify-content-between align-items-center px-3">
        <div className="d-flex">
          <div className="circle rounded-circle rounded-pill circle--red"></div>
          <div className="circle rounded-circle rounded-pill circle--green"></div>
          <div className="circle rounded-circle rounded-pill circle--yellow"></div>
        </div>
        <div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="navigation__inner py-5">
        <div className="active">
          <i className="fas fa-inbox item-icon"></i>
          <p className="item-text">Events</p>
        </div>
      </div>
      <button
        className="btn btn-primary rounded-circle align-self-center"
        onClick={props.showAddEventComponentHandler}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default Navigation;
