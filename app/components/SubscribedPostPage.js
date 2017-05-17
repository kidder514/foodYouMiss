import React, {Component} from 'react';
import PostList from "./common/PostList"
import SideBar from "./common/SideBar"
import SearchBox from "../containers/common/Search"

class SubscribedPostPage extends Component{

	componentDidMount() {
		let query = "";
		let userStatus = this.props.userStatus;
        if(this.props.subscribedPostListData.length <= 0 && this.props.userStatus.isLoggedIn){
      	    this.props.initSubscribedPost(query);
        }
  	}

  	render(){
  		if(this.props.subscribedPostListData.length > 0){
	  		return(
	  			<div className="container">
		  			<div className="row">
		  				<div className="col-sm-8">
		  					<PostList data={this.props.subscribedPostListData} />
		  				</div>
						<div className="col-sm-4 hidden-xs">
		            		<SideBar currentPage={"subscribedPostPage"} />
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
	  							Sorry, you are not logged in or you don't have any subscription.
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

export default SubscribedPostPage;
