import React, { Component } from 'react'
import EnComponent from './HOC';
class HoverCounter extends Component {
    
  render()
   {
    const {count,inc}=this.props
    return (
      <div>
      <h1 onMouseOver={inc}>Hover Me{count}</h1>
      </div>
      
    )
  }
}
export default EnComponent(HoverCounter);