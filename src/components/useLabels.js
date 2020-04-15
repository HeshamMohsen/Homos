import { useState, useEffect } from "react";

export default function useLabels() {
  const [labels, setLabels] = useState([]);

  function handleLabels(newLabels) {
    setLabels(newLabels);
  }

  useEffect(() => {
    fetch(`http://localhost:8080/labels`)
      .then((response) => response.json())
      .then((data) => {
        setLabels(data);
      });
  }, []);

  return {
    labels,
    onChange: handleLabels,
  };
}
