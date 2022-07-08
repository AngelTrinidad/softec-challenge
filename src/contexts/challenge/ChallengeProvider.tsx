import { ChallengeWithAnswer, Question } from '@interfaces/challenge';
import React, { createContext, FC, ReactNode, useCallback, useMemo, useReducer } from 'react';

import { challengeReducer } from './ChallengeReducer';

export interface ChallengeState {
  questions: Question[];
  answers: ChallengeWithAnswer[];
  currentIndex: number;
}

export interface ChallengeContextValue extends ChallengeState {
  updateQuestions: (payload: Question[]) => void;
  addAnswer: (payload: { question: Question; answer: number }) => void;
  clearAnswers: () => void;
}

const INITIAL_STATE: ChallengeState = {
  questions: [],
  answers: [],
  currentIndex: 0,
};

export const ChallengeContext = createContext({} as ChallengeContextValue);

export const ChallengeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(challengeReducer, INITIAL_STATE);

  const updateQuestions = useCallback(
    (payload: Question[]) => {
      dispatch({ type: 'SET_QUESTIONS', payload });
    },
    [dispatch]
  );

  const addAnswer = useCallback(
    (payload: { question: Question; answer: number }) => {
      dispatch({ type: 'ADD_ANSWER', payload });
    },
    [dispatch]
  );

  const clearAnswers = useCallback(() => {
    dispatch({ type: 'CLEAR_ANSWERS' });
  }, [dispatch]);

  /**
   * Memorize values to provide
   */
  const valuesProvider = useMemo(
    () => ({ ...state, updateQuestions, addAnswer, clearAnswers }),
    [state, updateQuestions, addAnswer, clearAnswers]
  );

  return <ChallengeContext.Provider value={valuesProvider}>{children}</ChallengeContext.Provider>;
};
