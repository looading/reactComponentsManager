# manage react components
![](https://travis-ci.org/looading/reactComponentsManager.svg?branch=master)
[![npm](https://img.shields.io/npm/v/react-components-manager.svg?maxAge=2592000)](https://www.npmjs.com/package/react-components-manager)
[![npm](https://img.shields.io/npm/dm/react-components-manager.svg?maxAge=2592000)](https://www.npmjs.com/package/react-components-manager)
## react 服务端组件渲染

## TODO

### import dependencies

```js
import React from "react";
import { render } from "react-dom";

import App from "react-components-manager";
```

### import your components

```js
// components
import Help from "../components/Help";
```

### setup initData and componentsList

```js
let initData = {
    collections: [
        {
            // the type is component`s name
            type: 'help',
            // the id is unique
            id: '0',
            // the text is this component`s data
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

### render

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

### components

```js
import React, { Component, PropTypes } from "react";

class Help extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.update(this.props.id, (componentName, state) => {
          console.info(componentName, state)
          return state;
        })
    }

    render() {
        // data为传入的数据，initData中所对应组件的数据
        // className id 为 App 自动生成，必须放入最外层div
        let { collection, className, id } = this.props;
        let data = collection.data;
        return (
            <h1 className={ className } id={ id } onClick={ this.onClick }>{ data.msg }</h1>
        )
    }
}


module.exports = Help;

```

#### this.props

```js
let { id, collection, className, update, updateGlobal } = this.props;
// id 组件唯一标识
// data initData中所对应组件的数据
// className sdk生成的className
// update 手动更新state的接口
```

##### this.props.update

params:
  - id 组件的唯一标识
  - callback 回调函数
    - id 组件的唯一标识
    - state 应用的state

```js
this.props.update(this.props.id, (id, state) => {
    return state; // 修改后必须返回
  })
```

##### this.props.updateGlobal

params:
  - callback 回调函数
    - id 组件的唯一标识
    - state 应用的state

```js
this.props.updateGlobal((id, state) => {
    return state; // 修改后必须返回
  })
```

## 更新中····
