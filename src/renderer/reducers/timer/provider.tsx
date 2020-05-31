import * as React from 'react';
import PropTypes from 'prop-types';

import { Actions } from './actionTypes';

import { initialState, reducers } from './reducers';

type Context = React.Dispatch<Actions>;

const stateContext = React.createContext(initialState);

const dispatchContext = React.createContext<Context>(() => {});

type Props = {
  children: PropTypes.ReactElementLike;
};

export const TimerProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducers, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        {props.children}
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useTimerDispatch = () => {
  return React.useContext(dispatchContext);
};

export const useTimerState = () => {
  const state = React.useContext(stateContext);
  return state;
};
