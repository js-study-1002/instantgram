import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { requestFeeds } from './modules/api.module';

function App() {
  const dispatch = useDispatch();
  const store = useSelector(({apiReducer}) => ({apiReducer}));
  console.log(store);
  useEffect(() => {
    dispatch(requestFeeds(1313));
    // console.log(store);
  }, []);
  return <div></div>;
}

export default App;
