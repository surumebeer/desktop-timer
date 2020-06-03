import * as React from 'react';
import {
  useTimerState,
  useTimerDispatch,
  TimerActionType,
} from './../../reducers';

export const TimeWaitingList = () => {
  const state = useTimerState();
  const dispatch = useTimerDispatch();

  const handleDelete = (index: number) => {
    dispatch({
      type: TimerActionType.DeleteWaiting,
      payload: {
        selectIndex: index,
      },
    });
  };

  return (
    <ul>
      {state.waitingTimes.map((x, i) => (
        <li key={i}>
          {x.hour}:{x.min}:{x.sec}
          <button onClick={() => handleDelete(i)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
