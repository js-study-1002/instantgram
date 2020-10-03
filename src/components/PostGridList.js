import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

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
  const { feeds } = useSelector(({ reducer }) => reducer);

  const onClickPostImage = (postUrl) => () => {
    window.open(postUrl, '_blank');
  };

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
