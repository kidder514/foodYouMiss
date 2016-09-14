import React, { Component } from 'react'

class MainWrapper extends Component {

  render() {
    return (
    	<div className="main-wrapper">
    	{this.children}
    	</div>
    )
  }
}

export default MainWrapper