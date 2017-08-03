import React, {Component} from 'react';
import DishList from "./common/DishList"
import SideBar from "../containers/common/SideBar"
import SearchBox from "../containers/common/Search"
import Googlemap from "../helpers/GoogleMap"
import config from "../config"

class HomeFoodPage extends Component{
	constructor(props){
		super(props);
		this.ItemOnMouseEnter = this.ItemOnMouseEnter.bind(this);
		this.ItemOnMouseLeave = this.ItemOnMouseLeave.bind(this);
		this.setMarkers = this.setMarkers.bind(this);
		this.changeMarker = this.changeMarker.bind(this);
		this.markers = [];
	}

	ItemOnMouseEnter(cookId){
		this.changeMarker(cookId, config.mouseInMarker);
	}

	ItemOnMouseLeave(cookId){
		this.changeMarker(cookId, config.mouseOutMarker);
	}

	setMarkers(markers){
		this.markers = markers;
	}

	changeMarker(cookId, icon){
		this.markers.forEach((item, index) => {
			if (item.id === cookId){
				item.setIcon(icon);
			}
		});
	}

  	render(){
  		if(this.props.dishListData.length > 0){
	  		return(
	  			<div className="container">
		  			<div className="row">
		  				<div className="col-md-8 col-xs-12">
		  					<SearchBox />
		  					<DishList 
		  						data={this.props.dishListData}
		  						onMouseEnter={this.ItemOnMouseEnter}
		  						onMouseLeave={this.ItemOnMouseLeave}
		  						/>
		  				</div>
						<div className="col-md-4 hidden-sm hidden-xs map-wrapper">
		            		<Googlemap 
		            			centerLocation={{lat: -33.872110, lng: 151.206559}}
		            			data={this.props.dishListData}
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
  						<div className="col-md-8 col-xs-12">
		  					<SearchBox />
	  						<div>
	  							Sorry, there is no cook in this area.
	  						</div>
  						</div>
						<div className="col-md-4 hidden-sm hidden-xs map-wrapper">
		            		<Googlemap centerLocation={{lat: -33.872110, lng: 151.206559}}/>
		                </div>
  					</div>
  				</div>
  			);
  		}
    }
}

export default HomeFoodPage;
