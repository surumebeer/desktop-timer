import * as React from 'react';

import { TimeType } from './../../entity'; // eslint-disable-line no-unused-vars
import { useTimerDispatch, TimerActionType } from '../../reducers';

const initialTime: TimeType = {
  hour: 0,
  min: 0,
  sec: 0,
};

const timeKey = Object.keys(initialTime) as Array<keyof TimeType>;

export const InputTime = () => {
  const [time, setTime] = React.useState<TimeType>(initialTime);
  const dispatch = useTimerDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime({
      ...time,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddButton = () => {
    dispatch({
      type: TimerActionType.Add,
      payload: {
        time: time,
      },
    });
    setTime(initialTime);
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
