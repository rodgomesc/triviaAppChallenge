import { fireEvent } from "@testing-library/react-native";
import { renderWithMockedContexts } from "../testUtils";
import Home from "../../pages/Home";

describe("Home", () => {
  it("should render Home page correctly", () => {
    const navigate = jest.fn();
    const { getByText } = renderWithMockedContexts(<Home />, {
      navigation: {
        navigate,
      },
    });

    expect(getByText("Welcome to the trivia challenge!")).toBeTruthy();
    fireEvent.press(getByText("Begin"));
    expect(navigate).toBeCalledWith("Quiz");
  });
});
