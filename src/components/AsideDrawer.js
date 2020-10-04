import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const StyledAsideDrawer = styled.div`
  position: fixed;
  top: 56;
  left: ${({isOpen}) => isOpen ? 0 : '-110%' };
  width: 100%;
  height: 100%;
  padding: 30px 10px;
  background: #282828;
  transition: left .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);
`
const AsideDrawer = () => {
  const { isDrawerOpen } = useSelector(({ uiReducer }) => uiReducer)
  return (
    <StyledAsideDrawer isOpen={isDrawerOpen}>
      hash tag!!
    </StyledAsideDrawer>
  )
}

export default AsideDrawer;