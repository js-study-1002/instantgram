import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';

import { feedsRequest } from '../module/feed.module';
import { drawerOpen } from '../module/ui.module';

const StyledAsideDrawer = styled.div`
  position: fixed;
  top: 56;
  left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  width: 100%;
  height: 100%;
  padding: 30px 16px;
  box-sizing: border-box;
  background: #282828;
  transition: left 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
`;

const Group = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  color: white;

  p {
    font-size: 18px;
  }
`;

const GroupMenu = styled.li`
  width: auto;
  margin-left: 16px;
  cursor: pointer;
  & + & {
    margin-top: 12px;
  }
`;

const Menu = styled.button`
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 18px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const AsideDrawer = () => {
  const { isDrawerOpen } = useSelector(({ ui }) => ui);
  const { list } = useSelector(({ friend }) => friend);
  const dispatch = useDispatch();

  const handleClickFriend = useCallback(
    (token) => {
      dispatch(feedsRequest(token));
      dispatch(drawerOpen());
    },
    [dispatch],
  );

  return (
    <StyledAsideDrawer isOpen={isDrawerOpen}>
      <Menu onClick={() => handleClickFriend()}>나</Menu>
      <Group>
        <p>친구</p>
        {list.map((friend) => (
          <GroupMenu
            key={friend.username}
            onClick={() => handleClickFriend(friend.token)}
          >
            {friend.username}
          </GroupMenu>
        ))}
      </Group>
    </StyledAsideDrawer>
  );
};

export default AsideDrawer;
