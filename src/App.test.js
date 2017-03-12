import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('App', () => {
  it('Check the header', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('p').text()).toBe('Hello World')
  });
});
