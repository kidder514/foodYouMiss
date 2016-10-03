import React, { Component } from 'react'
import SinglePost from "../singlepost/SinglePost"

class PostList extends Component {

  render() {
    return (
    	<div className="post-list">
    	postList
          {
          	this.props.postList.map(post => <SinglePost key={post.postId} post={post} />)
          }
    	</div>
    )
  }
}

export default PostList