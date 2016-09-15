import React, { Component } from 'react'
import MenuLayer from "./MenuLayer"
import SlidingPage from "./SlidingPage"


class OutterWrapper extends Component {

  render() {
    return (
    	<div className="outter-wrapper">
    		<div className="wrapper">
    			<MenuLayer />
    			{this.props.children}
    		</div>
    		<SlidingPage />
    	</div>
    )
  }
}

export default OutterWrapper