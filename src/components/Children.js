import React, { Component, PropTypes } from "react";
import { clone } from '../utils'

class Children extends Component {
  constructor(props) {
    super(props);
  }

  getData(cb = (data)=>{}) {
    cb(data);
  }

  render() {
    let props = clone(this.props);
    let newProps = {
        getData: this.getData
    }
    return (
        <Target
          { ...newProps }
        />
    )
  }
}

module.exports = Children;
