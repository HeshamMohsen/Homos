import React from "react";

export default function Filters({
  activeFilterName,
  handleSelectedFilter,
  searchText,
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
            ? "event__related mr-2"
            : "event__related event__related--light mr-2"
        }
        onClick={() => handleSelectedFilter("upcoming", "?is_deleted=false&started=false")}
      >
        Upcoming
      </span>
      <span
        className={
          activeFilterName === "started"
            ? "event__related mr-2"
            : "event__related event__related--light mr-2"
        }
        onClick={() => handleSelectedFilter("started", "?started=true")}
      >
        Started
      </span>
      <span
        className={
          activeFilterName === "trashed"
            ? "event__related mr-2"
            : "event__related event__related--light mr-2"
        }
        onClick={() => handleSelectedFilter("trashed", "?is_deleted=true")}
      >
        Trashed
      </span>
    </div>
  );
}
