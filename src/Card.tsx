import React from "react";
import { useEffect } from "react";

export interface CardProps {
  onSelect: (obj: any) => void
}

export function Card(props: CardProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.onSelect(null);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [props.onSelect]);

  return (
    <>
      {[1, 2, 3, 4].map(choice => (
        <button
          key={choice}
          data-testid={choice}
          onClick={() => props.onSelect(choice)}
        >
          {choice}
        </button>
      ))}
    </>
  );
}
