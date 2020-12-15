import React from "react";
import { connect } from "react-redux";
import { setActiveFilterName } from "../store/actions/events";

function Filters({ events: { activeFilterName }, setActiveFilterName }) {
  return (
    <div className="filters d-flex justify-content-center align-items-center flex-grow-1">
      <div className="form-group flex-grow-1"></div>
      <span
        className={
          activeFilterName === "upcoming"
            ? "event__label mr-2"
            : "event__label event__label--light mr-2"
        }
        onClick={() => {
          setActiveFilterName("upcoming");
        }}
      >
        Upcoming
      </span>
      <span
        className={
          activeFilterName === "started"
            ? "event__label mr-2"
            : "event__label event__label--light mr-2"
        }
        onClick={() => {
          setActiveFilterName("started");
        }}
      >
        Started
      </span>
      <span
        className={
          activeFilterName === "trashed"
            ? "event__label mr-2"
            : "event__label event__label--light mr-2"
        }
        onClick={() => {
          setActiveFilterName("trashed");
        }}
      >
        Trashed
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveFilterName: (name) => dispatch(setActiveFilterName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
