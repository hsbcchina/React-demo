import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    console.log('test render')
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}
