import React from 'react';
import ReactDOM from 'react-dom';
import UpdateUser from './UpdateUser';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});