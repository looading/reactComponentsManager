import React, { Component, PropTypes } from "react";

class BasciContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return(
            <div>
                { data.text.msg }
            </div>
        )
    }
}

BasciContainer.proptypes {
    className: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

module.exports = BasciContainer;
