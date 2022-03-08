import { render, fireEvent } from "@testing-library/react-native";
import { Heading } from "../../components";

describe("Heading", () => {
  it("should render heading component correctly", () => {
    const mockedText = "mocked text";
    const { getByText } = render(<Heading>{mockedText}</Heading>);
    expect(getByText(mockedText)).toBeTruthy();
  });
});
