/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feedsRequest } from '../module/feed.module';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feedsRequest());
  }, [])

  const feeds = useSelector(state => state.feedReducer.feeds)

  const onClick = (link) => {
    window.open(link, '_blank')
  };

  console.log(feeds);
  return (
    <Gallery>
      {/* <button onClick={onClick}>test</button> */}
      {feeds && feeds.map(feed => <img onClick={() => onClick(feed.permalink)} src={feed.media_url} />)}
    </Gallery>
  );
};

export default Main;

const Gallery = styled.ol`
  img {
    width: 200px
  }
`;