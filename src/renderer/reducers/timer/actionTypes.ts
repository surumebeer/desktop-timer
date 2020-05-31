import { TimeType } from './../../entity';

export enum TimerActionType {
  Add = 'ADD_TIME',
  Delete = 'DELETE_TIME',
  Update = 'UPDATE_TIME',
  Select = 'SELECT_TIME',
}

export type Payload = {
  time: TimeType;
  index: number;
};

export type AddAction = {
  type: TimerActionType.Add;
  payload: Pick<Payload, 'time'>;
};

export type DeleteAction = {
  type: TimerActionType.Delete;
  payload: Pick<Payload, 'index'>;
};

export type UpdateAction = {
  type: TimerActionType.Update;
  payload: Payload;
};

export type SelectAction = {
  type: TimerActionType.Select;
  payload: Pick<Payload, 'index'>;
};

export type Actions = AddAction | DeleteAction | UpdateAction | SelectAction;
