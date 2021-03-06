import { QuestionsResponse } from '@api/types';
import { Button, Container, RequestStatusContent, Text, Title, ViewFlex } from '@components';
import { ChallengeContext } from '@contexts/challenge';
import useGetQuestions from '@hooks/api/query/useGetQuestions';
import { MainRoutes, ScreenComponent } from '@interfaces/navigation';
import { APP_DISPLAY_NAME } from '@utils/constants/app';
import React, { useCallback, useContext, useEffect } from 'react';

import styles from './styles';

const HomeScreen: ScreenComponent<MainRoutes.Home> = ({ navigation }) => {
  const { data, isLoading, isError, refetch } = useGetQuestions();
  const { updateQuestions } = useContext(ChallengeContext);

  useEffect(() => {
    // Update Challenge data if data response is defined (success scenario)
    data && updateQuestions(data.questions);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handlePress = useCallback(() => {
    navigation.navigate(MainRoutes.Challenge, {
      index: 0,
    });
  }, [navigation]);

  const renderContent = useCallback(
    (questionsResponse: QuestionsResponse) => (
      <ViewFlex style={styles.container}>
        <Title>{`Bienvenido al desafío de ${APP_DISPLAY_NAME}`}</Title>
        <Text>{`Son ${questionsResponse.questions.length} preguntas de opción múltiple`}</Text>
        <Text>Podes lograr el 100%?</Text>
        <Button title="INICIAR" onPress={handlePress} />
      </ViewFlex>
    ),
    [handlePress]
  );

  return (
    <Container>
      <RequestStatusContent
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        data={data}
        onReady={renderContent}
      />
    </Container>
  );
};

export default HomeScreen;
