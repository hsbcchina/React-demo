import React, { Component, Fragment } from 'react'
import './TodoList.css'
import InputComp from '../child/InputComp'

/**
 * don't transfer input value  use this dangerouslySetInnerHTML 
 * 
 * click lable focus mouse in input ,need add id in input tag, and add htmlFor tag in lable this value equals input'id
 */


export default class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.hangItemDel = this.hangItemDel.bind(this);
  }

  render() {
    return (
      <Fragment>
        <label htmlFor="inputLable">请输入 : </label>
        <input id="inputLable" value={this.state.inputValue} onChange={this.handleOnChanges} className="input" />
        <button onClick={this.onHandleClick}>提交</button>
        <ul>
          {this.getItem()}
        </ul>
      </Fragment>
    )
  }

  getItem = () => {
    return this.state.list.map((item, index) => {
      return <InputComp content={item} index={index} handleMethod={this.hangItemDel} key={index} />
      // <li key={index} onClick={this.hangItemDel.bind(this, index)} dangerouslySetInnerHTML={{ __html: item }}>
      // </li>
    })
  }


  /**
   * chang input value fuc
   */
  handleOnChanges = (e) => {
    const val = e.target.value
    this.setState(() => {
      return { inputValue: val }
    })
  }
  /**
   * submit input value fuc
   */
  onHandleClick = () => {
    this.setState((ps) => {
      return {
        list: [...ps.list, ps.inputValue],
        inputValue: ''
      }
    })
  }
  /**
   * click del list value fuc
   */
  hangItemDel = (index) => {
    this.setState((ps) => {
      let task = ps.list
      task.splice(index, 1)
      return task
    })
  }
}
