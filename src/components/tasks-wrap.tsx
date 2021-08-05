import TaskForm from 'components/form';
import TasksList from 'components/tasks-list';
import React, { useContext } from 'react';
import { TasksContext } from 'store/context';
import { Task } from 'store/task';

const TasksWrap = () => {
  const { tasks } = useContext(TasksContext);

  const [todos, completed] = tasks.reduce(
    (acc, task) => {
      const idx = task.completed ? 1 : 0;
      acc[idx].push(task);
      return acc;
    },
    [[], []] as readonly Task[][]
  );

  return (
    <>
      <h2>To do: ({todos.length})</h2>
      <TaskForm />
      <TasksList list={todos} />
      <hr />
      <h2>Completed items: ({completed.length})</h2>
      <TasksList list={completed} />
    </>
  );
};

export default TasksWrap;
