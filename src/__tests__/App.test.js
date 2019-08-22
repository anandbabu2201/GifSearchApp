import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('Rendering main app',() => {

  it('renders App component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('checking searchBar component rendered or not', () => {
    expect(wrapper.find('Connect(Searchbar)')).toHaveLength(1);
  });
  it('checking GifList component rendered or not', () => {
    expect(wrapper.find('Connect(GifList)')).toHaveLength(1);
  });
});
