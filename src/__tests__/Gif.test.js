import React from 'react';
import { mount } from 'enzyme';
import Gif from '../components/Gif';
let wrapper;

describe('Testing Gif component',() => {
  let props={gif:{
    id:1,
    title:"test",
    images:
      {
        "480w_still":{url: "sampleimage.jpg"},
        "downsized":{url: "simpletext.gif" }
       },
    }};
  wrapper = mount(<Gif {...props}/>);
  it('renders atleast one gif', () => {
    expect(wrapper.find('div.eachBlock')).toHaveLength(1);
  });
  it('sould play gif on clicking on play button', () => {
    wrapper.find('div.eachBlock').simulate('click');
    expect(wrapper.find('img').prop('src')).toBe('sampleimage.jpg')
  });
  it('sould stop play gif on clicking again play button', () => {
    wrapper.find('div.eachBlock').simulate('click');
    wrapper.find('div.eachBlock').simulate('click');
  });
});

