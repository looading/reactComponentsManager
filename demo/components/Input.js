import React, { Component, PropTypes } from 'react';


class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: this.props.collection.data.value
    };

  }

  onChange(e) {
    let value = e.target.value;
    this.setState({
      value: value
    })

  }


  render() {
    let { collection, className, id } = this.props;
    let data = collection.data;
    return(
      <div className={ "form-group " + className } id={ id }>
        <label className="form-label">{ data.label }</label>
        <input className="form-control" placeholder={ data.placeholder } onChange={ this.onChange } value={ this.state.value } />
        <span className="help-block">{ this.state.value }</span>
      </div>
    )
  }
}

Input.proptypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

module.exports = Input;
