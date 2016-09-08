import React, { Component, PropTypes } from "react";

class BasciContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
            </div>
        )
    }
}

BasciContainer.proptypes {
    className: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

module.exports = BasciContainer;
