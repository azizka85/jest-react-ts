import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Contact } from './Contact';
import * as MapComponent from './Map';

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if(container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it("should render contact information", () => {
  const location: MapComponent.MapProps = { 
    name: 'Test',
    lat: 0, 
    long: 0 
  };

  const mockedMap = jest.spyOn(MapComponent, 'Map')
    .mockImplementation(
      (props) => (
        <div data-testid="map">
          {props.lat}:{props.long}
        </div>
      )   
    );

  act(() => {
    render(
      <Contact
        name="Joni Baez"
        email="test@example.com"
        site="http://test.com"
        location={location}
      />,
      container
    );
  });

  console.log(container?.innerHTML);

  expect(
    container?.querySelector("[data-testid='email']")?.getAttribute("href")
  ).toEqual("mailto:test@example.com");

  expect(
    container?.querySelector('[data-testid="site"]')?.getAttribute("href")
  ).toEqual("http://test.com");

  expect(container?.querySelector('[data-testid="map"]')?.textContent).toEqual(
    "0:0"
  );

  mockedMap.mockRestore();
});
