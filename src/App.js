import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PostGridList from './components/PostGridList';
import { feedsRequest } from './module/feed.module';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feedsRequest());
  }, [dispatch]);

  return (
    <div className="App">
      <PostGridList />
    </div>
  );
};

export default App;
