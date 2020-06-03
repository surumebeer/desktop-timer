import * as React from 'react';

import {
  TimeDisplay,
  InputTime,
  TimeList,
  TimeWaitingList,
} from '../components/timer';

import { useTimerState } from './../reducers/timer';

export const TimerContainer = () => {
  const state = useTimerState();
  //const dispatch = () => useTimerDispatch;

  return (
    <div>
      <TimeDisplay selectTime={state.times[state.selectIndex]} />
      <TimeWaitingList />
      <InputTime />
      <TimeList times={state.times} selectIndex={state.selectIndex} />
    </div>
  );
};
