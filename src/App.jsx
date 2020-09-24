import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import importedStore from './redux/store'
import Counter from './components/Counter'


function App() {
  return (
    <Router>
      <Provider store={importedStore}>
          <Counter />
         
      </Provider>
    </Router>
  );
}

export default App;
