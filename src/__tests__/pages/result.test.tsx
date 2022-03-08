import {
  waitFor,
  act,
  RenderAPI,
  fireEvent,
} from "@testing-library/react-native";

import mockedQuestions from "../mocks/mockedQuestions";
import { renderWithMockedContexts } from "../testUtils";
import Result from "../../pages/Result";

describe("Result", () => {
  it("should show the correct and total score in header", () => {
    const { getByText } = renderWithMockedContexts(<Result />);
    expect(getByText("8/10")).toBeTruthy();
  });

  it("should render a list including each aswered question", () => {
    const { getByText } = renderWithMockedContexts(<Result />);

    mockedQuestions.forEach((question) => {
      expect(getByText(question.question)).toBeTruthy();
    });
  });

  it("should reset the score and navigate to home when user wants to play again", () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const resetScore = jest.fn();
    const { getByText } = renderWithMockedContexts(<Result />, {
      navigation,
      useQuiz: {
        resetScore,
      },
    });

    const playAgainButton = getByText("Play Again");
    fireEvent.press(playAgainButton);

    expect(resetScore).toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });
});
