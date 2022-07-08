import React, { useCallback, useContext } from 'react';
import { MainRoutes, ScreenComponent } from '@interfaces/navigation';
import { AnswerOption, Container, Text, Title, ViewFlex } from '@components';
import { APP_DISPLAY_NAME } from '@utils/constants/app';
import { View } from 'react-native';
import styles from './styles';
import { ChallengeContext } from '@contexts/challenge';

const ChallengeScreen: ScreenComponent<MainRoutes.Challenge> = ({ navigation }) => {
  const { questions, currentIndex, addAnswer } = useContext(ChallengeContext);

  const handleOptionPress = useCallback(
    (answer: number) => {
      // Add new answer
      addAnswer({ question: questions[currentIndex], answer });

      if (currentIndex + 1 === questions.length) {
        // Scenario when the user resonse the last question, go to summary
        navigation.navigate(MainRoutes.Summary);
        return;
      }

      // Navigate to next question
      navigation.push(MainRoutes.Challenge);
    },
    [navigation, questions, currentIndex, addAnswer]
  );

  return (
    <Container>
      <Title>{APP_DISPLAY_NAME}</Title>
      {questions[currentIndex] && (
        <>
          <ViewFlex style={styles.challengeContainer}>
            <Text style={styles.challenge}>{questions[currentIndex].text}</Text>
          </ViewFlex>
          <View style={styles.answersContainer}>
            {questions[currentIndex].answers.map((answer) => (
              <AnswerOption
                key={answer.number}
                value={answer}
                onPress={handleOptionPress}
                style={styles.answerOption}
              />
            ))}
          </View>
          <Text style={styles.footer}>{currentIndex + 1} de 10</Text>
        </>
      )}
    </Container>
  );
};

export default ChallengeScreen;
