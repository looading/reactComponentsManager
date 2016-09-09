import React, { Component, PropTypes } from "react";

class Help extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        
    }

    onClick() {
        console.info(this.props);
    }

    render() {
        let { data, className, id } = this.props;
        console.info(this.props);

        return (
            <h1 className={ className } id={ id } onClick={ this.onClick }>{ data.text.msg }</h1>
        )
    }
}


module.exports = Help;
