const { render , screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../../components/Body";
import MOCK_DATA from "../mocks/alldata.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});  

it("Should render a dish component with search ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const allCards = screen.getAllByTestId("cards");

  expect(allCards.length).toBe(20);

  const serachInput = screen.getByTestId("searchInput");

  fireEvent.change(serachInput , {target : {value : "pizza"}});

  const serachBtn = screen.getByRole("button", {name : "Search"});
 
  fireEvent.click(serachBtn);

  const searchCards = screen.getAllByTestId("cards");

  expect(searchCards.length).toBe(2);

});

it("Should render Top rated restaurants ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const allCards = screen.getAllByTestId("cards");
  
    expect(allCards.length).toBe(20);

    const topBtn = screen.getByTestId("top");

    fireEvent.click(topBtn);

    const filterCards = screen.getAllByTestId("cards");

    expect(filterCards.length).toBe(17);

});