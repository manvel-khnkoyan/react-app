import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './resources/app.css'
import Index from './components/index'

function App() {
  return (
      <Provider store={store}>
          <Index/>
      </Provider>
  );
}

export default App;
