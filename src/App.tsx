import TasksWrap from 'components/tasks-wrap';
import React from 'react';
import { Store } from './store/context';

const App = () => {
  return (
    <Store>
      <TasksWrap />
    </Store>
  );
};

export default App;
