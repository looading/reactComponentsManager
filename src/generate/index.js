import React, { Component } from "react";
import { connect } from "react-redux";
import { update, updateGlobal } from '../action';



class Generate extends Component {
    constructor(props) {
      super(props);
      this.update = this.update.bind(this);
    }
    update(uuid, callback) {
      this.props.update(uuid, callback);
    }
    updateGlobal(callback) {
      this.props.updateGlobal(callback);
    }
    iterator(data) {
      data.map(() => {
        return(
            <h1>132</h1>
        )
      })
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
      let { initData, componentsList, id } = this.props;
      let structure = initData.structure;
      let root = structure.root;

      return(
        <div id={ id } className = { id + '_root' }>
          {
            root.map((item, index, arr) => {
              let uuid = item;
              let Child = this.getComponent(uuid);
              let data = this.getData(uuid);

              let newProps = {
                data,
                update: this.update,
                updateGlobal: this.updateGlobal,
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
    update: function (componentName, callback) {
      return dispatch(update(componentName, callback))
    },
    updateGlobal: function (callback) {
      return dispatch(updateGlobal(callback));
    }
  }
}


Generate = connect(mapStateToProps, mapDispatchToProps)(Generate)

module.exports = Generate
