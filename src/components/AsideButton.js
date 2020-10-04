import React from 'react';
import styled from '@emotion/styled';
import Button from '../commons/Button';
import menu from '../assets/menu.svg';
import { useDispatch } from 'react-redux';
import { drawerOpen } from '../module/ui.module';

const StyledAsideButton = styled(Button)`
  padding: 0 15px;
  background-color: transparent;
`

const StyledAsideImg = styled.img`
  width: 30px;
`

const AsideButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(drawerOpen());
  }

  return (
    <StyledAsideButton onClick={onClick}>
      <StyledAsideImg src={menu} />
    </StyledAsideButton>
  )
};

export default AsideButton;