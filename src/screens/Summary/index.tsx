import { ScrollView } from 'react-native';
import React, { ReactElement, useCallback, useContext } from 'react';
import { MainRoutes, ScreenComponent } from '@interfaces/navigation';
import { Button, Container, SummaryRow, Title } from '@components';
import styles from './styles';
import { ChallengeContext } from '@contexts/challenge';

interface Summary {
  text: string;
  isCorrect: boolean;
}

const SummaryScreen: ScreenComponent<MainRoutes.Summary> = ({ navigation }) => {
  const { answers, clearAnswers } = useContext(ChallengeContext);

  const handlePlayPress = useCallback(() => {
    clearAnswers();
    navigation.popToTop();
  }, [clearAnswers, navigation]);

  const renderContent = useCallback((): ReactElement => {
    const { points, summary } = answers.reduce<{ points: number; summary: Summary[] }>(
      (prev, current) => {
        const isCorrect: boolean = current.answer === current.correctAnswer;
        if (isCorrect) prev.points = prev.points + 1;

        prev.summary.push({
          text: current.text,
          isCorrect,
        });

        return prev;
      },
      { points: 0, summary: [] }
    );

    return (
      <>
        <Title style={styles.title}>{`Lograste ${points}/${summary.length}`}</Title>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.summaryResult}>
          {summary.map((row, i) => (
            <SummaryRow key={i} isCorrect={row.isCorrect} challengeText={row.text} style={styles.summaryRow} />
          ))}
        </ScrollView>
        <Button title="Jugar otra vez?" onPress={handlePlayPress} />
      </>
    );
  }, [answers, handlePlayPress]);

  return <Container>{renderContent()}</Container>;
};

export default SummaryScreen;
