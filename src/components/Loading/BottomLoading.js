import React from 'react';

import styled from '@emotion/styled';
import Loading from './Loading';

const StyledBottomLoading = styled.div`
  width: 100%;

  & > svg {
    display: block;
    margin: 0 auto;
    padding: 20px 0;
  }
`;

const BottomLoading = () => (
  <StyledBottomLoading>
    <Loading />
  </StyledBottomLoading>
);

export default BottomLoading;
