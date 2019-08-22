import React from 'react';
import {shallow } from 'enzyme';
import GifList from '../components/GifList';
import thunk from 'redux-thunk';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([ thunk ]);
let store ;
let wrapper;

beforeEach(() => {
  store = mockStore({
    gifState:{
      gifData:{
      data:[
        {
          title:"test",
          "id":1,
          images:
            {
              "480w_still":{url: "sampleimage.jpg"},
              "downsized":{url: "simpletext.gif" }
             },
          },
          {
            title:"test",
            "id":2,
            images:
              {
                "480w_still":{url: "sampleimage.jpg"},
                "downsized":{url: "simpletext.gif" }
               },
            }
      ],
      "pagination":{
        "count":25,
        "total_count":7000

      }
      },
      "params":{
        filterBy:'',
      searchBy:"cat"
      }
    }
  });
  wrapper = shallow(<GifList store={store} />).shallow().dive();
});


describe('Testing GifList component',() => {
  it('renders GifList component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('it should render two Gifs',()=> {
  expect(wrapper.find('Gif')).toHaveLength(2);
  })
  it ('it should call handlescroll method on scroll of the component',()=>
  {
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:20,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })
  it ('it should call handlescroll but shuould not when filter by random',()=>
  {
    store = mockStore({
      gifState:{
        gifData:{
        data:[
          {
            title:"test",
            "id":1,
            images:
              {
                "480w_still":{url: "sampleimage.jpg"},
                "downsized":{url: "simpletext.gif" }
               },
            },
            {
              title:"test",
              "id":2,
              images:
                {
                  "480w_still":{url: "sampleimage.jpg"},
                  "downsized":{url: "simpletext.gif" }
                 },
              }
        ],
        "pagination":{
          "count":25,
          "total_count":7000

        }
        },
        "params":{
          filterBy:'RANDOM',
        searchBy:"cat"
        }
      }
    });
    wrapper = shallow(<GifList store={store} />).shallow().dive();
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:20,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })

  it ('it should not call getGifs when total count less than count',()=>
  {
    store = mockStore({
      gifState:{
        gifData:{
        data:[
          {
            title:"test",
            "id":1,
            images:
              {
                "480w_still":{url: "sampleimage.jpg"},
                "downsized":{url: "simpletext.gif" }
               },
            },
            {
              title:"test",
              "id":2,
              images:
                {
                  "480w_still":{url: "sampleimage.jpg"},
                  "downsized":{url: "simpletext.gif" }
                 },
              }
        ],
        "pagination":{
          "count":25,
          "total_count":12

        }
        },
        "params":{
          filterBy:'',
        searchBy:"cat"
        }
      }
    });
    wrapper = shallow(<GifList store={store} />).shallow().dive();
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:20,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })

  it ('it should  call getTrendingGifs when filterby trending',()=>
  {
    store = mockStore({
      gifState:{
        gifData:{
        data:[
          {
            title:"test",
            "id":1,
            images:
              {
                "480w_still":{url: "sampleimage.jpg"},
                "downsized":{url: "simpletext.gif" }
               },
            },
            {
              title:"test",
              "id":2,
              images:
                {
                  "480w_still":{url: "sampleimage.jpg"},
                  "downsized":{url: "simpletext.gif" }
                 },
              }
        ],
        "pagination":{
          "count":25,
          "total_count":120

        }
        },
        "params":{
          filterBy:'Trending'
        }
      }
    });
    wrapper = shallow(<GifList store={store} />).shallow().dive();
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:20,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })

  it ('it should call handlescroll but should not go for data call when scroll didn not reach last node',()=>
  {
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:10,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })

  it ('to check whtere gif array or gif object is coming',()=>
  {
    store = mockStore({
      gifState:{
        gifData:{
        data:{
          title:"test",
          "id":1,
          images:
            {
              "480w_still":{url: "sampleimage.jpg"},
              "downsized":{url: "simpletext.gif" }
             },
          },
        "pagination":{
          "count":25,
          "total_count":120

        }
        },
        "params":{
          filterBy:'Trending'
        }
      }
    });
    wrapper = shallow(<GifList store={store} />).shallow().dive();
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:20,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })

  it ('passing default data with',()=>
  {
    store = mockStore({
      gifState:{
        gifData:{
        "pagination":{
          "count":25,
          "total_count":120

        }
        },
        "params":{
          filterBy:'Trending'
        }
      }
    });
    wrapper = shallow(<GifList store={store} />).shallow().dive();
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:20,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })

  it ('passing empty paginzation',()=>
  {
    store = mockStore({
      gifState:{
        gifData:{
        data:[
          {
            title:"test",
            "id":1,
            images:
              {
                "480w_still":{url: "sampleimage.jpg"},
                "downsized":{url: "simpletext.gif" }
               },
            },
            {
              title:"test",
              "id":2,
              images:
                {
                  "480w_still":{url: "sampleimage.jpg"},
                  "downsized":{url: "simpletext.gif" }
                 },
              }
        ],
        },
        "params":{
          filterBy:'Trending'
        }
      }
    });
    wrapper = shallow(<GifList store={store} />).shallow().dive();
    const event = {
      target: { offsetHeight: 10,
        className:'gifList',
        scrollTop:20,
      scrollHeight:30
     }
    };
    wrapper.find('div').simulate('scroll',event);
  })

});
