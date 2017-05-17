import React, {Component} from 'react';
import MapSearchBox from "../containers/common/MapSearch"
import SideBar from "./common/SideBar"
import Googlemap from "../helpers/GoogleMap"

class MapPage extends Component {

	componentWillMount() {
		let query = "";
		let userStatus = this.props.userStatus;
		
		if(userStatus.hasLocation){
			query = "location=" + userStatus.currentLocation;
		}

        if(this.props.mapPostListData.length <= 0){
      	    this.props.mapInitPost(query);
        }
  	}

  	render(){
	    return (
  				<div className="container">
  					<div className="row">
  						<div className="col-sm-8">
		  					<MapSearchBox />
	  						<div className="map-wrapper">
	  							<Googlemap 
		  							centerLocation={{lat: -33.872110, lng: 151.206559}}
		  							data={this.props.mapPostListData}
	  							/>
	  						</div>
  						</div>
						<div className="col-sm-4 hidden-xs">
		            		<SideBar currentPage={"map"} />
		                </div>
  					</div>
  				</div>
	    )
  	}
}

export default MapPage;