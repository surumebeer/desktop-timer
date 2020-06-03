import * as React from 'react';

import { TimeType } from './../../entity';
import { useTimerDispatch, TimerActionType } from '../../reducers';

import { useEditTime, initialTime } from './../../hooks';

const timeKey = Object.keys(initialTime) as Array<keyof TimeType>;

export const InputTime = () => {
  const [time, handleChange, resetTime] = useEditTime();
  const dispatch = useTimerDispatch();

  const handleAddButton = () => {
    dispatch({
      type: TimerActionType.Add,
      payload: {
        time: time,
      },
    });
    resetTime();
  };

  return (
    <div>
      {timeKey.map((x, i) => (
        <input
          type="number"
          value={time[x]}
          onChange={handleChange}
          name={x}
          key={i}
          max="59"
          min="0"
        />
      ))}
      <button onClick={handleAddButton}>add</button>
    </div>
  );
};
