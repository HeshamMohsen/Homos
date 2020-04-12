import React, { useState } from "react";
import Navigation from "./Navigation";
import Events from "./Events";
import AddEvent from "./AddEvent";

function App() {
  const [showAddEvent, setShowAddEvent] = useState(false);

  const showAddEventComponentHandler = () => {
    setShowAddEvent(!showAddEvent);
  };

  return (
    <div className="app-container">
      <div className="countdown">
        <Navigation showAddEventComponentHandler={showAddEventComponentHandler} />
        {showAddEvent ? (
          <AddEvent showAddEventComponentHandler={showAddEventComponentHandler} />
        ) : (
          <Events />
        )}
      </div>
    </div>
  );
}

export default App;
