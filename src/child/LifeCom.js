import React, { Component } from 'react'

export default class LifeCom extends Component {
    constructor(props) {
        super(props)
        console.log('init method')
    }
    /**
     * 被挂在到页面前执行
     */
    componentWillMount() {
        console.log('will update to page before')
    }
    /**
     * 被挂在到页面后执行
     */
    componentDidMount() {
        console.log('updated to page')
    }
    shouldComponentUpdate() {
        console.log('should uodate component')
        return true;
    }

    render() {
        console.log('render ,method')
        return (
            <div>
                life cycle method
            </div>
        )
    }
}
