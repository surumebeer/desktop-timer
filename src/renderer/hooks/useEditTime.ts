import * as React from 'react';

import { TimeType } from './../entity';

export const initialTime: TimeType = {
  hour: 0,
  min: 0,
  sec: 0,
};

export const useEditTime = (time: TimeType = initialTime) => {
  const [editTime, setEditTime] = React.useState<TimeType>(time);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTime({
      ...editTime,
      [e.target.name]: e.target.value,
    });
  };

  const resetTime = () => {
    setEditTime(initialTime);
  };

  return [editTime, handleChange, resetTime] as const;
};
