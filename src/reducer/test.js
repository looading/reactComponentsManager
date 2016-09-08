export default function (state = {}, action) {
    switch(action.type) {
        case 'test':
            console.info(action.data);
            return {
                ...state,
                msg: 12
            };
        default:
            return state;
    }
}
