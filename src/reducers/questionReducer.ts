import type { Question } from '@/types';

interface State {
  questions: Question[];
  status: 'loading' | 'ready' | 'active' | 'finished' | 'error';
}

type Actions =
  | {
      type: 'dataRecieved';
      payload: Question[];
    }
  | {
      type: 'dataFailed';
    };

export const initialState: State = {
  questions: [],
  status: 'loading',
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

    default:
      return { ...state };
  }
};
