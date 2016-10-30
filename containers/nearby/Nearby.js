import React, {Component} from 'react';
import {connect} from "react-redux";
import PostList from "../components/PostList";
import {initNearbyPostsCall}from "../../actions/postActions";

class Nearby extends Component{

	componentDidMount() {
        if(this.props.nearbyPosts.length <= 0){
      	    this.props.initPosts();
        }
  	}

  	render(){
    		return (
            <div className="content-wrapper nearby">
      			    <div className="nearby-content">
      			        <PostList postList={this.props.nearbyPosts}/>
      			    </div>
                <div className="sidebar">
                </div>
            </div>
    			)
    	}
}

const mapStateToProps = (state) => {
	  return {
		    nearbyPosts: state.nearbyPosts
	  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initPosts: () => {
            dispatch(initNearbyPostsCall())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);
