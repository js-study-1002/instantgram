/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

export default function Header() {
  return <StyledHeader></StyledHeader>;
}

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: red;
`;
