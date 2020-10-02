import React from 'react';
import { useDispatch } from 'react-redux';

import Button from './commons/Button';
import PostGridList from './components/PostGridList';
import { feedsRequest } from './module/feed.module';

const App = () => {
  const dispatch = useDispatch();
  const onClickRequestInstagramData = () => {
    dispatch(feedsRequest());
  };

  return (
    <div className="App">
      <Button onClick={onClickRequestInstagramData}>이미지 요청</Button>
      <PostGridList />
    </div>
  );
};

export default App;
