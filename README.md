# manage react components
![](https://travis-ci.org/looading/reactComponentsManager.svg?branch=master)
## react 服务端组件渲染

## TODO

1.import dependencies

```js
import React from "react";
import { render } from "react-dom";

import App from "react-components-manager";
```

2.import your components

```js
// components
import Help from "../components/Help";
```

3.setup initData and componentsList

```js
let initData = {
    data: [
        {
            // the type is component`s name
            type: 'help',
            // the id is unique
            id: '0',
            // the text is this component`s data
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
        /**
         * root is page`s structure
         * render in turn
         */
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
```

4.render

```js
render(
    <App
        initData={ initData }
        componentsList={ componentsList }
        id={ "ctyloading" }
    />,
    document.querySelector('#page')
)
```
