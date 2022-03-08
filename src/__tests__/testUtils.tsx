import React from "react";
import {
  render,
  RenderAPI,
  RenderOptions,
} from "@testing-library/react-native";

import { NavigationContext } from "@react-navigation/native";
import { QuizContext, IQuizContext } from "../hooks/useQuiz";
import * as mockedQuizContext from "./mocks/mockedQuizContext";

const actualNav = jest.requireActual("@react-navigation/native");

interface IMockOverride {
  navigation?: {
    navigate?: jest.Mock<any, any>;
  };
  useQuiz?: Partial<IQuizContext>;
}

/**
 * A custom render to setup providers. Extends regular
 * render options with overrided props to allow injecting
 * different scenarios to test with.
 *
 */

export const renderWithMockedContexts = (
  component: React.ReactElement,
  mockOverrride?: IMockOverride,
  options?: RenderOptions
): RenderAPI => {
  const navContext = {
    isFocused: () => true,
    ...actualNav.navigation,
    ...mockOverrride?.navigation,
  };

  return render(
    <QuizContext.Provider
      value={{ ...mockedQuizContext, ...mockOverrride?.useQuiz }}
    >
      <NavigationContext.Provider value={navContext}>
        {component}
      </NavigationContext.Provider>
    </QuizContext.Provider>,
    options
  );
};
