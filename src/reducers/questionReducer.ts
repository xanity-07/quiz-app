import type { Question } from '@/types';
interface State {
  questions: Question[];
  status: 'loading' | 'ready' | 'active' | 'finished' | 'error';
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secconds: number | null;
}
const SECS_PER_QUESTION = 10;
type Actions =
  | {
      type: 'dataRecieved';
      payload: Question[];
    }
  | {
      type: 'dataFailed';
    }
  | {
      type: 'start';
    }
  | {
      type: 'newAnswer';
      payload: number | null;
    }
  | {
      type: 'nextQuestion';
    }
  | {
      type: 'finished';
    }
  | {
      type: 'reset';
    }
  | {
      type: 'ticking';
    };

export const initialState: State = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secconds: null,
};

export const questionReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    case 'start':
      return {
        ...state,
        status: 'active',
        index: 0,
        answer: null,
        points: 0,
        secconds: state.questions.length * SECS_PER_QUESTION,
      };

    case 'newAnswer': {
      const question = state.questions[state.index];
      if (!question) return state;

      const isCorrect = question.correctOption === action.payload;

      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
      };
    }
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finished':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case 'reset':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };
    case 'ticking': {
      if (state.secconds === null || state.secconds <= 0) return state;
      const newSeccond = state.secconds - 1;
      const isFinished = newSeccond === 0;

      return {
        ...state,
        secconds: newSeccond,
        status: isFinished ? 'finished' : state.status,
      };
    }

    default:
      return { ...state };
  }
};
