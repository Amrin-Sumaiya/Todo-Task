// ClickCountersPage.jsx
import React from 'react';
import ClickCounter1 from './ClickCounter1';
import ClickCounter2 from './ClickCounter2';

const ClickCountersPage = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <ClickCounter1 />
      <ClickCounter2 />
    </div>
  );
};

export default ClickCountersPage;

