import React from 'react';
import { Promotions } from './Promotion';

export const App = () => {
  const promotion = [
    { id: 1, title: 'wash dinner', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ];

  return (
    <div>
      <Promotions test={promotion} />
    </div>
  );
};
