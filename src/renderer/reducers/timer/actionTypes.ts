import { TimeType } from './../../entity';

export enum TimerActionType {
  ShiftWaiting = 'SHIFT_WAITING_TIME',
  AddWaiting = 'ADD_WAITING_TIME',
  DeleteWaiting = 'DELETE_WAITING_TIME',
  Add = 'ADD_TIME',
  Delete = 'DELETE_TIME',
  Update = 'UPDATE_TIME',
  Select = 'SELECT_TIME',
}

export type Payload = {
  time: TimeType;
  selectIndex: number;
};

export type ShiftWaitingAction = {
  type: TimerActionType.ShiftWaiting;
};

export type AddWaitingAction = {
  type: TimerActionType.AddWaiting;
  payload: Pick<Payload, 'time'>;
};

export type DeleteWaitingAction = {
  type: TimerActionType.DeleteWaiting;
  payload: Pick<Payload, 'selectIndex'>;
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

export type Actions =
  | ShiftWaitingAction
  | AddWaitingAction
  | DeleteWaitingAction
  | AddAction
  | DeleteAction
  | UpdateAction
  | SelectAction;
