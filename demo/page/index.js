import React from "react";
import { render } from "react-dom";

import App from "../../src";

// components
import Help from "../components/Help";

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
            type: 'help',
            id: '1',
            text: {
                msg: '老子是你大哥!'
            }
        },
        {
            type: 'help',
            id: '2',
            text: {
                msg: '小的知错了!'
            }
        },
    ],
    structure: {
        root: [
            'help_0',
            'help_1',
            'help_2'
        ]
    }
};
let componentsList = {
    help: Help
}

render(
    <App
        initData={ initData }
        componentsList={ componentsList }
        id={ "ctyloading" }
    />,
    document.querySelector('#page')
)
