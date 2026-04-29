import React, { forwardRef } from 'react';

const Page = forwardRef(({ children, number }, ref) => {
  return (
    <div
      className="demoPage w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden"
      ref={ref}
      data-density={number === 1 || number === 10 ? 'hard' : 'soft'}
    >
      {children}
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
