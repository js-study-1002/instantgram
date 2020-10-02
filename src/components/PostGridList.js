import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

const StyledPostGridList = styled.section`
  display: grid;
  width: 1000px;
  margin: 0 auto;
  grid-template-columns: 300px 300px 300px;
  column-gap: 50px;
  row-gap: 50px;
  margin-top: 40px;
  cursor: pointer;

  & > img {
    width: 300px;
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
