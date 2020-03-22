import React from 'react';

import './styles.css'

import Header from './components/Header';
import Main from './pages/main'

// Transformando o App em um 'stateless component' minimificado
const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);


export default App;
