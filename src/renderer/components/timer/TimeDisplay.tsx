import * as React from 'react';

import { useCountDown } from './../../hooks';

import { TimeType } from './types'; // eslint-disable-line no-unused-vars

const initialTime = {
  hour: 0,
  min: 10,
  sec: 10,
};

export const TimeDisplay = () => {
  const zeroPad = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  const [
    currentTime,
    countDownStart,
    countDownStop,
    countDownReset,
  ] = useCountDown(initialTime);

  const handleStart = () => {
    countDownStart();
  };

  const handleStop = () => {
    countDownStop();
  };

  const handleReset = () => {
    countDownReset();
  };

  return (
    <div>
      {zeroPad(currentTime.hour)}:{zeroPad(currentTime.min)}:
      {zeroPad(currentTime.sec)}
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
