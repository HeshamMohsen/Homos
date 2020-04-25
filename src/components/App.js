import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import Events from "./Events";
import AddEvent from "./AddEvent";
import Labels from "./Labels";

function App({ showAddEvent }) {
  return (
    <div className="app-container">
      <div className="countdown">
        <Navigation />
        {showAddEvent ? <AddEvent /> : <Events />}
      </div>
      <Labels />
    </div>
  );
}

const mapStateToProps = (state) => ({
  showAddEvent: state.events.showAddEvent,
});

export default connect(mapStateToProps)(App);
