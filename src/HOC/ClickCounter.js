import React, { Component } from 'react'
import EnComponent from './HOC'
class ClickCounter extends Component {
  
  render() {
    const {count,inc}=this.props
    return (
      <div>
      <button onClick={inc}>Click{this.props.name}{count}</button>
      </div>
    )
  }

}
export default EnComponent(ClickCounter);