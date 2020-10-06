import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import Button from '../commons/Button';
import Icon, { types, sizes } from './Icon';
import { drawerOpen } from '../module/ui.module';

const StyledAsideButton = styled(Button)`
  padding: 0 15px;
  background-color: transparent;
  color: #555;
`;

const AsideButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(drawerOpen());
  };

  return (
    <StyledAsideButton onClick={onClick}>
      <Icon icon={types.menu} size={sizes.Huge} />
    </StyledAsideButton>
  );
};

export default AsideButton;
