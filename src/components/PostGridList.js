import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { feedsMoreRequest } from '../module/feed.module';

const StyledPostGridList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4px;
  row-gap: 4px;
  cursor: pointer;

  & > img {
    width: calc((100vw - 4px) / 2);
  }
`;

const PostGridList = () => {
  const dispatch = useDispatch();
  const lastRequestNextUrl = useRef(null);
  const { feeds, next } = useSelector(({ reducer }) => reducer);

  const onClickPostImage = (postUrl) => () => {
    window.open(postUrl, '_blank');
  };

  const onScroll = useCallback(() => {
    const { clientHeight, scrollHeight } = document.documentElement;
    if (
      lastRequestNextUrl.current !== next &&
      window.scrollY + clientHeight > scrollHeight - 400
    ) {
      lastRequestNextUrl.current = next;
      dispatch(feedsMoreRequest(next));
    }
  }, [feeds, next]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <StyledPostGridList>
      {feeds.map((feed) => (
        <img
          key={feed.id}
          src={feed.media_url}
          alt="instagram post"
          onClick={onClickPostImage(feed.permalink)}
        />
      ))}
    </StyledPostGridList>
  );
};

export default PostGridList;
