import * as React from 'react';
import { TimeItem } from './TimeItem';
import { TimeType } from './../../entity';

type Props = {
  times: TimeType[];
  selectIndex: number;
};

export const TimeList = (props: Props) => {
  return (
    <ul>
      {props.times.length === null ? (
        <></>
      ) : (
        props.times.map((x, i) => (
          <TimeItem
            key={i}
            itemIndex={i}
            time={x}
            selectIndex={props.selectIndex}
          />
        ))
      )}
    </ul>
  );
};
