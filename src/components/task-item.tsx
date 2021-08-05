/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { TasksContext } from 'store/context';
import { Task } from 'store/task';

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const { deleteTask, toggleTask } = useContext(TasksContext);

  const removeHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    deleteTask(task);
  };

  return (
    <label>
      <input type='checkbox' onChange={() => toggleTask(task)} checked={task.completed} />
      <span>{task.title}</span>
      <a href='#' className='remove' onClick={removeHandler}>
        Remove
      </a>
    </label>
  );
};

export default TaskItem;
