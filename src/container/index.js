import {
    connect
} from "react-redux";

import {
    test
} from "../action";

import App from "../components/App";

function getCurrentComponentsData(state, id) {
    console.info(state, id);
    return state.initData.data[id]
}


const mapStateToProps = (state, ownProps) => {
    let nows = getCurrentComponentsData(state, ownProps.id);
    return {
        ...ownProps,
        data: nows
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        test: function() {
            return dispatch(test)
        }
    }
}


let MyApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default MyApp
