import { render } from "@testing-library/react-native";
import { ScreenContainer, Heading } from "../../components";

describe("ScreenContainer", () => {
  it("should render heading component correctly", () => {
    const mockedText = "mocked text";
    const mock = <Heading>{mockedText}</Heading>;
    const { getByText } = render(<ScreenContainer>{mock}</ScreenContainer>);
    expect(getByText(mockedText)).toBeTruthy();
  });
});
