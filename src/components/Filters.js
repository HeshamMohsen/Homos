import React from "react";
import { connect } from "react-redux";
import { setFilter, setActiveFilterName, setSearchText } from "../store/actions/events";

function Filters({
  events: { searchText, activeFilterName },
  setFilter,
  setActiveFilterName,
  setSearchText,
}) {
  return (
    <div className="filters d-flex justify-content-center align-items-center flex-grow-1">
      <div className="form-group mb-0 mx-3 flex-grow-1">
        <input
          className="form-control"
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <span
        className={
          activeFilterName === "upcoming"
            ? "event__label mr-2"
            : "event__label event__label--light mr-2"
        }
        onClick={() => {
          setFilter("?is_deleted=false&started=false");
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
          setFilter("?started=true");
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
          setFilter("?is_deleted=true");
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
  setSearchText: (text) => dispatch(setSearchText(text)),
  setFilter: (filter) => dispatch(setFilter(filter)),
  setActiveFilterName: (name) => dispatch(setActiveFilterName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
