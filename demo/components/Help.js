import React, { Component, PropTypes } from "react";

class Help extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.update((uuid, data) => {
      data.text.msg = '修改成功!'
      return data;
    })
  }

  render() {
    let { collection, className, id } = this.props;
    let data = collection.data;
    return (
      <h1 className={ className } id={ id } onClick={ this.onClick }>{ data.msg }</h1>
    )
  }
}

Help.proptypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

module.exports = Help;
