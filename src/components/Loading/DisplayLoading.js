import React from 'react';

import styled from '@emotion/styled';
import Loading from './Loading';

const StyledDisplayLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

const DisplayLoading = () => (
  <StyledDisplayLoading>
    <Loading />
  </StyledDisplayLoading>
);

export default DisplayLoading;
