import React from "react";

export interface MapProps {
  name: string,
  lat: number,
  long: number
};

export function Map({ name, lat, long }: MapProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {long}</p>
    </div>
  );
}
