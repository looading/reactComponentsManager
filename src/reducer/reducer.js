import util from '../util';

const update =  function(state = {}, action) {

  switch (action.type) {
    case 'test':
      var newState = Object.assign({}, state);
      return {
          ...state,
          msg: 12
      };
    case 'update':
      var newState = state;
      let uuid = action.data.uuid;
      let componentData = util.getComponentData(newState, uuid);
      let newComponentData = action.data.callback(uuid, componentData);
      newState = util.mergeComponentData(newState, uuid, newComponentData);
      return newState;
    case 'updateGlobal':
      var newState = Object.assign({}, state);
      return action.data.callback(newState);
    default:
      return state;
  }
}

module.exports = update