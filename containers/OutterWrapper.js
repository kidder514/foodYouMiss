import React, { Component } from 'react'
import MenuLayer from "./menu/MenuLayer"
import SlidingPage from "./components/SlidingPage"


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