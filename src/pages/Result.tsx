import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { Heading, Button, ScreenContainer } from "../components";
import {
  FlatList,
  ListRenderItemInfo,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { useQuiz, Question } from "../hooks/useQuiz";
const styles = StyleSheet.create({
  questionAnswerWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "auto",
  },

  resultListWrapper: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginVertical: 8,
    marginHorizontal: 12,
  },

  answerButton: {
    marginVertical: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.4)",
    borderRadius: 8,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  correctAnswer: {
    borderColor: "green",
    borderWidth: 2,
  },
  incorrectAnswer: {
    borderColor: "red",
    borderWidth: 2,
  },
});

const Result: React.FC = () => {
  const navigation = useNavigation();
  const { score, questions, resetScore } = useQuiz();

  const handlePlayAgain = () => {
    resetScore();
    navigation.navigate("Home");
  };

  const ResultList = ({ item, index }: ListRenderItemInfo<Question>) => {
    return (
      <View style={styles.resultListWrapper}>
        <Text>{item.question}</Text>

        <View style={styles.questionAnswerWrapper}>
          <View
            style={[
              styles.answerButton,
              score[index].answer
                ? score[index].answer === score[index].correct_answer
                  ? styles.correctAnswer
                  : styles.incorrectAnswer
                : [],
            ]}
          >
            <Text>True</Text>
          </View>
          <View
            style={[
              styles.answerButton,
              !score[index].answer
                ? score[index].answer === score[index].correct_answer
                  ? styles.correctAnswer
                  : styles.incorrectAnswer
                : [],
            ]}
          >
            <Text>False</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScreenContainer>
      <Heading>You scored</Heading>
      <Heading>
        {score.filter((el) => el.answer === el.correct_answer).length}/
        {score.length}
      </Heading>
      <FlatList
        data={questions}
        keyExtractor={(item) => item.question}
        renderItem={ResultList}
      />
      <Button text="Play Again" onPress={handlePlayAgain} />
    </ScreenContainer>
  );
};

export default Result;
