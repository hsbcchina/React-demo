import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
    const { content,test } = this.props;
    return (
      <div onClick={this.handleOnDel} >
        {content}-{test}
      </div>
    )
  }

  /**
   * child component delete parent component stats value
   */
  handleOnDel = () => {
    const { handleMethod, index } = this.props
    handleMethod(index);
  }
  
}
/**
 * some args type check method
 */
InputComp.propTypes = {
  content:PropTypes.string,
  handleMethod:PropTypes.func,
  index:PropTypes.number,
  test:PropTypes.string.isRequired
}
/**
 * check some transfer args default value set
 */
InputComp.defaultProps={
  test:'hello props'
}