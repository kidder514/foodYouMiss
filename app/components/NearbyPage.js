import React, {Component} from 'react';
import PostList from "./common/PostList"
import SideBar from "../containers/common/SideBar"
import SearchBox from "../containers/common/Search"
import Googlemap from "../helpers/GoogleMap"
import config from "../config"

class NearbyPage extends Component{
	constructor(props){
		super(props);
		this.ItemOnMouseEnter = this.ItemOnMouseEnter.bind(this);
		this.ItemOnMouseLeave = this.ItemOnMouseLeave.bind(this);
		this.setMarkers = this.setMarkers.bind(this);
		this.changeMarker = this.changeMarker.bind(this);
		this.markers = [];
	}

	ItemOnMouseEnter(authorId){
		this.changeMarker(authorId, config.mouseInMarker);
	}

	ItemOnMouseLeave(authorId){
		this.changeMarker(authorId, config.mouseOutMarker);
	}

	setMarkers(markers){
		this.markers = markers;
	}

	changeMarker(authorId, icon){
		this.markers.forEach((item, index) => {
			if (item.id === authorId){
				item.setIcon(icon);
			}
		});
	}

  	render(){
  		if(this.props.postListData.length > 0){
	  		return(
	  			<div className="container">
		  			<div className="row">
		  				<div className="col-sm-8">
		  					<SearchBox />
		  					<PostList 
		  						data={this.props.postListData}
		  						onMouseEnter={this.ItemOnMouseEnter}
		  						onMouseLeave={this.ItemOnMouseLeave}
		  						/>
		  				</div>
						<div className="col-sm-4 hidden-xs map-wrapper">
		            		<Googlemap 
		            			centerLocation={{lat: -33.872110, lng: 151.206559}}
		            			data={this.props.postListData}
		            			setMarkers= {this.setMarkers}
		            			/>
		            			
		                </div>
		  			</div>
	        	</div>
	  		);
  		}else{
  			return (
  				<div className="container">
  					<div className="row">
  						<div className="col-sm-8">
		  					<SearchBox />
	  						<div>
	  							Sorry, there is no cook in this area.
	  						</div>
  						</div>
						<div className="col-sm-4 hidden-xs map-wrapper">
		            		<Googlemap 
		            			centerLocation={{lat: -33.872110, lng: 151.206559}}/>
		                </div>
  					</div>
  				</div>
  			);
  		}
    }
}

export default NearbyPage;
