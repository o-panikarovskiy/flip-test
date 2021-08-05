import React, { useContext, useState } from 'react';
import { TasksContext } from 'store/context';

const TaskForm = () => {
  const { addTask } = useContext(TasksContext);
  const [value, setValue] = useState<string>('');

  const keyupHandler = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      addTask(value);
      setValue('');
    }
  };

  return (
    <input
      type='text'
      placeholder='Type something and press return'
      onKeyUp={keyupHandler}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default TaskForm;
