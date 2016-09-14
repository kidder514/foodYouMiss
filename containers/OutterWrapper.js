import React, { Component } from 'react'

class OutterWrapper extends Component {

  render() {
    return (
    	<div className="outter-wrapper">
    	{this.children}
    	</div>
    )
  }
}

export default OutterWrapper