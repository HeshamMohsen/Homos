import { useState } from "react";

export default function useFormInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
