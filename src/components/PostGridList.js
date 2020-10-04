import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { feedsMoreRequest } from '../module/feed.module';
import BottomLoading from './Loading/BottomLoading';

const StyledPostGridList = styled.section`
  font-size: 0;

  & > div {
    max-width: 1028px;
    margin: 0 auto;
  }
`;

const PostCard = styled.article`
  width: 100%;
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const PostGridList = () => {
  const dispatch = useDispatch();
  const lastRequestNextUrl = useRef(null);
  const { feeds, next, feedsLoading } = useSelector(({ reducer }) => reducer);

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
  }, [next, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <StyledPostGridList>
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 768: 3 }}>
        <Masonry gutter="4px">
          {feeds.map((feed) => (
            <PostCard key={feed.id}>
              <img
                key={feed.id}
                src={feed.media_url}
                alt="instagram post"
                onClick={onClickPostImage(feed.permalink)}
              />
            </PostCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {feeds.length && feedsLoading && <BottomLoading />}
    </StyledPostGridList>
  );
};

export default PostGridList;
