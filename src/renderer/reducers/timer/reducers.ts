import { TimeType } from '../../entity';
import {
  TimerActionType,
  Actions,
  AddAction,
  DeleteAction,
  SelectAction,
  UpdateAction,
} from './actionTypes';

export type State = {
  times: TimeType[];
  selectIndex: number;
};

export const initialState: State = {
  times: [
    {
      hour: 0,
      min: 0,
      sec: 0,
    },
  ],
  selectIndex: 0,
};

export const reducers = (state: State, action: Actions) => {
  switch (action.type) {
    case TimerActionType.Add:
      return addReducer(state, action.payload);
    case TimerActionType.Delete:
      return deleteReducer(state, action.payload);
    case TimerActionType.Update:
      return updateReducer(state, action.payload);
    case TimerActionType.Select:
      return selectReducer(state, action.payload);
    default:
      return state;
  }
};

const addReducer = (state: State, payload: AddAction['payload']) => {
  return {
    ...state,
    times: [...state.times, payload.time],
  };
};

const deleteReducer = (state: State, payload: DeleteAction['payload']) => {
  return {
    ...state,
    times: state.times.filter((x, i) => i !== payload.index),
  };
};

const updateReducer = (state: State, payload: UpdateAction['payload']) => {
  return {
    ...state,
    times: state.times.map((x, i) => {
      return i === payload.index ? payload.time : x;
    }),
  };
};

const selectReducer = (state: State, payload: SelectAction['payload']) => {
  return {
    ...state,
    selectIndex: payload.index,
  };
};
