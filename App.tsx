import Routes from "./src/routes/root.routes";

import { QuizProvider } from "./src/hooks/useQuiz";

export default function App() {
  return (
    <QuizProvider>
      <Routes />
    </QuizProvider>
  );
}
