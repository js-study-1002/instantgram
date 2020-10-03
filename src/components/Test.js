import React from 'react';
import { useDispatch } from 'react-redux';
import { feedsRequest } from '../module/feed.module';

const Test = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    const result = dispatch(feedsRequest());
    console.log('여기', result)
  };

  return (
    <>
      <button onClick={onClick}>test</button>
    </>
  );
};

export default Test;
