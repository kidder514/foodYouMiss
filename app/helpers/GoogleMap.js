import React, {Component} from "react";

export default class GoogleMap extends Component{
	constructor(props){
		super(props);

	}

	shouldComponentUpdate(){
		return false;
	}

	componentDidMount(){
		this.map = new google.maps.Map(this.refs.map, {
        	center: {lat: -34.397, lng: 150.644},
        	zoom: 8
		});
	}

	componentWillUnmount(){
		// this causes error, so it is commented out, now we need to make sure it does not
		// duplicate autocomplete instance.
		// this.autocomplete.removeListener("place_changed", this.fillInAddress);
	}
	
	render(){

		return(
			<div 
				id="autocomplete"
				className="autocomplete textfield-input form-control"
				ref="map"
				onChange={this.onChange}
	    		placeholder={this.props.placeholder  !== undefined ? this.props.placeholder : ""}
			/>
		);
	}
}