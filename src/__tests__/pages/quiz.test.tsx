import {
  waitFor,
  act,
  RenderAPI,
  fireEvent,
} from "@testing-library/react-native";
import { renderWithMockedContexts } from "../testUtils";
import Quiz from "../../pages/Quiz";

describe("Quiz", () => {
  it("should show a message if quiz is not loaded -- true case", () => {
    const { queryAllByText } = renderWithMockedContexts(<Quiz />, {
      useQuiz: {
        isLoading: true,
      },
    });
    expect(queryAllByText("...loading")).toHaveLength(1);
  });

  it("should not show a message if quiz is not loaded -- falsy case", () => {
    const { queryAllByText } = renderWithMockedContexts(<Quiz />, {
      useQuiz: {
        isLoading: false,
      },
    });
    expect(queryAllByText("...loading")).toHaveLength(0);
  });

  it("should load quiz questions on component mounts", async () => {
    const loadQuizQuestions = jest.fn();
    await waitFor(() => {
      renderWithMockedContexts(<Quiz />, {
        useQuiz: {
          isLoading: true,
          loadQuizQuestions,
        },
      });
    });
    expect(loadQuizQuestions).toHaveBeenCalled();
  });

  it("should navigate to Results page when all questions are answered", async () => {
    let root = {} as RenderAPI;
    const navigation = {
      navigate: jest.fn(),
    };

    await waitFor(() => {
      root = renderWithMockedContexts(<Quiz />, {
        useQuiz: {
          isLoading: false,
        },
        navigation,
      });
    });
    const trueAnswerButton = root.getByText("True");

    // simulate 10 clicks on question answers
    [...Array(10)].forEach(async () => {
      act(() => {
        fireEvent.press(trueAnswerButton);
      });
    });
    act(() => {
      expect(navigation.navigate).toHaveBeenCalledWith("Result");
    });
  });

  it("should log a score on question answer", async () => {
    let root = {} as RenderAPI;
    const logScore = jest.fn();
    await waitFor(() => {
      root = renderWithMockedContexts(<Quiz />, {
        useQuiz: {
          isLoading: false,
          logScore,
        },
      });
    });
    const trueAnswerButton = root.getByText("True");
    act(() => {
      fireEvent.press(trueAnswerButton);
    });
    expect(logScore).toHaveBeenCalled();
  });
});
