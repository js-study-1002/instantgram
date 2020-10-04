import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import PostGridList from './components/PostGridList';
import Header from './components/Header';
import AsideDrawer from './components/AsideDrawer';
import { feedsRequest } from './module/feed.module';

const App = () => {
  const dispatch = useDispatch();
  const { isDrawerOpen } = useSelector(({ uiReducer }) => uiReducer);
  
  useEffect(() => {
    dispatch(feedsRequest());
  }, [dispatch]);

  return (
    <Layout className="App">
      <Header />
      {isDrawerOpen && <AsideDrawer />}
      <PostGridList />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 56px 0 0 0;
`;

export default App;
