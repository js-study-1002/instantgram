import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootStore, { saga } from './module';
import Test from './components/Test';

import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
      </div>
      ;
    </Provider>
  );
};

export default App;
