import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header onto the page with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button" , {name : "Login"});

//   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});


it("Should render cart onto the page with 0 item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartButton = screen.getByText("Cart -(0 Items)")
  
    expect(cartButton).toBeInTheDocument();
  });

  
it("Should render cart onto the page with cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartButton = screen.getByText(/Cart/);
  
    expect(cartButton).toBeInTheDocument();
  });

it("Should Login button change to logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", {name : "Logout"});
    
    expect(logOutButton).toBeInTheDocument();

  });