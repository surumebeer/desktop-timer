import * as React from 'react';

type TimeType = {
  hour: number;
  min: number;
  sec: number;
};

export function useCountDown(
  time: TimeType
): [TimeType, () => void, () => void, () => void] {
  const [initialTime, setInitialTime] = React.useState<TimeType>(time);
  const [currentTime, setCurrentTime] = React.useState<TimeType>(time);
  const [intervalId, setIntervalId] = React.useState(0);

  const refCountTime = React.useRef(0);

  React.useEffect(() => {
    setInitialTime(time);
    setCurrentTime(time);
  }, [time]);

  const resetDisplayTime = () => {
    setCurrentTime(initialTime);
  };

  const calcStartTime = () => {
    const hour = Number(currentTime.hour) * 60 * 60;
    const min = Number(currentTime.min) * 60;
    const sec = Number(currentTime.sec);
    return hour + min + sec;
  };

  const updateTime = () => {
    refCountTime.current = refCountTime.current - 1;
    setCurrentTime({
      hour: Math.floor(refCountTime.current / 60 / 60),
      min: Math.floor((refCountTime.current / 60) % 60),
      sec: Math.floor(refCountTime.current % 60),
    });
  };

  const countDownStart = () => {
    refCountTime.current = calcStartTime();
    const id = window.setInterval(() => {
      updateTime();
    }, 1000);
    setIntervalId(id);
  };

  const countDownStop = () => {
    clearInterval(intervalId);
  };

  const countDownReset = () => {
    clearInterval(intervalId);
    resetDisplayTime();
  };

  return [currentTime, countDownStart, countDownStop, countDownReset];
}
