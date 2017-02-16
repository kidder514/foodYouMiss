import React, {Component} from 'react';
import RefreshIndicator from "../../uicomponent/button/RefreshIndicator";

class LoadingPage extends Component {

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
		    	 	style={style.spinner}
		    		status="loading"
		    	/>
	    	</div>
	    );
 	}
}


export default LoadingPage;
