/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import AsideButton from './AsideButton';

export default function Header() {
  return <StyledHeader>
    <AsideButton />
  </StyledHeader>;
}

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: red;
`;
