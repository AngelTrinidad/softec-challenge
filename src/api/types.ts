import { Question } from '@interfaces/challenge';
import { AxiosRequestConfig } from 'axios';

export interface RequestConfig extends AxiosRequestConfig {}

export type QuestionsResponse = {
  questions: Question[];
};
