import React, { Component } from 'react'
import ErrorPopup from "./components/ErrorPopup"
import LoadingSpinner from "./components/LoadingSpinner"

class OutterWrapper extends Component {

  render() {
    return (
    	<div className="outter-wrapper">
			{this.props.children}
			<ErrorPopup />
			<LoadingSpinner />
    	</div>
    )
  }
}

export default OutterWrapper