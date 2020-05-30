import * as React from 'react';

import { TabsType } from './types'; // eslint-disable-line no-unused-vars

interface IProps {
  tab: TabsType;
  onTab: (tab: TabsType) => void;
  selected: boolean;
}

export const Tab = (props: IProps) => {
  const onButton = () => {
    props.onTab(props.tab);
  };
  return (
    <button onClick={onButton} className={props.selected ? 'selected' : ''}>
      {props.tab}
    </button>
  );
};
