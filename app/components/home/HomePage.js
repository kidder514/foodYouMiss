import React, {Component} from 'react';
import PostList from "../common/PostList"
import SideBar from "../common/SideBar"
import SearchBox from "../../containers/common/Search"

class HomePage extends Component{


	componentDidMount() {

		let query = "";
		let userStatus = this.props.userStatus;
		
		if(userStatus.hasLocation){
			query = "location=" + userStatus.currentLocation;
		}

        if(this.props.postListData.length <= 0){
      	    this.props.initPosts(query);
        }
  	}

  	render(){
  		if(this.props.postListData.length > 0){
	  		return(
	  			<div className="full-width-wrapper">
		  			<div className="content-wrapper">
		  				<div className="post-list">
		  					<SearchBox />
		  					<PostList data={this.props.postListData} />
		  				</div>
						<div className="sidebar">
		            		<SideBar currentPage={"home"} />
		                </div>
		  			</div>
	        	</div>
	  		);
  		}else{
  			return (
  				<div className="full-width-wrapper">
  					<div className="content-wrapper">
  						<div className="post-list">
		  					<SearchBox />
	  						<div>
	  							Sorry, there is no cook in this area.
	  						</div>
  						</div>
						<div className="sidebar">
		            		<SideBar currentPage={"home"} />
		                </div>
  					</div>
  				</div>
  			);
  		}


    }
}

export default HomePage;
