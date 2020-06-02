import * as React from 'react';

type TimeType = {
  hour: number;
  min: number;
  sec: number;
};

type FlgType = 'isWaiting' | 'isStarting' | 'isStopping';

export function useCountDown(
  time: TimeType
): [TimeType, number, FlgType, () => void, () => void, () => void] {
  const [initialTime, setInitialTime] = React.useState<TimeType>(time);
  const [currentTime, setCurrentTime] = React.useState<TimeType>(time);
  const [percent, setPercent] = React.useState(100);
  const [intervalId, setIntervalId] = React.useState(0);
  const [countDownFlg, setCountDownFlg] = React.useState<FlgType>('isWaiting');

  const refInitialTime = React.useRef(0);
  const refCountTime = React.useRef(0);

  React.useEffect(() => {
    setInitialTime(time);
    setCurrentTime(time);
    refInitialTime.current = calcTime(time);
    console.log(time);
  }, [time]);

  const resetDisplayTime = () => {
    setCurrentTime(initialTime);
  };

  const calcTime = (calcTime: TimeType) => {
    const hour = Number(calcTime.hour) * 60 * 60;
    const min = Number(calcTime.min) * 60;
    const sec = Number(calcTime.sec);
    return hour + min + sec;
  };

  const calcPercent = () => {
    setPercent(
      Math.floor((refCountTime.current / calcTime(initialTime)) * 100)
    );
  };

  const updateTime = () => {
    refCountTime.current = refCountTime.current - 1;
    calcPercent();
    setCurrentTime({
      hour: Math.floor(refCountTime.current / 60 / 60),
      min: Math.floor((refCountTime.current / 60) % 60),
      sec: Math.floor(refCountTime.current % 60),
    });
  };

  const setTimerInterval = () => {
    const id = window.setInterval(() => {
      if (refCountTime.current < 1) {
        resetDisplayTime();
        setCountDownFlg('isWaiting');
        clearInterval(id);
        return false;
      }
      updateTime();
    }, 1000);
    setIntervalId(id);
  };

  const startCountDown = () => {
    refCountTime.current = calcTime(currentTime);
    setTimerInterval();
    setCountDownFlg('isStarting');
  };

  const stopCountDown = () => {
    clearInterval(intervalId);
    setCountDownFlg('isStopping');
  };

  const resetCountDown = () => {
    clearInterval(intervalId);
    resetDisplayTime();
    setCountDownFlg('isWaiting');
  };

  return [
    currentTime,
    percent,
    countDownFlg,
    startCountDown,
    stopCountDown,
    resetCountDown,
  ];
}
