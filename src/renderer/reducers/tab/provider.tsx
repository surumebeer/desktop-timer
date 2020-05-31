import * as React from 'react';
import PropTypes from 'prop-types';

import { Actions, initialState, reducer } from './reducer';

type Context = React.Dispatch<Actions>;

const stateContext = React.createContext(initialState);

const dispatchContext = React.createContext<Context>(() => {});

type Props = {
  children: PropTypes.ReactElementLike;
};

export const TabProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        {props.children}
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useTabDispatch = () => {
  return React.useContext(dispatchContext);
};

export const useTabState = () => {
  const state = React.useContext(stateContext);
  return state;
};
