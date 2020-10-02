import React from 'react';
import { useDispatch } from 'react-redux';
import { feedsRequest } from '../module/feed.module';

const Test = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(feedsRequest());
  };

  return (
    <>
      <button onClick={onClick}>test</button>
    </>
  );
};

export default Test;
