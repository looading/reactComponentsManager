import React, { Component } from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

import Generate from "./generate";

class App extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    let { initData, componentsList, id } = this.props;
    let initProps = {
      initData,
      id,
      componentsList,
    }
    let store = createStore(reducer, initProps)
    return (
      <Provider store={ store }>
        <Generate />
      </Provider>
    )
  }
}

module.exports = App;
