import React from "react";
import { render } from "react-dom";

import App from "../../src";

// components
import Help from "../components/Help";
import Input from '../components/Input';

let initData = {
    collections: [
        {
            type: 'help',
            id: '0',
            data: {
                msg: 'welcome to ctyloading`s website'
            }
        },
        {
            type: 'help',
            id: '1',
            data: {
                msg: '老子是你大哥!'
            }
        },
        {
            type: 'help',
            id: '2',
            data: {
                msg: '小的知错了!'
            }
        },
        {
          type: 'input',
          id: '3',
          data: {
            placeholder: 'please input your name',
            label: 'name',
            value: ''
          }
        }
    ],
    structure: {
        root: [
            'help_0',
            'help_1',
            'help_2',
            'input_3'
        ]
    }
};
let componentsList = {
    help: Help,
    input: Input
}

render(
    <App
        initData={ initData }
        componentsList={ componentsList }
        id={ "ctyloading" }
    />,
    document.querySelector('#page')
)
