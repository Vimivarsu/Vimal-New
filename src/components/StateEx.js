import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor() {
      this.state = {
        val:0,
        name:"Vimal",
        name1:"Varshini"
      }
    }
    inc=()=>{
        this.setState({name:this.state.name1})
    }
  render() {
    return (
      <div>
      <button onClick={this.inc}><h1>{this.state.name}</h1></button>
      </div>
    )
  }
}
