import React, {Component} from 'react';
import {connect} from "react-redux";
import RefreshIndicator from "material-ui/RefreshIndicator";

class LoadingSpinner extends Component {

 	render() {
		var display;

		if(this.props.loading){
			display = "";
		}else{
			display = "hidden";
		}

		var style = {
			spinner:{
				left: "50%",
				top: "50%",
				marginLeft:-20,
				marginTop:-20,
			}
		};

	    return (
	    	<div className={"loading-spinner " + display} >
		    	<RefreshIndicator
					size={40}
		    	 	style={style.spinner}
		    		status="loading"
		    	/>
	    	</div>
	    );
 	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.ui.loading
	};
};

export default connect(mapStateToProps, null)(LoadingSpinner);
