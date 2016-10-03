import React, { Component } from 'react'
import { connect } from "react-redux"
import PostList from "../components/PostList"
import { initPosts }from "../../actions"

class Home extends Component{
	 componentDidMount() {
      if(this.props.nearByPosts.length <= 0){
      	this.props.initPosts();
      }
  	}

  	render(){
  		return (
  			<div className="home">
  				Home
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
      dispatch(initPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
