import React, { Component } from "react";
let len = 4

class Generate extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        len --;
        return(
            <ul>
                {
                    (() => {
                        for(;len>0;) {
                            return (
                                <div key={len}>
                                    <h1>12312</h1>
                                    <Generate />
                                </div>
                            )
                        }
                    })()
                }

            </ul>
        )
    }
}


module.exports = Generate
