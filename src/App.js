import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootStore, { saga } from './module';
import Button from './commons/Button';

import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Button>이미지 요청</Button>
      </div>
    </Provider>
  );
};

export default App;
