import * as React from 'react';
import { Tabs } from './components/tabs';
import { TimerContainer } from './container/TimerContainer';

export const App = () => {
  return (
    <div>
      <Tabs />
      <div>
        <TimerContainer />
      </div>
    </div>
  );
};
