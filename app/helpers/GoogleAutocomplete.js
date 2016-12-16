import React, {Component} from "react";
import TextField from 'material-ui/TextField';

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
		this.autocomplete.removeListener("place_changed", this.fillInAddress);
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

	render(){
		let style = this.props.style;

		return(
			<input 
				id="autocomplete"
				className="autocomplete"
				ref="autocomplete"
				onFocus={this.geolocate}
				type="text"
			/>

		);
	}
}