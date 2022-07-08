import { QuestionsResponse } from '@api/types';

import { buildRequest } from './requestInstance';

export const getQuestions = () => {
  return buildRequest<QuestionsResponse>({
    url: '/preguntas.php',
    method: 'GET',
  });
};
