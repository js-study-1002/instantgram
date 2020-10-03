import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feedsRequest } from '../module/feed.module';

const Frame = styled.section`
  display: grid;
  & > a > img {
  }
`;

const Test = () => {
  const dispatch = useDispatch();
  const { feeds } = useSelector(({ reducer }) => reducer);
  const fields = [
    'id',
    'media_type',
    'media_url',
    'username',
    'timestamp',
    'permalink',
  ];
  useEffect(() => {
    if (feeds.length > 0) {
      console.log(feeds);
    }
  }, [feeds]);

  return (
    <div>
      <button onClick={() => dispatch(feedsRequest([...fields]))}>
        request
      </button>
      <Frame>
        {feeds && feeds.length > 0 ? (
          feeds.map((feed, i) => <Photo key={`img-${i}`} feed={feed} />)
        ) : (
          <div>no Media</div>
        )}
      </Frame>
    </div>
  );
};

const Photo = ({ feed }) => (
  <div>
    <a href={feed.permalink}>
      <img src={feed.media_url} />
    </a>
  </div>
);

export default Test;
