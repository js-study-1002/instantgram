import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: #dd2a7b;
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(120%);
  }
`;

const Button = ({ children, onClick, className }) => (
  <StyledButton onClick={onClick} className={className}>{children}</StyledButton>
);

export default Button;
