import React, { useState } from "react";
import Navigation from "./Navigation";
import Events from "./Events";
import AddEvent from "./AddEvent";

function App() {
  const [addEvent, setAddEvent] = useState(false);

  const onAddEventHandler = () => {
    setAddEvent(true);
  };

  return (
    <div className="app-container">
      <div className="countdown">
        <Navigation onAddEventHandler={onAddEventHandler} />
        {addEvent ? <AddEvent /> : <Events />}
      </div>
    </div>
  );
}

export default App;
