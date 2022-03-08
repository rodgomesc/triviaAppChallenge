import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../../../src/components";

describe("Button", () => {
  it("should render button component correctly", () => {
    const mockedText = "mocked text";
    const mockedOnPress = jest.fn();
    const { getByText } = render(
      <Button text={mockedText} onPress={mockedOnPress} />
    );
    expect(getByText(mockedText)).toBeTruthy();

    fireEvent.press(getByText(mockedText));
    expect(mockedOnPress).toHaveBeenCalled();
  });
});
