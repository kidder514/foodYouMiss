import React, {Component} from "react";
import config from "../config"

export default class GoogleMap extends Component{
	constructor(props){
		super(props);
		this.showMarkers = this.showMarkers.bind(this);
		this.createInfoWindow = this.createInfoWindow.bind(this);
		this.markers = [];
	}

	showMarkers(){
		if (this.props.data != undefined && this.props.data.length > 0){

			var data = this.props.data;
			var locations = [];
			var ids = [];
			var markers = [];
			var infoWindow = null;

			for (var i = 0; i < data.length; i++)
			{
				if (ids.indexOf(data[i].authorId) == -1)
				{
					locations.push({lat: parseFloat(data[i].postCoordinate.latitude),
					lng: parseFloat(data[i].postCoordinate.longitude)});
					ids.push(data[i].authorId);
				}

			}

		    locations.map((location, i) => {
	        	var marker = new google.maps.Marker({
					position: location,
					map: this.map,
					id: data[i].authorId,
					icon: config.mouseOutMarker
				});
		        marker.addListener('click', () => {
		        	if(infoWindow){
		        		infoWindow.close();
		        	}
					infoWindow = this.createInfoWindow(data[i]);
					infoWindow.open(this.map, marker);

		        });

		        markers.push(marker);
	        });
		    this.props.setMarkers(markers);

		}
	}

	createInfoWindow(data){

		if(data.authorSignature != null)
		{
			var authorSignature = '<span className="signature">' + authorSignature + '</span>';
		}

		// var imageSection = "";
		// if (data.postImgUrls.length == 1){
		// 	imageSection += 
		// 	'<section class="map-img-section">'+
		// 	'<img class="col-xs-4" src="' + data.postImgUrls[0].thumbnail + '" />'+
		// 	'</section>';
		// }else if (data.postImgUrls.length == 2){
		// 	imageSection = 
		// 	'<section class="map-img-section">'+
		// 	'<img class="col-xs-4" src="' + data.postImgUrls[0].thumbnail + '" />'
		// 	'<img class="col-xs-4" src="' + data.postImgUrls[1].thumbnail + '" />'
		// 	'</section>';
		// }else if (data.postImgUrls.length >= 3){
		// 	imageSection = 
		// 	'<section class="map-img-section">'+
		// 	'<img class="col-xs-4" src="' + data.postImgUrls[0].thumbnail + '" />'+
		// 	'<img class="col-xs-4" src="' + data.postImgUrls[1].thumbnail + '" />'+
		// 	'<img class="col-xs-4" src="' + data.postImgUrls[2].thumbnail + '" />'+
		// 	'</section>';
		// }

		//google map requires this to be string
		var infoWindowContent = 
		'<div class="info-window">'+
		'<div class="info-header">'+
		'<img src="' + data.authorImg + '" />'+
		'</div>' +
		'<h2>' + data.authorName + '</h2>' +
		authorSignature +
		'</div>' +
		'<div class="info-content">'+
		'<p>' + data.postDescription + '</p>' +
		'</div>';

		return new google.maps.InfoWindow({
			content:infoWindowContent,
		});
	}

	componentDidMount(){
		this.map = new google.maps.Map(this.refs.map, {
        	center: {lat: this.props.centerLocation.lat, lng: this.props.centerLocation.lng},
        	zoom: 13,
        	streetViewControl: false,
		});
		this.showMarkers();
	}

	componentDidUpdate(){
		this.showMarkers();		
	}

	componentWillUnmount(){
	}
	
	render(){
		return(
			<div 
				id="googlemap"
				className="googlemap"
				ref="map"
				onChange={this.onChange}
			>google map</div>
		);
	}
}