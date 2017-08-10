import React from 'react';
import ReactDOM from 'react-dom';
import C3Navbar from './C3Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<C3Navbar />, div);
});
