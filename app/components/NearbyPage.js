import React, {Component} from 'react';
import PostList from "./common/PostList"
import SideBar from "../containers/common/SideBar"
import SearchBox from "../containers/common/Search"

class NearbyPage extends Component{

  	render(){
  		if(this.props.postListData.length > 0){
	  		return(
	  			<div className="container">
		  			<div className="row">
		  				<div className="col-sm-8">
		  					<SearchBox />
		  					<PostList data={this.props.postListData} />
		  				</div>
						<div className="col-sm-4 hidden-xs">
		            		<SideBar currentPage={"home"} />
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
						<div className="col-sm-4 hidden-xs">
		            		<SideBar currentPage={"home"} />
		                </div>
  					</div>
  				</div>
  			);
  		}
    }
}

export default NearbyPage;
