import * as React from 'react';

import { useCountDown } from './../../hooks';

const initialTime = {
  hour: 1,
  min: 0,
  sec: 10,
};

export const TimeDisplay = () => {
  const zeroPad = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  const [currentTime, percent, flg, start, stop, reset] = useCountDown(
    initialTime
  );

  const handleStart = () => {
    start();
  };

  const handleStop = () => {
    stop();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div>
      {zeroPad(currentTime.hour)}:{zeroPad(currentTime.min)}:
      {zeroPad(currentTime.sec)}
      {flg !== 'isStarting' ? (
        <button onClick={handleStart}>start</button>
      ) : (
        <></>
      )}
      {flg === 'isStarting' ? (
        <button onClick={handleStop}>stop</button>
      ) : (
        <></>
      )}
      {flg !== 'isWaiting' ? (
        <button onClick={handleReset}>reset</button>
      ) : (
        <></>
      )}
      <p>{percent}%</p>
    </div>
  );
};
