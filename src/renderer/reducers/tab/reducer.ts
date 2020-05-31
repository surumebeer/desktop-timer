import { TabType } from './../../entity';

export type State = {
  tab: TabType;
};

export const initialState: State = {
  tab: 'timer',
};

export type Actions = {
  type: 'setTab';
  payload: {
    tab: TabType;
  };
};

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'setTab':
      return {
        ...state,
        tab: action.payload.tab,
      };
    default:
      return state;
  }
};
