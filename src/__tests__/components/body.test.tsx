import { render } from "@testing-library/react-native";
import { Body } from "../../../src/components";

describe("Body", () => {
  it("should render body component correctly", () => {
    const mockedText = "mocked text";
    const { getByText } = render(<Body>{mockedText}</Body>);
    expect(getByText(mockedText)).toBeTruthy();
  });
});
