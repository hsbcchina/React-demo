import React, { Component, Fragment } from 'react'

export default class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }

  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleOnChanges} />
        <button onClick={this.onHandleClick}>提交</button>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index} onClick={this.hangItemDel.bind(this,index)}>{item}</li>
          })}
        </ul>
      </Fragment>
    )
  }

  /**
   * chang input value fuc
   */
  handleOnChanges = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  /**
   * submit input value fuc
   */
  onHandleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  /**
   * click del list value fuc
   */
  hangItemDel = (index) => {
    let task=this.state.list
    task.splice(index,1)
    this.setState({
      list:task
    })
  }
}
