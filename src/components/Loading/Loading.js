import React from 'react';

import styled from '@emotion/styled';

const StyledLoading = styled.svg`
  width: 54px;
  height: 54px;
  animation: loading-spin 3s infinite;

  & > circle {
    stroke: #888888;
    stroke-width: 4;
    stroke-dasharray: 157;
    stroke-dashoffset: -157;
    fill: transparent;
    animation: loading-circle-ani 1s infinite;
  }

  @keyframes loading-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading-circle-ani {
    0% {
      stroke-dashoffset: 157;
    }
    75% {
      stroke-dashoffset: -147;
    }
    100% {
      stroke-dashoffset: -157;
    }
  }
`;

const Loading = () => (
  <StyledLoading>
    <circle cx="50%" cy="50%" r="25" />
  </StyledLoading>
);

export default Loading;
