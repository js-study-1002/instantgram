/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { feedsRequest } from '../module/feed.module';

export default function Gallery() {
  const dispatch = useDispatch();
  const feeds = useSelector((state) => state.reducer.feeds);
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      dispatch(feedsRequest());
    }
  }, [dispatch, ref]);

  const handleClick = React.useCallback(
    (link) => {
      window.open(link, '_blank');
    },
    [dispatch],
  );

  return (
    <Container ref={ref}>
      <List>
        {feeds.map((feed) => (
          <Photo key={feed.id} onClick={() => handleClick(feed.permalink)}>
            <img src={feed.media_url} />
          </Photo>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.main``;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Photo = styled.li`
  width: 50vw;
  height: 50vw;
  img {
    width: 100%;
  }
`;
