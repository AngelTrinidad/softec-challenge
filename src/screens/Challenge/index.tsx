import { AnswerOption, Container, Text, Title, ViewFlex } from '@components';
import { ChallengeContext } from '@contexts/challenge';
import { MainRoutes, ScreenComponent } from '@interfaces/navigation';
import { APP_DISPLAY_NAME } from '@utils/constants/app';
import React, { useCallback, useContext } from 'react';
import { View } from 'react-native';

import styles from './styles';

const ChallengeScreen: ScreenComponent<MainRoutes.Challenge> = ({ navigation, route }) => {
  const questionIndex = route.params.index;
  const { questions, addAnswer } = useContext(ChallengeContext);

  const handleOptionPress = useCallback(
    (answer: number) => {
      // Add new answer
      addAnswer({ question: questions[questionIndex], answer });

      if (questionIndex + 1 === questions.length) {
        // Scenario when the user resonse the last question, go to summary
        navigation.navigate(MainRoutes.Summary);
        return;
      }

      // Navigate to next question
      navigation.push(MainRoutes.Challenge, {
        index: questionIndex + 1,
      });
    },
    [navigation, questions, questionIndex, addAnswer]
  );

  return (
    <Container>
      <Title>{APP_DISPLAY_NAME}</Title>
      {questions[questionIndex] && (
        <>
          <ViewFlex style={styles.challengeContainer}>
            <Text style={styles.challenge}>{questions[questionIndex].text}</Text>
          </ViewFlex>
          <View style={styles.answersContainer}>
            {questions[questionIndex].answers.map((answer) => (
              <AnswerOption
                key={answer.number}
                value={answer}
                onPress={handleOptionPress}
                style={styles.answerOption}
              />
            ))}
          </View>
          <Text style={styles.footer}>{questionIndex + 1} de 10</Text>
        </>
      )}
    </Container>
  );
};

export default ChallengeScreen;
