import * as React from 'react';

import { TimeType } from './types'; // eslint-disable-line no-unused-vars

const initialTime: TimeType = {
  hour: 0,
  min: 0,
  sec: 0,
};

const timeKey = Object.keys(initialTime) as Array<keyof TimeType>;

export const InputTime = () => {
  const [time, setTime] = React.useState<TimeType>(initialTime);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime({
      ...time,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddButton = () => {};

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
