import React, { useState } from "react";
import Navigation from "./Navigation";
import Events from "./Events";
import AddEvent from "./AddEvent";
import Labels from "./Labels";

function App() {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const showAddEventComponentHandler = () => {
    setShowAddEvent(!showAddEvent);
  };

  return (
    <div className="app-container">
      <div className="countdown">
        <Navigation
          showAddEventComponentHandler={showAddEventComponentHandler}
          setModalOpen={setModalOpen}
        />
        {showAddEvent ? (
          <AddEvent showAddEventComponentHandler={showAddEventComponentHandler} />
        ) : (
          <Events />
        )}
      </div>
      <Labels isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default App;
