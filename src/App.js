import React, { Component } from "react";

import { Provider } from "react-redux";
import Searchbar from './components/Searchbar';
import GifList from './components/GifList'
import store from "./store/store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="appBody">
        <Searchbar></Searchbar>
        <GifList/>
        </div>
      </Provider>
    );
  }
}

export default App;
