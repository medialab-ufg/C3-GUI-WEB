import React from 'react';
import ReactDOM from 'react-dom';
import MenuDropdown from './MenuDropdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuDropdown />, div);
});
