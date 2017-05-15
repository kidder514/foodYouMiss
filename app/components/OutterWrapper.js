import React, {Component} from 'react';
import ErrorPopup from "../containers/common/ErrorPopup";
import LoadingSpinner from "../containers/common/LoadingSpinner";
import LoginButton from "./common/LoginButton"
import ImgLayer from "../containers/common/ImgLayer"

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
				{this.props.children}
					<ErrorPopup />
					<LoadingSpinner />
					<LoginButton />
					<ImgLayer />
	    	</div>
	    )
  	}
}

export default OutterWrapper;