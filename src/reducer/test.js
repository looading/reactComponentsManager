import util from '../util';

export default function(state = {}, action) {
    switch (action.type) {
        case 'test':
            console.info(action.data);
            return {
                ...state,
                msg: 12
            };
        case 'update':
            let newState = util.clone(state);
            return action.data.callback(action.data.componentName, newState);
        default:
            return state;
    }
}
