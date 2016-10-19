import React, { Component } from 'react'
import { connect } from "react-redux"
import PostList from "../components/PostList"
import { initPostsCall }from "../../actions/postActions"

class Subscriptions extends Component{
	 componentDidMount() {
      if(this.props.nearByPosts.length <= 0){
      	this.props.initPosts();
      }
  	}

  	render(){
  		return (
  			<div className="Subscriptions">
  			   <PostList postList={this.props.nearByPosts}/>
  			</div>
  			)
  	}
}

const mapStateToProps = (state) => {
	return {
		nearByPosts: state.nearByPosts
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    initPosts: () => {
      dispatch(initPostsCall())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions)
