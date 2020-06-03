import { TimeType } from './../../entity';

export enum TimerActionType {
  Add = 'ADD_TIME',
  Delete = 'DELETE_TIME',
  Update = 'UPDATE_TIME',
  Select = 'SELECT_TIME',
}

export type Payload = {
  time: TimeType;
  selectIndex: number;
};

export type AddAction = {
  type: TimerActionType.Add;
  payload: Pick<Payload, 'time'>;
};

export type DeleteAction = {
  type: TimerActionType.Delete;
  payload: Pick<Payload, 'selectIndex'>;
};

export type UpdateAction = {
  type: TimerActionType.Update;
  payload: Payload;
};

export type SelectAction = {
  type: TimerActionType.Select;
  payload: Pick<Payload, 'selectIndex'>;
};

export type Actions = AddAction | DeleteAction | UpdateAction | SelectAction;
