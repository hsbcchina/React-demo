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
 *  code style change to func style such as:
 *  this.setState({value: a })   ---->   this.setState((ps)=>{return {ps.value}})
 * 
 */
export default class InputComp extends Component {
  
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleOnDel} >
        {content}
      </div>
    )
  }

  /**
   * child component delete parent component stats value
   */
  handleOnDel = () => {
    const {handleMethod,index} = this.props
    handleMethod(index);
  }
}
