import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import { View, StyleSheet } from "react-native";
import { Body, Heading, Button, ScreenContainer } from "../components";

import { useQuiz } from "../hooks/useQuiz";

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#000",
    width: 300,
    height: 300,
  },
  contentWrapper: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  answerWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "auto",
  },
});

const Quiz: React.FC = () => {
  const navigation = useNavigation();
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const { logScore, isLoading, loadQuizQuestions, questions } = useQuiz();

  const onQuestionAnswer = (answer: boolean) => {
    const reachedEnd = currentQuestionIdx === questions.length - 1;
    logScore(answer, questions[currentQuestionIdx].correct_answer);

    if (!reachedEnd) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setCurrentQuestionIdx(0);
      navigation.navigate("Result");
    }
  };

  useEffect(() => {
    loadQuizQuestions();
  }, []);

  if (isLoading)
    return (
      <ScreenContainer>
        <Body>...loading</Body>
      </ScreenContainer>
    );

  return (
    <ScreenContainer>
      <Heading>{questions[currentQuestionIdx]?.category}</Heading>
      <View style={styles.contentWrapper}>
        <View style={styles.card}>
          <Body>{questions[currentQuestionIdx]?.question}</Body>
          <View style={styles.answerWrapper}>
            <Button text="True" onPress={() => onQuestionAnswer(true)} />
            <Button text="False" onPress={() => onQuestionAnswer(false)} />
          </View>
        </View>
        <Body style={{ marginVertical: 10 }}>
          {currentQuestionIdx + 1}/{questions.length}
        </Body>
      </View>
    </ScreenContainer>
  );
};

export default Quiz;
