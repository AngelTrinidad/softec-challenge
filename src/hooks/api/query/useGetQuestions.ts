import { getQuestions } from '@api';
import { QuestionsResponse } from '@api/types';
import { useQuery } from 'react-query';

import { QueryKey, QueryOptions } from '../types';

export default function useGetQuestions(options?: QueryOptions<QuestionsResponse>) {
  return useQuery(QueryKey.GetQuestions, getQuestions, options);
}
