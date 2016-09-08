import React, { Component } from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

import MyApp from "./container";

import Generate from "./generate";


let initData = {
    data: [
        {
            type: 'help',
            id: '0',
            text: {
                msg: 'welcome to ctyloading`s website'
            }
        },
        {
            type: 'dsds',
            id: '1',
            text: {
                msg: 'notjins'
            }
        }
    ],
    structure: {
        root: [
            'help_0',
            'dsds_1'
        ]
    }
};


let componentsList = []





class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { initData, componentsList, id, isFull } = this.props;

        let initProps = {
            initData,
            id,
            isFull: true
        }

        let store = createStore(reducer, initProps)

        return (
            <Provider store={ store }>
                <Generate />
            </Provider>
        )
    }
}

render(
    <App
        initData={ initData }
        componentsList={ componentsList }
        isFull={ true }
        id={ "ctyloading" }
    />,
    document.querySelector('#page')
)
