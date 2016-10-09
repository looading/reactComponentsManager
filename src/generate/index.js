import React, { Component } from "react";
import { connect } from "react-redux";
import { update, updateGlobal } from '../action';



class Generate extends Component {
    constructor(props) {
      super(props);
      this._update = this._update.bind(this);
      this._updateGlobal = this._updateGlobal.bind(this);
    }

    // 更新该组件的 state
    _update(uuid, callback) {
      this.props.update(uuid, callback);
    }
    // 全局更新state
    _updateGlobal(callback) {
      this.props._updateGlobal(callback);
    }
    // 遍历
    iterator(data) {
      data.map(() => {
        return(
            <h1>132</h1>
        )
      })
      return data;
    }

    // 获取组件
    getComponent(uuid) {
      let componentName = uuid.split('_')[0]
      return this.props.componentsList[componentName];
    }
    getData(uuid) {
      let id = uuid.split('_')[1];
      return this.props.initData.collections[id]
    }
    render() {
      let { initData, componentsList, id } = this.props;
      let structure = initData.structure;
      let root = structure.root;

      return(
        <div id={ id } className = { id + '_root' }>
          {
            root.map((item, index, arr) => {
              let uuid = item;
              let Child = this.getComponent(uuid);
              let collection = this.getData(uuid);

              let newProps = {
                // _update: this._update,
                // _updateGlobal: this._updateGlobal,
                update: (callback) => {
                  this._update(uuid, callback);
                },
                updateGlobal: this._updateGlobal,
                collection,
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
  return state.initData.data[id]
}


const mapStateToProps = (state, ownProps) => {
  return {
      ...state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: function (uuid, callback) {
      return dispatch(update(uuid, callback))
    },
    updateGlobal: function (callback) {
      return dispatch(updateGlobal(callback));
    }
  }
}


Generate = connect(mapStateToProps, mapDispatchToProps)(Generate)

module.exports = Generate
