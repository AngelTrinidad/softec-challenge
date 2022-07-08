import { UseMutationOptions, UseQueryOptions } from 'react-query';

export enum QueryKey {
  GetQuestions = 'query-get-questions',
}

export type QueryOptions<R> = Omit<UseQueryOptions<R, unknown, R, QueryKey>, 'queryKey' | 'queryFn'> | undefined;

export type MutationOptions<R, P> =
  | Omit<UseMutationOptions<R, unknown, P, unknown>, 'mutationFn' | 'mutationKey'>
  | undefined;
