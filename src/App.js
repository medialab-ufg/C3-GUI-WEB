import React from 'react';
import './App.css';

import C3Navbar from './components/C3Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <C3Navbar />
        <p>C³-GUI</p>
      </div>
    );
  }
}

export default App;
