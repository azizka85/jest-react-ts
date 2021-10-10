import axios from "axios";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { UserEntity } from "./api/UserEntity";
import { User } from "./User";

const id = 1;

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

it("renders fake user data", async () => {  
  const fakeUser = {
    name: "Joni Baez",
    phone: "(111) 11-11-11",
    email: "juji@ji.ma"
  };

  const mockAxiosGet = jest.spyOn(axios, "get").mockImplementation(() =>
    Promise.resolve({
      data: fakeUser
    })
  );  

  await act(async () => {
    render(<User user={await UserEntity.fetchPerson(id)} />, container);
  });

  expect(container?.querySelector("summary")?.textContent).toBe(fakeUser.name);
  expect(container?.querySelector("strong")?.textContent).toBe(fakeUser.email);
  expect(container?.textContent).toContain(fakeUser.phone);

  mockAxiosGet.mockRestore();
});

it('renders fetched user data', async () => {
  await act(async () => {
    render(<User user={await UserEntity.fetchPerson(id)} />, container);
  });

  expect(container?.querySelector("summary")?.textContent).toBe('Leanne Graham');
  expect(container?.querySelector("strong")?.textContent).toBe('Sincere@april.biz');
  expect(container?.textContent).toContain('1-770-736-8031 x56442');
});


