import React, { Component, PropTypes } from "react";
import render from "react-dom";

class Msg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            <i>1321</i>
        )
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        console.info(12312);
    }


    render() {
        let props = this.props;
        let data = props.data;
        console.info(data);
        return (
            <div>
                <h1 >{ data.text.msg }</h1>
                <Msg id={ 1 } />
            </div>
        )
    }
}



module.exports = App;
