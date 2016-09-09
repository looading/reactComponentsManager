import React, { Component } from "react";
import { connect } from "react-redux";

class Generate extends Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
    }
    test() {
        this.props.test();
    }
    iterator(data) {
        data.map(() => {
            return(
                <h1>132</h1>
            )
        })
        console.info(data);
        return data;
    }

    getComponent(uuid) {
        let componentName = uuid.split('_')[0]
        return this.props.componentsList[componentName];
    }
    getData(uuid) {
        let id = uuid.split('_')[1];
        return this.props.initData.data[id]
    }
    render() {
        let { initData, componentsList, id, className } = this.props
        let structure = initData.structure;
        let root = structure.root;
        return(
            <div className={ className } id={ id }>
                {
                    root.map((item, index, arr) => {
                        let uuid = item;
                        let Child = this.getComponent(uuid);
                        let data = this.getData(uuid);

                        let newProps = {
                            data,
                            test: this.test,
                            className: `${id}_${uuid}`,
                            id: uuid
                        }
                        return(
                            <Child { ...newProps } key={ index }/>
                        )
                    })
                }
            </div>
        )
    }
}


function getCurrentComponentsData(state, id) {
    console.info(state, id);
    return state.initData.data[id]
}


const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        test: function() {
            return dispatch(test)
        }
    }
}


Generate = connect(mapStateToProps, mapDispatchToProps)(Generate)

module.exports = Generate
