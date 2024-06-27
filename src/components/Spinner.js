import React, { Component } from 'react'
import roller from "./roller.gif"
export class Spinner extends Component {
   
   
  render() {
    return (
      <div>
        <img src={roller} alt="loading" />
      </div>
    )
  }
}

export default Spinner
 