import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import PostGridList from './components/PostGridList';
import Header from './components/Header';
import AsideDrawer from './components/AsideDrawer';
import { feedsRequest } from './module/feed.module';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(feedsRequest());
  }, [dispatch]);

  return (
    <Layout className="App">
      <Header />
      <AsideDrawer />
      <PostGridList />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 56px 0 0 0;
`;

export default App;
