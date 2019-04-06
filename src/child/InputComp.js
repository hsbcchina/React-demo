import React, { Component } from 'react'

/**
 * use child component and parent component transfer value such as:
 * 
 *  parent component  <A />
 *  child  component  <b />
 *  
 *  <A />  -->   <B /> :    
 *  In A component inner    <B  item={ item }  method ={ this.someMethod } />
 *  In B component inner get A's value :
 *  let value = this.props.item, method().    
 * 
 */
export default class InputComp extends Component {
  render() {
    return (
      <div onClick={this.handleOnDel} key={this.props.index}>
        {this.props.content}
      </div>
    )
  }

  /**
   * child component delete parent component stats value
   */
  handleOnDel = () => {
    this.props.handleMethod(this.props.index)
  }
}
