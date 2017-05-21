import React, {Component} from 'react';
import PostList from "./common/PostList"
import SideBar from "./common/SideBar"
import SearchBox from "../containers/common/Search"

class MyDishPage extends Component{

	componentDidMount() {
		let query = "";
		let userStatus = this.props.userStatus;
		
		if(userStatus.hasLocation){
			query = "location=" + userStatus.currentLocation;
		}
		
        if(this.props.myPostListData.length <= 0){
      	    this.props.initMyPost(query);
        }
  	}

  	render(){
  		if(this.props.myPostListData.length > 0){
	  		return(
	  			<div className="container">
		  			<div className="row">
		  				<div className="col-sm-8">
		  					<SearchBox />
		  					<PostList data={this.props.myPostListData} />
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

export default MyDishPage;
