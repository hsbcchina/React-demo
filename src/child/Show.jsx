import React, { Component, Fragment } from 'react'
import '../child/style.css'
export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.show?'show':'hide'}>
                    hello world!!!
                </div>
                <button onClick={this.handleOnShow}>toggle</button>
            </Fragment>
        )
    }
    handleOnShow = () => {
        this.setState((ps) => {
            return{ show: ps.show ? false : true}
        })
    }
}
