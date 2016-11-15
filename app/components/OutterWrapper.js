import React, {Component} from 'react';
import ErrorPopup from "../containers/common/ErrorPopup";
import LoadingSpinner from "../containers/common/LoadingSpinner";

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper">
				{this.props.children}
				<ErrorPopup />
				<LoadingSpinner />
			{/*
				there should be also a initilization function here 
				1. load the stored data from browser storage or cookie.
				2. initilize the app.

			*/}
	    	</div>
	    )
  	}
}

export default OutterWrapper;