import Landing from '../ui/Landing';
import React, { useEffect } from 'react';
import MainHOC from '../MainHOC';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white dark:bg-gray-950">
      <Landing />
    </div>
  );
}

export default MainHOC(Home);
