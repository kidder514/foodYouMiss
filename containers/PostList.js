import React, { Component } from 'react'
import SinglePost from "./SinglePost"

class PostList extends Component {

  render() {
    return (
    	<div className="post-list">
            <SinglePost />
            <SinglePost />
            <SinglePost />
    	</div>
    )
  }
}

export default PostList