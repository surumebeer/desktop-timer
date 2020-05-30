import * as React from 'react';

import { Tab } from './Tab';

import { TabsType } from './types'; // eslint-disable-line no-unused-vars

const tabs: TabsType[] = ['timer', 'interval', 'config'];

export const Tabs = () => {
  const [selectTab, setSelectTabsType] = React.useState<TabsType>(tabs[0]);

  const onTab = (tab: TabsType) => {
    setSelectTabsType(tab);
  };

  return (
    <React.Fragment>
      {tabs.map((x, i) => (
        <Tab
          tab={x}
          key={i}
          onTab={(tab) => onTab(tab)}
          selected={selectTab === x ? true : false}
        />
      ))}
    </React.Fragment>
  );
};
