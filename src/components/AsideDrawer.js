import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

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

const Menu = styled.li`
  width: auto;
  margin-left: 16px;
  cursor: pointer;
  & + & {
    margin-top: 12px;
  }
`;

const AsideDrawer = () => {
  const { isDrawerOpen } = useSelector(({ ui }) => ui);
  const { list } = useSelector(({ friend }) => friend);

  const handleClickFriend = useCallback(() => {}, [list]);

  return (
    <StyledAsideDrawer isOpen={isDrawerOpen}>
      <Group>
        <p>친구</p>
        {list.map((friend) => (
          <Menu
            key={friend.username}
            onClick={() => handleClickFriend(friend.token)}
          >
            {friend.username}
          </Menu>
        ))}
      </Group>
    </StyledAsideDrawer>
  );
};

export default AsideDrawer;
