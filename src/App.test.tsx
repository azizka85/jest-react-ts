import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { App } from './App';

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if(container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it('renders App componet correctly', () => {
  act(() => {
    render(<App />, container);
  });

  expect(container?.innerHTML.includes('App')).toBeTruthy();
});
