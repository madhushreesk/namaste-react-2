const { Provider } = require("react-redux");
import appStore from "../../utils/appStore";
import { render } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logoutButton = screen.getByRole("button");

  expect(logoutButton).toBeInTheDocument();
});
