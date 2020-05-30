import * as React from 'react';

import { TimeType } from './types'; // eslint-disable-line no-unused-vars

const initialTimeList: TimeType[] = [
  {
    hour: 0,
    min: 0,
    sec: 0,
  },
];

export const TimeList = () => {
  const [timeList, setTimeList] = React.useState<TimeType[]>(initialTimeList); // eslint-disable-line

  const zeroPad = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  const handleStart = (x: TimeType) => {
    console.log(x);
  };

  const handleDelete = (index: number) => {
    const newList = timeList.filter((x, i) => i !== index);
    setTimeList(newList);
  };

  return (
    <ul>
      {timeList.length === null ? (
        <></>
      ) : (
        timeList.map((x, i) => (
          <li key={i}>
            <p>
              {zeroPad(x.hour)}: {zeroPad(x.min)}: {zeroPad(x.sec)}
            </p>
            <button onClick={() => handleStart(x)}>start</button>
            <button onClick={() => handleDelete(i)}>delete</button>
          </li>
        ))
      )}
    </ul>
  );
};
