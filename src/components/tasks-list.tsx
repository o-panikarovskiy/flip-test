import TaskItem from 'components/task-item';
import React from 'react';
import { Task } from 'store/task';

type Props = {
  list: readonly Task[];
};

const TasksList = ({ list }: Props) => {
  return (
    <ol>
      {list.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ol>
  );
};

export default TasksList;
