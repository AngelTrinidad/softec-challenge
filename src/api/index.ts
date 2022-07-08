import { buildRequest } from './requestInstance';
import { QuestionsResponse } from '@api/types';

export const getQuestions = () => {
  return buildRequest<QuestionsResponse>({
    url: '/preguntas.php',
    method: 'GET',
  });
};
