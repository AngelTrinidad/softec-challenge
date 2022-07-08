import { Question } from '@interfaces/challenge';
import { ChallengeState } from './ChallengeProvider';

type ActionType =
  | { type: 'SET_QUESTIONS'; payload: Question[] }
  | { type: 'ADD_ANSWER'; payload: { question: Question; answer: number } }
  | { type: 'CLEAR_ANSWERS' };

export const challengeReducer = (state: ChallengeState, action: ActionType): ChallengeState => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
      };
    case 'ADD_ANSWER':
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            ...action.payload.question,
            answer: action.payload.answer,
          },
        ],
        currentIndex: state.currentIndex + 1,
      };
    case 'CLEAR_ANSWERS':
      return {
        ...state,
        answers: [],
        currentIndex: 0,
      };
    default:
      return state;
  }
};
