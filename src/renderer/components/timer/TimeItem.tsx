import * as React from 'react';
import { useTimerDispatch, TimerActionType } from './../../reducers';
import { TimeType } from './../../entity';
import { zeroPad } from './../../util';
import { useEditTime, initialTime } from './../../hooks';

type Props = {
  itemIndex: number;
  time: TimeType;
  selectIndex: number;
};

const timeKey = Object.keys(initialTime) as Array<keyof TimeType>;

export const TimeItem = (props: Props) => {
  const dispatch = useTimerDispatch();
  const [isEdit, setIsEdit] = React.useState(false);
  const [editTime, handleChange] = useEditTime(props.time);

  const handleSelect = () => {
    dispatch({
      type: TimerActionType.Select,
      payload: {
        selectIndex: props.itemIndex,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: TimerActionType.Delete,
      payload: {
        selectIndex: props.itemIndex,
      },
    });
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleUpdate = () => {
    dispatch({
      type: TimerActionType.Update,
      payload: {
        time: editTime,
        selectIndex: props.itemIndex,
      },
    });
    setIsEdit(!isEdit);
  };

  return (
    <li
      onClick={handleSelect}
      className={props.selectIndex === props.itemIndex ? 'selected' : ''}
    >
      {isEdit ? (
        timeKey.map((x, i) => (
          <input
            type="number"
            value={editTime[x]}
            onChange={handleChange}
            name={x}
            key={i}
            max="59"
            min="0"
          />
        ))
      ) : (
        <p>
          {zeroPad(props.time.hour)}: {zeroPad(props.time.min)}:{' '}
          {zeroPad(props.time.sec)}
        </p>
      )}
      <button onClick={handleDelete}>delete</button>
      {isEdit ? (
        <button onClick={handleUpdate}>update</button>
      ) : (
        <button onClick={handleEdit}>edit</button>
      )}
    </li>
  );
};
