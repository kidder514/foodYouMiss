import React, {Component} from 'react';
import {connect} from "react-redux";
import PostList from "../components/PostList";
import {initSubscriptionsPostsCall}from "../../actions/postActions";

class Subscriptions extends Component{

	  componentDidMount() {
        if(this.props.subscriptionsPosts.length <= 0){
      	    this.props.initPosts();
        }
  	}

  	render(){
    		return (
            <div className="content-wrapper subscriptions">
      			    <div className="subscriptions-content">
      			        <PostList postList={this.props.subscriptionsPosts}/>
      			    </div>
                <div className="sidebar">
                </div>
            </div>
    			)
    	}
}

const mapStateToProps = (state) => {
	  return {
		    subscriptionsPosts: state.subscriptionsPosts
	  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initPosts: () => {
            dispatch(initSubscriptionsPostsCall())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
