import React, {Component} from 'react';

class SearchBox extends Component {

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
	    	<div className="search-box" >
	    	search box
	    	</div>
	    );
 	}
}


export default SearchBox;
