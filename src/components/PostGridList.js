import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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
  const { feeds } = useSelector(({ reducer }) => reducer);

  const onClickPostImage = (postUrl) => () => {
    window.open(postUrl, '_blank');
  };

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
    </StyledPostGridList>
  );
};

export default PostGridList;
