import * as React from 'react';
import { useTimerDispatch, TimerActionType } from './../../reducers';
import { TimeType } from './../../entity'; // eslint-disable-line no-unused-vars
import { zeroPad } from './../../util';

type Props = {
  times: TimeType[];
  selectIndex: number;
};

export const TimeList = (props: Props) => {
  const dispatch = useTimerDispatch();

  const handleSelect = (index: number) => {
    dispatch({
      type: TimerActionType.Select,
      payload: {
        index: index,
      },
    });
  };

  const handleDelete = (index: number) => {
    dispatch({
      type: TimerActionType.Delete,
      payload: {
        index: index,
      },
    });
  };

  return (
    <ul>
      {props.times.length === null ? (
        <></>
      ) : (
        props.times.map((x, i) => (
          <li
            key={i}
            onClick={() => handleSelect(i)}
            className={props.selectIndex === i ? 'selected' : ''}
          >
            <p>
              {zeroPad(x.hour)}: {zeroPad(x.min)}: {zeroPad(x.sec)}
            </p>
            <button onClick={() => handleDelete(i)}>delete</button>
          </li>
        ))
      )}
    </ul>
  );
};
