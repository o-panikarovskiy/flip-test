import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { Task } from 'store/task';

type Props = {
  children?: ReactNode;
};

type TaskContextProvider = {
  readonly tasks: readonly Task[];
  readonly addTask: (title: string) => void;
  readonly deleteTask: (item: Task) => void;
  readonly toggleTask: (item: Task) => void;
};

export const TasksContext = createContext<TaskContextProvider>({} as TaskContextProvider);

export const Store = ({ children }: Props) => {
  const [tasks, setTasks] = useState<readonly Task[]>([]);

  const addTask = useCallback(
    (text: string) => {
      const title = text.trim();
      if (!title) return;
      setTasks([...tasks, { title, id: Math.random(), completed: false }]);
    },
    [tasks, setTasks]
  );

  const deleteTask = useCallback(
    (item: Task) => {
      setTasks(tasks.filter((i) => i !== item));
    },
    [tasks, setTasks]
  );

  const toggleTask = useCallback(
    (item: Task) => {
      setTasks(tasks.map((i) => (i !== item ? i : { ...i, completed: !i.completed })));
    },
    [tasks, setTasks]
  );

  const provider: TaskContextProvider = {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  };

  return <TasksContext.Provider value={provider}>{children}</TasksContext.Provider>;
};
