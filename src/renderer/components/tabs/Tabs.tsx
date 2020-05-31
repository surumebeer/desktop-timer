import * as React from 'react';

import { Tab } from './Tab';

import { TabType } from './../../entity';

import { useTabState, useTabDispatch } from './../../reducers';

const tabs: TabType[] = ['timer', 'interval', 'config'];

export const Tabs = () => {
  const state = useTabState();
  const dispatch = useTabDispatch();

  const onTab = (tab: TabType) => {
    dispatch({
      type: 'setTab',
      payload: {
        tab: tab,
      },
    });
  };

  return (
    <React.Fragment>
      {tabs.map((x, i) => (
        <Tab
          tab={x}
          key={i}
          onTab={(tab) => onTab(tab)}
          selected={state.tab === x ? true : false}
        />
      ))}
    </React.Fragment>
  );
};
