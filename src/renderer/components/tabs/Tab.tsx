import * as React from 'react';

import { TabType } from './../../entity'; // eslint-disable-line no-unused-vars

interface IProps {
  tab: TabType;
  onTab: (tab: TabType) => void;
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
