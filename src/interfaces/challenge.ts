export interface ChallengeAnswer {
  number: number;
  text: string;
}

export interface Question {
  text: string;
  correctAnswer: number;
  answers: ChallengeAnswer[];
}

export interface ChallengeWithAnswer extends Question {
  answer?: number;
}
