import React, { Component, PropTypes } from "react";

class Help extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.update(this.props.id, (uuid, data) => {
      console.info(uuid, data)
      return data;
    })
  }

  render() {
    let { data, className, id } = this.props;
    return (
      <h1 className={ className } id={ id } onClick={ this.onClick }>{ data.text.msg }</h1>
    )
  }
}


module.exports = Help;
