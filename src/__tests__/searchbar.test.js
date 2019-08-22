import React from 'react';
import {shallow} from 'enzyme';
import Searchbar from '../components/Searchbar';
import thunk from 'redux-thunk';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([ thunk ]);
let store ;
let wrapper;

beforeEach(() => {
  store = mockStore({});
  wrapper = shallow(<Searchbar store={store} />).shallow();
});

describe('Rendering searchbar component',() => {
  it('renders Searchbar component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('searchbar component rendered 3 div elements', () => {
    expect(wrapper.find('div')  ).toHaveLength(3);
  });
  it('searchbar component rendered input elements', () => {
    expect(wrapper.find('input')  ).toHaveLength(1);
  });
  it('searchbar component rendered button elements', () => {
    expect(wrapper.find('button')  ).toHaveLength(2);
  });
});

describe('sumulating actions on searchbar component',() => {

  it('it should call callGifData on change of text in input ', () => {
    const event = {
      target: { value: 'testvalue',scrollHeight:20 }
    };
    wrapper.find('input').simulate('change',event);
  });
  it('clicking on random gif', () => {
    wrapper.find('button').at(0).simulate('click');
  });
  it('clicking on Trending gif', () => {
    wrapper.find('button').at(1).simulate('click');
  });
  it('checking if the user entered any data and clear while click on TrendingGif ', () => {
    const event = {
      target: { value: 'testvalue' }
    };
    wrapper.find('input').simulate('change',event);
    wrapper.update();
    wrapper.find('button').at(1).simulate('click');
  });
  it('checking if the user filtered gifs by trending data and clear while typing', ()=> {
    const event = {
      target: { value: 'testvalue' }
    };
    wrapper.find('button').at(1).simulate('click');
    wrapper.update();
    wrapper.find('input').simulate('change',event);
  });

});
