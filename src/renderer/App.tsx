import * as React from 'react';
import { Tabs } from './components/tabs';
import { TimerContainer } from './container/TimerContainer';

import { TabProvider, TimerProvider } from './reducers';

export const App = () => {
  return (
    <div>
      <TabProvider>
        <Tabs />
      </TabProvider>
      <TimerProvider>
        <TimerContainer />
      </TimerProvider>
    </div>
  );
};
