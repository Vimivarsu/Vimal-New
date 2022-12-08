import React, { Component } from 'react'

const EnComponent=(OrComponent)=>
{
class HOC extends Component {
    constructor(props) {
        super(props)
      
        this.state = { count:0 }
      }
      inc=()=>
      {
        this.setState({count:this.state.count+1})
      }
  render() {
    return (
      <OrComponent name="Suit"
       count={this.state.count} 
       inc={this.inc}/>
    )
}
}
return (HOC)
}
export default EnComponent;