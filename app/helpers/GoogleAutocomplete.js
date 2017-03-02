import React, {Component} from "react";
import TextField from '../uicomponent/form/TextField';

export default class extends Component{
	constructor(props){
		super(props);
		this.state = {
			location:"",
			errorLocaltion:"",
			coordinate: ""
		};
		this.autocomplete;

		this.fillInAddress = this.fillInAddress.bind(this);
		this.geolocate = this.geolocate.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	shouldComponentUpdate(){
		return false;
	}

	componentDidMount(){
		this.autocomplete = new google.maps.places.Autocomplete( 
			this.refs.autocomplete, 
			{
				types:["geocode"],
				componentRestrictions: {country: 'au'}
			}
		);
		this.autocomplete.addListener("place_changed", this.fillInAddress);
	}

	componentWillUnmount(){
		// this causes error, so it is commented out, now we need to make sure it does not
		// duplicate autocomplete instance.
		// this.autocomplete.removeListener("place_changed", this.fillInAddress);
	}

	geolocate(){
		var autocomplete = this.autocomplete;
        if (window.navigator.geolocation) {
          	window.navigator.geolocation.getCurrentPosition(function(position) {
	            var geolocation = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	            };
	            var circle = new google.maps.Circle({
	              center: geolocation,
	              radius: position.coords.accuracy
	            });
	            autocomplete.setBounds(circle.getBounds());
          	});
        }
	}

	fillInAddress(){
		this.props.handleLocaltion(this.autocomplete.getPlace())
	}

	onChange(e){
		this.props.autocompleteOnChange(e);
	}
	
	render(){

		return(
	    	<div className="textfield-wrapper" >
				<input 
					id="autocomplete"
					className="autocomplete textfield-input form-control"
					ref="autocomplete"
					onFocus={this.geolocate}
					onChange={this.onChange}
		    		placeholder={this.props.placeholder  !== undefined ? this.props.placeholder : ""}
				/>
			</div>
		);
	}
}