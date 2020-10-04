import React from 'react';
import styled from '@emotion/styled';
import AsideButton from './AsideButton';

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

const Header = () => {
  return (
    <StyledHeader>
      <AsideButton />
    </StyledHeader>
  );
}

export default Header;