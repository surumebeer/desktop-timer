import * as React from 'react';

import { TimeDisplay, InputTime, TimeList } from '../components/timer';

export const TimerContainer = () => {
  return (
    <div>
      <TimeDisplay />
      <InputTime />
      <TimeList />
    </div>
  );
};
