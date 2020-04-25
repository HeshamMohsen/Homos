import React, { useState } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import Events from "./Events";
import AddEvent from "./AddEvent";
import Labels from "./Labels";

function App({ showAddEvent }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-container">
      <div className="countdown">
        <Navigation setModalOpen={setModalOpen} />
        {showAddEvent ? <AddEvent /> : <Events />}
      </div>
      <Labels isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  showAddEvent: state.events.showAddEvent,
});

export default connect(mapStateToProps)(App);
