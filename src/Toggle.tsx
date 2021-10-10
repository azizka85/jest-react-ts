import React from "react";
import { useState } from "react";

export interface ToggleProps {
  onChange: (state: boolean) => void
}

export function Toggle({ onChange }: ToggleProps) {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        setState(prevState => !prevState);     
        onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}
