import React, {Component} from 'react';
import ErrorPopup from "../containers/ErrorPopup";
import LoadingSpinner from "../containers/LoadingSpinner";

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper">
				{this.props.children}
				<ErrorPopup />
				<LoadingSpinner />
	    	</div>
	    )
  	}
}

export default OutterWrapper;