import * as React from 'react';

import { useCountDown } from './../../hooks';

import { TimeType } from './../../entity';

import { zeroPad } from './../../util';

type Props = {
  selectTime: TimeType;
};

export const TimeDisplay = (props: Props) => {
  const [currentTime, percent, flg, start, stop, reset] = useCountDown(
    props.selectTime
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
