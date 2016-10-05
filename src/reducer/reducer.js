import util from '../util';

export default function(state = {}, action) {

  switch (action.type) {
    case 'test':
      var newState = util.clone(state);
      return {
          ...state,
          msg: 12
      };
    case 'update':
      var newState = util.clone(state);
      // let uuid = action.data.uuid;
      // let componentData = util.getComponentData(newState, uuid);
      // let newComponentData = action.data.callback(uuid, componentData);
      // console.warn(newComponentData)
      // console.info(util.mergeComponentData(newState, uuid, newComponentData), state)
      // return util.mergeComponentData(newState, uuid, newComponentData);
      console.info(state, newState)
      return newState;
    case 'updateGlobal':
      var newState = util.clone(state);
      return action.data.callback(newState);
    default:
      return state;
  }
}
